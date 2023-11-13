import React from 'react'
import './DetailsSection.css'

const DetailsSection = () => {
  return (
    <section className="contact-details">
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="visit-us">
                        <div className="info">
                            <i className="fa-sharp fa-regular fa-location-dot"></i>
                            <h2>Vist us</h2>
                            <p>Sveavägen 31</p>
                            <p>111 34 STOCKHOLM</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="call-us">
                        <div className="info">
                            <i className="fa-sharp fa-regular fa-phone"></i>
                            <h2>Call us</h2>
                            <p>+46 (8) 121 470 50</p>
                            <p>+46 (8) 121 470 51</p>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="email-us">
                        <div className="info">
                            <i className="fa-sharp fa-regular fa-envelope"></i>
                            <h2>Email us</h2>
                            <p>info@crito.com</p>
                            <p>support@crito.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailsSection