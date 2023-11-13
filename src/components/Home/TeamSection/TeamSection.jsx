import React from 'react'
import './TeamSection.css'
import img_kristine from '../../../assets/images/Kristine.png'
import img_mark from '../../../assets/images/Mark.png'
import img_kimberly from '../../../assets/images/Kimberly.png'
import img_justin from '../../../assets/images/Justin.png'


const TeamSection = () => {
  return (
    <section className="meet-our-team">
        <div className="container">
            <div className="title-section">
                <p>Meet Our Team</p>
                <h2>Experience Team Members</h2>
                <a className="btn-black" href="#">Browse Team<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="kristine">
                        <img className="kristine-image" src={img_kristine} alt=""/>
                        <h2>Kristine Palmer</h2>
                        <p>Chief Operation Officer</p>
                    </div>
                </div>
                <div className="column">
                    <div className="mark">
                    <img className="mark-image" src={img_mark} alt=""/>
                        <h2>Mark Aubri</h2>
                        <p>Senior Consultant</p>
                    </div>
                </div>
                <div className="column">
                    <div className="kimberly">
                    <img className="kimberly-image" src={img_kimberly} alt=""/>
                        <h2>Kimberly Hansen</h2>
                        <p>Senior Consultant</p>
                    </div>
                </div>
                <div className="column">
                    <div className="justin">
                    <img className="justin-image" src={img_justin} alt=""/>
                        <h2>Justin Willoman</h2>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamSection