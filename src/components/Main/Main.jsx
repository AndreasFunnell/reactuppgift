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
import NewsletterSection from '../NewsletterSection/NewsletterSection'

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
        <NewsletterSection />
    </main>
  )
}

export default Main