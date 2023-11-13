import React from 'react'
import './AboutCompany.css'
import img_ceo from '../../../assets/images/ceoimage.svg'

const AboutCompany = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="image-section">
                <img className="ceo-image" src={img_ceo} alt=""/>
                <div className="text-over-image">
                    <div className="headers">
                        <h1>Samantha Brown,</h1>
                        <h2>Founder</h2>
                    </div>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="text-section">
                <p className="about-company">About Company</p>
                <h2>We Are Business Consulting & Credit Repair Experts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet. </p>
                
                <div className="btn-container">
                    <a href="projects.html" className="btn-black">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            
                    <div className="circular-button-container">
                        <a href="#" className="circular-button">
                            <i className="fas fa-play"></i>
                        </a>
                        <a href="#" className="button-text">Intro Video</a>
                    </div>
                </div>
            </div>
        </div>      
    </section>
  )
}

export default AboutCompany