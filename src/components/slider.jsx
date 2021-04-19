import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase'
import { addimg } from '../globalState/slice'
import { Carousel } from 'react-bootstrap'

export const SimpleSlider = () => {

    let dbImg = firebase.firestore().collection('images')
    const dispatch = useDispatch()
    const selector = useSelector((state) => {
        return state.brandReducer.images
    })
    // console.log(selector)
    useEffect(() => {
        const imgDb = async () => {
            dbImg.orderBy("time", "desc").onSnapshot((dataDb) => {

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


    return (
        <div className='slider_container' id='brands'>
            <div className="slider_main_div">
                <div className='from_head'>
                    <h3><strong className='slider_heead'>Marcas</strong></h3>
                </div>

                {selector.length ?
                    <Carousel >
                        {selector.length && selector.map((val) => (
                                <Carousel.Item>
                                    <img
                                        className="d-block slider_img"
                                        src={val.img}
                                        alt="First slide"
                                    />
                                <Carousel.Caption>
                                    <a href="https://www.flipsnack.com/C5D8AEEEFB5/cat-logo-oficial-hunter-2021/full-view.html" target='_blank'>

                                        <button className='upload_btn slider_btn'>Ver Catálogo</button>
                                    </a>
                                </Carousel.Caption>
                                </Carousel.Item>
                        ))}
                    </Carousel>
                    : null} 
            </div>


        </div>
    );
}