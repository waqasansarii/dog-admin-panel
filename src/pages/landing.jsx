import React from 'react'
import UserForm from '../components/userForm'
import Body from '../components/body'
import { SimpleSlider } from '../components/slider'
import Header from '../components/header'


const Landing = () => {
    return (
        <div>
            <Header />
            <Body />
            <SimpleSlider />
            <UserForm />

            <div>
                <footer id="footer">
                    <div className="container-fluid">
                        <i className="social-btn fab fa-facebook-f" />
                        <i className="social-btn fab fa-instagram" />
                        <p>© Copyright 2021 Pet Cost</p>
                <div className='footer_main_div'>
                    <img style={{width:'60px'}} src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg" alt=""/>
                    <img style={{width:'65px',marginLeft:'10px'}} src="https://i.redd.it/m8lbhjrm4z651.jpg" alt=""/>
                    <img style={{width:'55px',marginLeft:'10px'}} src="https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg" alt=""/>
                </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Landing
