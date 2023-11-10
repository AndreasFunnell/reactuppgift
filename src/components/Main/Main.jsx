import React from 'react'
import CompanyLogos from '../CompanyLogos/CompanyLogos'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import AboutCompany from '../AboutCompany/AboutCompany'
import ServicesSection from '../ServicesSection/ServicesSection'
import ChooseSection from '../ChooseSection/ChooseSection'

const Main = () => {
  return (
    <main>
        <CompanyLogos />
        <FeaturesSection/>
        <AboutCompany/>
        <ServicesSection/>
        <ChooseSection />

    </main>
  )
}

export default Main