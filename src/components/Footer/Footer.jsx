import React from 'react'
import './Footer.css'
import img_backgroundsquiggle from '../../assets/images/footer-squiggle.svg'
import img_footerlogo from '../../assets/images/footer-logo.svg'

const Footer = () => {
  return (
    <footer>
        <div className="grid-container">
            <img className="background-image" src={img_backgroundsquiggle} alt=""/>
            <div className="grid-item big-column">
                <img className="logo-footer" src={img_footerlogo} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>
            <div className="grid-item">
                <h2>Company</h2>
                <p><a href="your-link-url">About</a></p>
                <p><a href="your-link-url">Features</a></p>
                <p><a href="your-link-url">Works</a></p>
                <p><a href="your-link-url">Career</a></p>
            </div>
            <div className="grid-item">
                <h2>Help</h2>
                <p><a href="your-link-url">Customer Support</a></p>
                <p><a href="your-link-url">Delivery Details</a></p>
                <p><a href="your-link-url">Termas & conditions</a></p>
                <p><a href="your-link-url">Privacy Policy</a></p>
            </div>
            <div className="grid-item">
                <h2>Resources</h2>
                <p><a href="your-link-url">Free eBooks</a></p>
                <p><a href="your-link-url">Development Tutorial</a></p>
                <p><a href="your-link-url">How to - Blog</a></p>
                <p><a href="your-link-url">YouTube Playlist</a></p>
            </div>
            <div className="grid-item">
                <h2>Links</h2>
                <p><a href="your-link-url">Free eBooks</a></p>
                <p><a href="your-link-url">Development Tutorial</a></p>
                <p><a href="your-link-url">How to - Blog</a></p>
                <p><a href="your-link-url">YouTube Playlist</a></p>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-copyright">
            © 2023 Crito - Consulting Company Inc. All Rights Reserved.
            </div>
            <div className="footer-socialmedia">
            <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank>"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com" target="_blank>"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com/" target="_blank>"><i className="fa-brands fa-linkedin"></i></a>  
            </div>
        </div>  
    </footer>
  )
}

export default Footer