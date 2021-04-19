import React, { useEffect, useState } from 'react'
import Table from '../components/table'
import firebase from 'firebase'
import { brandsData, logout } from '../globalState/slice'
import { useDispatch } from 'react-redux'
import ImgList from '../components/imgList'
import { Link, useHistory } from 'react-router-dom'




const AdminPanel = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    let [data, setData] = useState([])
    let [id, setid] = useState('')
    let [img, setImg] = useState('')
    let [local, setLocal] = useState('')
    let [imgname, setImgName] = useState('')

    let db = firebase.firestore().collection('userBrand')
    let dbImg = firebase.firestore().collection('images')

    useEffect(() => {
        const firebaseDb = async () => {
            db.onSnapshot((dataDb) => {
                const userData = []

                dataDb.forEach((val) => {
                    setid(val.id)
                    userData.push(val.data())

                })
                dispatch(brandsData(userData))
            })
        }
        firebaseDb()
    }, [])



    const handleImg = (e) => {
        const url = URL.createObjectURL(e.target.files[0])
        const imgName = e.target.files[0].name
        setImg(url)
        setImgName(imgName)
        setLocal(e.target.files[0])
        // console.log(imgName)
    }

    const uploadImg = () => {
        let store = () => firebase.storage().ref(`user/${imgname}`).put(local)
        let downLoad = () => firebase.storage().ref(`user/${imgname}`).getDownloadURL()
        //  // get current user image using userid
        store().then(() => {
            downLoad()
                .then((url) => {
                    let userImg = url
                    setImg(userImg)
                    //  console.log(userImg)
                    dbImg.doc().set({ img: url, time: Date.now() })
                        .then(() => {
                            // console.log('img uploaded');
                            setLocal('');
                            setImgName('')
                            setImg('')
                        })
                        .catch((e) => {
                            // console.log(e)
                        })

                })
                .catch((err) => {
                    // console.log('failed to download')
                })

        })
    }
    const logOut = async () => {
        firebase.auth().signOut()
        try {
            dispatch(logout(false))
            history.push('/login')
        }
        catch {
            console.log('failed')
        }
    }

    return (
        <div>
            <div className='logout_btn_div'>
                <Link to='/'>
                    <button className='upload_btn'  >Home</button>
                </Link>
                <button className='upload_btn' style={{ marginLeft: '10px' }} onClick={logOut}>Log out</button>
            </div>
            <Table body={data} />
            <ImgList />
            <div className='upload_img_div'>
                <h5 style={{ marginTop: '20px' }}><strong>Upload New Brands:</strong></h5>
                <input className='upload_file_inp' type="file" onChange={(e) => handleImg(e)} alt="" />
                <img className={img ? 'upload_img' : null} src={img ? img : ''} alt="" />
                {img ?
                    <button onClick={uploadImg} className='upload_btn'>Upload </button>
                    : null
                }
            </div>

        </div>
    )
}

export default AdminPanel
