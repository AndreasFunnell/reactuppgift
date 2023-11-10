import React from 'react'
import './featuresSection.css'
import img_handshake from '../../assets/images/handshake.svg'
import img_lamp from '../../assets/images/lamp.svg'
import img_factory from '../../assets/images/factory.svg'
import img_box from '../../assets/images/box.svg'

const FeaturesSection = () => {
  return (
    <section className="features-section">
        <div className="container">
            <div className="buttom-column">
                <p>Features</p>
                <h2>Our Accounting is Trusted by Thousands of Companies</h2>
                <button className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></button>
            </div>
            <div className="text-columns">
                <div className="business">
                    <img className="handshake-image" src={img_handshake} alt=""/>
                    <h2>Business Advice</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="startup">
                <img className="lamp-image" src={img_lamp} alt=""/>
                    <h2>Startup Business</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="financial">
                <img className="factory-image" src={img_factory} alt=""/>
                    <h2>Financial Advice</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="riskmanagement">
                <img className="box-image" src={img_box} alt=""/>
                    <h2>Risk Management</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection