import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Cards from '../../components/Cards'
import Mission from '../../components/Mission'
import Vision from '../../components/Vision'
import Values from '../../components/Values'
import './AboutUsContainer.scss' 
import {Helmet} from 'react-helmet'

const AboutUsContainer = () => {
    return (
        <div className="AboutUsContainer">
        <Helmet>
            <title>Eyeline Business & Development | About Us </title>
            <meta name="description" content="We commercialize aesthetic and innovative mobile or web applications with the latest technologies that the market offers us" />
        </Helmet>
            <Navbar about = {true} />
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
