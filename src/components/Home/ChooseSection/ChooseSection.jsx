import React from 'react'
import './ChooseSection.css'
import img_thumbs from '../../../assets/images/thumbs-up.svg'
import img_pentagon from '../../../assets/images/Pentagon.svg'
import img_design from '../../../assets/images/Design.svg'
import img_gear from '../../../assets/images/Gear.svg'
import img_discourse from '../../../assets/images/Discourse.png'

const ChooseSection = () => {
  return (
    <section className="why-choose-us">
        <div className="container">
            <div className="text-section">
                <p1>Why Choose Us</p1>
                <h1>Why We Are the Best Business Consulting Agency</h1>
                <div className="item">
                    <div className="circle">
                        <img className ="thumbs-image" src={img_thumbs} alt=""/>
                    </div>
                    <div>
                        <h2>Process Excellence</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="circle">
                        <img className ="pentagon-image" src={img_pentagon} alt=""/>
                    </div>
                    <div>
                        <h2>Strategic Planning</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="circle">
                        <img className ="design-image" src={img_design} alt=""/>
                    </div>
                    <div>
                        <h2>Experience Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="circle">
                        <img className ="gear-image" src={img_gear} alt=""/>
                    </div>
                    <div>
                        <h2>Artificial Intelligence</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="image-section">
                <img className ="discourse-image" src={img_discourse} alt=""/>
            </div>
        </div>
        <div className="image-box"></div>
    </section>
  )
}

export default ChooseSection