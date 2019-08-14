import React from 'react'
import './AboutUs.scss' 
import bitcoinbuilding from '../../assets/img/AboutUs/edificio-bitcoin.png'
import {Link} from 'react-router-dom'

const AboutUs = () => {
    return (
        <div id="eyeline">
            <div className="AboutUs__title-flex">
                <h2 className="AboutUs__title-shadow">EYELINE</h2>
                <h2 className="AboutUs__title-main">EYELINE</h2>
            </div>
            <div className="AboutUs">
                <h2 className="AboutUs__who">¿Quiénes somos?</h2> 
                <h3 className="AboutUs__text">Eyeline Bussiness and Development es una compañía de Desarrollo de software financiero especializada en el sector económico de los criptoactivos. <br/> <br/>
                Surge como una necesidad de buscar soluciones financieras a los modelos económicos tradicionales. La afectación de la economía mundial debe ser combatida haciendo uso de las posibilidades que ofrecen las criptomonedas, entre otras posibilidades.<br/> <br/>
                Un claro ejemplo de esa afectación fue la burbuja inmobiliaria ocurrida en el año 2008, generadora de afectaciones en muchos otros sectores económicos y en última instancia una recesión económica mundial.<br/> <br/>
                Desarrollamos softwares cuyo objetivo es generar riqueza y potencializar la calidad de vida de nuestros usuarios directos e indirectamente facilitar el acceso de nuevos usuarios a la nueva y desconocida tecnología de los criptoactivos.<br/> <br/>
                </h3>
                <div className="AboutUs__button">
                    <h3 className="AboutUs__button-text"><Link to="/aboutus" className="AboutUs__button-text"> Conoce más</Link></h3>
                </div>
                <img className="AboutUs__image" src={bitcoinbuilding} alt="Edificio Bitcoin"/>
            </div>
        </div>
    )
}

export default AboutUs
