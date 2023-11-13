import React from 'react'
import './NewsletterSection.css'
import img_backgroundlines from '../../../assets/images/Squiggle2.svg'

const NewsletterSection = () => {
  return (
    <section className="newsletter">
        <img className="background-lines-news" src={img_backgroundlines} alt=""/>
        <div className="container">
            <h2>Sign Up to Get News Updates</h2>
            <form>
                <input type="text" placeholder="username@domain.com"/>
                <button className="btn-yellow">Subscribe <i className="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default NewsletterSection