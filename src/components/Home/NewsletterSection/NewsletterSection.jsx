import React from 'react'
import './NewsletterSection.css'
import '../../../assets/images/Squiggle2.svg'

const NewsletterSection = () => {
  return (
    <section class="newsletter">
        <img class="background-lines-news" src="images/Squiggle2.svg" alt=""/>
        <div class="container">
            <h2>Sign Up to Get News Updates</h2>
            <form>
                <input type="text" placeholder="username@domain.com"/>
                <button class="btn-yellow">Subscribe <i class="fa-regular fa-arrow-up-right"></i></button>
            </form>
        </div>
    </section>
  )
}

export default NewsletterSection