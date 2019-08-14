import React from 'react'
import './Vision.scss' 
import VisionLogo from '../../assets/img/Vision/Vision.svg'
const Vision = () => {
    return (
        <div className="Vision">
        <h2 className="Vision__title">Visión</h2>
            <h3 className="Vision__text">Para el año 2020 nos posicionaremos como la compañía líder en desarrollo de
            software en Colombia y ocuparemos los primeros lugares en Latinoamérica, como
            referente tecnológico y de innovación.</h3>
        <img className="Vision__Logo" src={VisionLogo} alt="Logo Mision"/>
        </div>
    )
}

export default Vision
