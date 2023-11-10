import React from 'react'
import CompanyLogos from '../CompanyLogos/CompanyLogos'
import FeaturesSection from '../FeaturesSection/FeaturesSection'
import AboutCompany from '../AboutCompany/AboutCompany'
import ServicesSection from '../ServicesSection/ServicesSection'
import ChooseSection from '../ChooseSection/ChooseSection'
import ProjectSection from '../ProjectSection/ProjectSection'
import TeamSection from '../TeamSection/TeamSection'
import TestimonialSection from '../TestimonialSection/TestimonialSection'
import ArticlesSection from '../ArticlesSection/ArticlesSection'

const Main = () => {
  return (
    <main>
        <CompanyLogos />
        <FeaturesSection/>
        <AboutCompany/>
        <ServicesSection/>
        <ChooseSection />
        <ProjectSection />
        <TeamSection />
        <TestimonialSection />
        <ArticlesSection />
    </main>
  )
}

export default Main