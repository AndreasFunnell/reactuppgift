import React from 'react'
import './NavSection.css'
import img_logotype from '../../assets/images/Logo.svg'

const NavSection = () => {
  return (
    <section className="nav-section">
        <div className="container">

            <div className="logotype"> 
                <a href="index.html">
                    <img className ="logo-image" src={img_logotype} alt="Logo"/>
                </a>
            </div>
            <div className="contactinformation-bar">
                <div className="content-box">
                    <i className="fa-sharp fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div className="content-box">
                    <i className="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div className="content-box last">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div className="socialmedia-bar">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank>"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank>"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank>"><i className="fa-brands fa-linkedin"></i></a>  
            </div>
            <div className="menu">
                <nav>
                    <a className="active" href="/">Home</a>
                    <a href="services.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="contacts">Contact</a>
                </nav>
                <a className="btn-yellow btn-login" href="login.html">Login <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default NavSection