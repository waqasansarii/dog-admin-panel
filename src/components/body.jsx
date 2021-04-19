import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import right1 from "../assets/right1.png";
import right2 from "../assets/right2.png"

const Body = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease'
        })
    }, [])

    return (
        <div className='body_text_container'>
            <div className='body_text_main_div'>
                <div>
                    <h3 data-aos="zoom-in"><strong> Distribuimos productos de alta gama para mascotas</strong></h3>
                    <p data-aos="zoom-in">
                        Sabemos que los dueños de mascotas son cada vez más exigentes en sus visitas a los centros veterinarios y
                        tiendas de retail. Siempre están buscando lo último en tendencia tanto en juguetería como en alimentación ya
                        que su peludo “se aburre o simplemente no pescó el juguete”, leen mucho y reciben demasiadas
                        recomendaciones de lo que ven en la web, influencers, amigos de la plaza, canales de Youtube, etc. Es
                        realmente una locura!
                  </p>
                    <p data-aos="fade-up">
                        Por eso y mucho más hemos creado <strong> PetCost. </strong>  Un aliado del sector retail que te ayudará a tener en góndola el 
                        <strong> surtido más atractivo y de alta calidad para los que quieren realmente a sus perros y gatos</strong>
                    
                   </p>
                </div>
                <div className='dog_img_div'>
                    <img className='dog_img' width="240px" height="240px" data-aos="zoom-in-up" src={right1} alt="1" />
                    <img className='dog_img' width="240px" height="240px" data-aos="zoom-in-up" src={right2} alt="2" />
                </div>
            </div>
        </div>
    )
}

export default Body
