import React from 'react'
import './TestimonialSection.css'
import img_cassandra from '../../assets/images/Cassandra.png'
import img_amanda from '../../assets/images/Amanda.png'
import img_jack from '../../assets/images/Jack.png'


const TestimonialSection = () => {
  return (
    <section className="testmonial">
        <div className="container">
            <div className="title-section">
                <p>Testimonial</p>
                <h2>What Our Clients Say</h2>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="cassandra-review">
                        <div className="cassandra-image">
                        <img src={img_cassandra} alt=""/>
                        </div>
                        <div className="text-content">
                            <img className="stars" src="images/stars.svg" alt=""/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <h1>Cassandra</h1>
                            <p1>Business Manager, Dorfus</p1>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="amanda-review">
                        <div className="amanda-image">
                        <img src={img_amanda} alt=""/>
                        </div>
                        <div className="text-content">
                            <img className="stars" src="images/stars.svg" alt=""/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <h1>Amanda</h1>
                            <p1>Senior Developer, Square</p1>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="jack-review">
                        <div className="jack-image">
                        <img src={img_jack} alt=""/>
                        </div>
                        <div className="text-content">
                            <img className="stars" src="images/stars.svg" alt=""/>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <h1>Jack</h1>
                            <p1>Key Account Manager, Gobona</p1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <a className="btn-black" href="projects.html">All Reviews<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection