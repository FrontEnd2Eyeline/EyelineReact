import React from 'react'
import './Cards.scss' 
const Cards = () => {
    return (
        <div className="Cards">
            <div className="Cards__Db">
                <h2 className="Cards__Db-title"> ADMINISTRACIÓN DE BASES DE DATOS </h2>
                <h3 className="Cards__Db-text"> Entendemos la importancia del manejo efectivo de las bases de datos para una empresa o negocio, contamos con amplia experiencia en construcción y manejo de infraestructura asociado a AWS (Amazon Web Services), y de bases de datos capaces de almacenar grandes volúmenes de información, y toda la información se encuentra encriptada y segura para mayor tranquilidad del cliente.</h3>
            </div>
            <div className="Cards__Admin">
                <h2 className="Cards__Admin-title"> SISTEMAS DE ADMINISTRACIÓN </h2>
                <h3 className="Cards__Admin-text">Las nuevas tecnologías son las mejores aliadas para un cliente o empresa que desea optimizar procesos y ahorrar costos, estamos en capacidad de desarrollar softwares funcionales que cubran necesidades especificas como facturación, contabilidades, almacenamiento, entre otras.</h3>
            </div>
            <div className="Cards__Apps">
                <h2 className="Cards__Apps-title">DESARROLLO DE APLICATIVOS MÓVILES</h2>
                <h3 className="Cards__Apps-text">
                Contamos con un equipo de desarrolladores de tecnología móvil adaptable a todos los dispositivos y sistemas operativos existentes.
                </h3>
            </div>
        </div>
    )
}

export default Cards
