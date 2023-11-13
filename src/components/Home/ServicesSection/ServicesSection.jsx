import React from 'react'
import './ServicesSection.css'
import img_background from '../../../assets/images/Squiggle3.svg'

const ServicesSection = () => {
  return (
    <section className="services-section">
        <div className="container">
            <div className="title">
                <p>Our Services</p>
                <h2>We Provide the Best Service for Consulting</h2>
                <img className="background-image" src={img_background} alt="Background Image"/>
            </div>
            <div className="service-boxes">
                <div className="service-box">
                    <a href="#" className="service-link">
                        <div className="business-advice column-box">
                            <h2>Business Advice</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <div className="circle-btn-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </a>
                </div>
                <div className="service-box">
                    <a href="#" className="service-link">
                        <div className="startup-business column-box">
                            <h2>Startup Business</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <div className="circle-btn-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </a>
                </div>
                <div className="service-box">
                    <a href="#" className="service-link">
                        <div className="financial-advice column-box">
                            <h2>Financial Advice</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <div className="circle-btn-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </a>
                </div>
                <div className="service-box">
                    <a href="#" className="service-link">
                        <div className="risk-management column-box">
                            <h2>Risk Management</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            <div className="circle-btn-arrow"><i className="fa-solid fa-arrow-right"></i></div>
                        </div>
                    </a>
                </div>
            </div>
            <a className="btn-black" href="#">Browse Services<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </section>
  )
}

export default ServicesSection