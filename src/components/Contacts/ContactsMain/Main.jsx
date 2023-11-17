import React from 'react'
import ContactForm from '../ContactForm/ContactForm.jsx'
import DetailsSection from '../DetailsSection/DetailsSection.jsx'
import TitleSection from '../TitleSection/TitleSection.jsx'
import MapSection from '../MapSection/MapSection.jsx'

const Main = () => {
  return (
    <div>
        <TitleSection />
        <DetailsSection />
        <ContactForm />
        <MapSection />

    </div>

  )
}

export default Main