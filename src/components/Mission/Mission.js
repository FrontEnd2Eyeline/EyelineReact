import React from 'react'
import './Mission.scss' 
import MissionLogo from '../../assets/img/Mission/Mission.svg'

const Mission = () => {
    return (
        <div className="Mission">
            <h2 className="Mission__title">Misión</h2>
            <h3 className="Mission__text">Como compañía del sector tecnológico vamos a revolucionar mundo digital con el
            desarrollo de softwares integrales, oportunos y seguros para nuestros usuarios
            directos. Comercializamos aplicativos móviles y web eficaces, estéticos e innovadores
            con las últimas tecnologías que el mercado nos ofrezca.</h3>
            <img className="Mission__Logo" src={MissionLogo} alt="Logo Mision"/>
        </div>
    )
}

export default Mission
