import React from 'react'
import NavbarLang from '../../components/NavbarLang'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Cards from '../../components/Cards'
import Mission from '../../components/Mission'
import Vision from '../../components/Vision'
import Values from '../../components/Values'
import './AboutUsContainer.scss' 

const AboutUsContainer = () => {
    return (
        <div className="AboutUsContainer">
            <NavbarLang />
            <Hero textHero = {false}/>
            <Cards/>
            <Mission/>
            <Vision/>
            <Values/>
            <Footer/>
        </div>
    )
}

export default AboutUsContainer
