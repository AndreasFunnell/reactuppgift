import React from 'react'
import './TitleSection.css'
import img_backgroundlines from '../../../assets/images/Squiggle1.svg'

const TitleSection = () => {
  return (
    <section className="contact-title">
        <div className="container">
            <h2>Let's Connect</h2>
            <img className="background-lines-contact" src={img_backgroundlines} alt=""/>
        </div>
    </section>
  )
}

export default TitleSection