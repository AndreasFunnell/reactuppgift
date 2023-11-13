import React from 'react'
import './ArticlesSection.css'
import img_classroom from '../../../assets/images/classroom.png'
import img_chatgpt from '../../../assets/images/chatgpt.png'
import img_css from '../../../assets/images/css.png'

const ArticlesSection = () => {
  return (
    <section className="articles-and-news">
        <div className="container">
            <div className="title-section">
                <p>Articles & News </p>
                <h2>Get Articles & News Updates</h2>
                <a className="btn-black" href="#">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
            <div className="columns">
                <a href="#" className="column">
                    <div className="classroom">
                        <img classname="classroom-image" src={img_classroom} alt=""/>
                        <div className="text-box">
                            <h2>25th</h2>
                            <p>March</p>
                        </div>
                        <p>Business</p>
                        <h2>How To Use Digitalization In The classroom</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </a>
                <a href="#" className="column">
                    <div className="chatgpt">
                    <img classname="chatgpt-image" src={img_chatgpt} alt=""/>
                        <div className="text-box">
                            <h2>17th</h2>
                            <p>March</p>
                        </div>
                        <p>Business</p>
                        <h2>How To Implement Chat GPT In Your Projects</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </a>
                <a href="#" className="column">
                    <div className="css">
                    <img classname="css-image" src={img_css} alt=""/>
                        <div className="text-box">
                            <h2>13th</h2>
                            <p>March</p>
                        </div>
                        <p>Business</p>
                        <h2>The Guide To Support Modern CSS Design</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}

export default ArticlesSection