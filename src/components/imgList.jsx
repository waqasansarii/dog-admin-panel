import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { useDispatch, useSelector } from 'react-redux'
import { addimg } from '../globalState/slice'

const ImgList = () => {

    let dbImg = firebase.firestore().collection('images')
    const dispatch = useDispatch()
   let selector = useSelector((state)=>{
       return state.brandReducer.images
   })
//    console.log(selector)
    useEffect(() => {
        const imgDb = async () => {
            dbImg.orderBy("time","desc").onSnapshot((dataDb) => {

                const images = []
                dataDb.forEach((val) => {

                    let img = val.data()
                    let id = val.id
                    img.id = id
                    images.push(img)
                })
                dispatch(addimg(images))
            })
          
        }
        imgDb()
    }, [])

    const handleDelete =(e)=>{
     dbImg.doc(e).delete()
    }
    return (
        <div>
            <div className='img_list_main_div'>
                <h5><strong>Existing Brands</strong></h5>
                <ul className='img_list_ul'>
                {selector.length ?selector.map((val, id) => (
                        <li key={id}>
                            <img className='list_img' src={val.img} alt="" />
                            <button className='upload_btn' onClick={() => handleDelete(val.id)}>Delete</button>
                        </li>
                )) : <p>No Images to show</p>}
                </ul>
            </div>
        </div>
    )
}

export default ImgList
