import React from 'react'
import './ShowcaseSection.css'

const ShowcaseSection = () => {
  return (
    <section class="showcase-section">
        <img class ="background-lines-showcase" src="images/Squiggle1.svg" alt=""/>
        <div class="container">
            <div class="content">
                <h1>We Provide the Best Business Solutions</h1>
                <p>Establish your vision, value proposition and turn them into testable prototypes.</p>
                <a class="btn-yellow" href="consulting.html">Get Consulting <i class="fa-regular fa-arrow-up-right"></i></a>
                <a class="btn-transparent" href="services.html">Learn More <i class="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <img src="images/Showcase-Image.png" alt="showcase image of a man in a suit with a tablet"/>
        </div>
    </section>
  )
}

export default ShowcaseSection