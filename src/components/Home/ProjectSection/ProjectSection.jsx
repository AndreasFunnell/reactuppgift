import React from 'react'
import './ProjectSection.css'
import img_article1 from '../../../assets/images/Article-Image-1.png'
import img_article2 from '../../../assets/images/Article-Image-2.png'
import img_article3 from '../../../assets/images/Article-Image-3.png'
import img_article4 from '../../../assets/images/Article-Image-4.png'

const ProjectSection = () => {
  return (
    <section className="project-and-case">
        <div className="container">
            <div className="section-title">
                <p>Project & Case Studies</p>
                <h2>Our Global Projects</h2>
            </div>
            <div className="project-and-cases">
                <a className="project" href="#">
                    <img className="article-image-1" src={img_article1} alt="hands holding a business paper"/>
                    <h3>Growing your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="project" href="#">
                    <img className="article-image-2" src={img_article2} alt="Pink apple watch and iPad on a desk"/>
                    <h3>Why your client needs a responsive website</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="project" href="#">
                    <img className="article-image-3" src={img_article3} alt="Office desk with common assortments"/>
                    <h3>Educate your employees to get better results</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
                <a className="project" href="#">
                    <img className="article-image-4" src={img_article4} alt="Laptop with business intelligence insights"/>
                    <h3>Business Insights is an important piece of your business</h3>
                    <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
                </a>
            </div>
            <div className="center-content">
                <a className="btn-black" href="projects.html">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>

  )
}

export default ProjectSection