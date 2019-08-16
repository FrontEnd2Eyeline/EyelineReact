import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Balls from '../../components/Balls'
import AboutUs from '../../components/AboutUs'
import Services from '../../components/Services'
import EyelineWorld from '../../components/EyelineWorld'
import EyelineBackLinks from '../../components/EyelineBackLinks'
import Footer from '../../components/Footer'
import './HomeContainer.scss' 

const HomeContainer = () => {
    return (
        <div className="HomeContainer">
            <Navbar />
            <Hero textHero = {true}/>
            <Balls />
            <AboutUs />
            <Services />
            <EyelineWorld />
            <EyelineBackLinks />
            <Footer/>
        </div>
    )
}

export default HomeContainer
