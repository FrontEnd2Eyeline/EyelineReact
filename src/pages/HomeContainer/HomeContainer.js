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
import {Helmet} from 'react-helmet'

const HomeContainer = () => {
    return (
        <div className="HomeContainer">
        <Helmet>
            <title>Eyeline Business & Development | Bussiness Strategies & Software Development </title>
            <meta name="description" content="Eyeline Business & Development is a financial software development company specialized in cryptocurrency market" />
            <link rel="canonical" href="https://eyeline.co/"></link>
        </Helmet>
            <Navbar about = {false}/>
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
