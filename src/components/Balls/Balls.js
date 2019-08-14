import React from 'react'
import './Balls.scss' 
import security from '../../assets/img/Balls/icon-security.svg'
import results from '../../assets/img/Balls/icon-results.svg'
import attention from '../../assets/img/Balls/icon-attention.svg'
import power from '../../assets/img/Balls/icon-power.svg'
import Popup from "reactjs-popup";

const Balls = () => {
    return (
        <div className="Balls">
            <Popup trigger={
                <div className="Balls__security">
                <img src={security} alt="Icono de Seguridad" className="Balls__security-icon"/>
                <p className="Balls__security-text">Seguridad</p>
            </div>
            } on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__security-popup">Garantizamos la seguridad en el desarrollo de los softwares provenientes de Eyeline Business and Development, empleando en ellos esquemas que están a la vanguardia en el mundo actual. Contamos con servidores con tecnología de punta capaces de almacenar información importante y proporcionar una interacción ligera.</div>
            </Popup>
            <Popup trigger={
                <div className="Balls__results">
                <img src={results} alt="Icono de Resultados" className="Balls__results-icon" />
                <p className="Balls__results-text">Resultados</p>
            </div>
            }on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__results-popup">Desarrollamos, administramos y posicionamos su software por medio de estrategias digitales y de indexación de comunidad que garantizan el correcto consumo de las herramientas que creamos.</div>
            </Popup>
            <Popup trigger={
            <div className="Balls__attention">
                <img src={attention} alt="Icono de Atención" className="Balls__attention-icon"/>
                <p className="Balls__attention-text">Atención</p>
            </div>
            }on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__attention-popup">Nos aseguramos de prestar un servicio integral a nuestros clientes que proporcione al usuario un acompañamiento antes, durante y después de hacer la entrega de su software. Nos distinguimos por prestar una experiencia de usuario eficiente y especializada, con personal entrenado y tecnología de punta.</div>
            </Popup>
            <Popup trigger={
            <div className="Balls__power">
                <img src={power} alt="Icono de Poder" className="Balls__power-icon"/>
                <p className="Balls__power-text">Poder</p>
            </div>
            } on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__results-popup">Eyeline Business and Development te proporciona un poderoso ecosistema de soluciones de software financiero que cubre todas las necesidades que pueda necesitar el usuario final.</div>
            </Popup>
        </div>
    )
}

export default Balls
