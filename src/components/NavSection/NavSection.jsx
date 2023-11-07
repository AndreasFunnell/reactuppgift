import React from 'react'
import './NavSection.css'

const NavSection = () => {
  return (
    <section class="nav-section">
        <div class="container">

            <div class="logotype"> 
                <a href="index.html">
                    <img src="images/Logo.svg" alt="Logo"/>
                </a>
            </div>
            <div class="contactinformation-bar">
                <div class="content-box">
                    <i class="fa-sharp fa-regular fa-phone-volume"></i>
                    +46 (8) 121 470 50
                </div>
                <div class="content-box">
                    <i class="fa-regular fa-envelope"></i>
                    info@crito.com
                </div>
                <div class="content-box last">
                    <i class="fa-sharp fa-regular fa-location-dot"></i>
                    Sveavägen 31, 111 34 STOCKHOLM
                </div>
            </div>
            <div class="socialmedia-bar">
                <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank>"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank>"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com/" target="_blank>"><i class="fa-brands fa-linkedin"></i></a>  
            </div>
            <div class="menu">
                <nav>
                    <a class="active" href="index.html">Home</a>
                    <a href="services.html">Service</a>
                    <a href="news.html">News</a>
                    <a href="contacts.html">Contact</a>
                </nav>
                <a class="btn-yellow btn-login" href="login.html">Login <i class="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default NavSection