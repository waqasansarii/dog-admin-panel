import React, { useEffect } from 'react'
import logo from '../assets/filenameArtboard 1_2x.png'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease'
        })
    }, [])
    return (
        <div className='header_conatiner'>
            <section id="title">
                <div className="container-fluid">
                    {/* Nav Bar */}
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <div className='header_main_div'>
                            <img className='logo' src={logo} alt="" />
                            
                            <div className="navbar-collaps" id="navbarTogglerDemo02">
                                <ul className="navbar-na xustom_nav ml-auto">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#brands" className="nav-link">Marcas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#form" className="nav-link">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>

        </div>
    )
}

export default Header
