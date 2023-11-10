import React from 'react'
import './ShowcaseSection.css'
import img_showcase from '../../assets/images/Showcase-image.png'
import img_backgroundlines from '../../assets/images/Squiggle1.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
        <img className ="background-lines-showcase" src={img_backgroundlines} alt=""/>
        <div className="container">
            <div className="content">
                <h1>We Provide the Best Business Solutions</h1>
                <p>Establish your vision, value proposition and turn them into testable prototypes.</p>
                <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-regular fa-arrow-up-right"></i></a>
                <a className="btn-transparent" href="services.html">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img  className="showcase-image" src={img_showcase} alt="showcase image of a man in a suit with a tablet"/>
        </div>
    </section>
  )
}

export default ShowcaseSection