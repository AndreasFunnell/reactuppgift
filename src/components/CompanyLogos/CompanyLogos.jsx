import React from 'react'
import img_paperz from '../../assets/images/Paperz.svg'
import img_dorfus from '../../assets/images/Dorfus.svg'
import img_martino from '../../assets/images/Martino.svg'
import img_square from '../../assets/images/Square.svg'
import img_gobona from '../../assets/images/Gobona.svg'


const CompanyLogos = () => {
  return (
    <section className="company-logos">
        <div className="container">
        <img className="paperz-logo"src={img_paperz} alt=""/>
        <img className="dorfus-logo"src={img_dorfus} alt=""/>
        <img className="martino-logo"src={img_martino} alt=""/>
        <img className="square-logo"src={img_square} alt=""/>
        <img className="gobona-logo"src={img_gobona} alt=""/>
        </div>
    </section>
  )
}

export default CompanyLogos