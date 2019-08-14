import './Hero.scss' 
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Hero extends Component {

        TextAbout = () => (
        <div className="Hero">
        <h1 className="Hero__main-text">NOSOTROS</h1>
        </div>
        )

        TextHome = () => (
                        <div className="Hero">
                        <h1 className="Hero__main-text">El mejor software <br/> en tus manos </h1>
                        <h2 className="Hero__sub-text">Un ecosistema de productos <br/> que facilitará tu vida</h2>
                        <div className="Hero__button-join"><a href="#links" className="Hero__button-link"><p className="Hero__button-text">Unirse</p></a></div>
                    </div>
        )


    render() {
        const textHero = this.props.textHero;
        return (
            <div className="Hero">
            { textHero === true
                    ? <this.TextHome/>
                    : <this.TextAbout/>
                }
            </div>
        )
    }
    
}

Hero.propTypes = {
    textHero: PropTypes.bool.isRequired,
}        

