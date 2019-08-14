import React from 'react'
import './Values.scss'
import DisciplineIcon from '../../assets/img/Values/DisciplineIcon.svg'
import QualityIcon from '../../assets/img/Values/QualityIcon.svg'
import RespectIcon from '../../assets/img/Values/RespectIcon.svg'

const Values = () => {
    return (
        <div>
        <div className="Values__title-flex">
            <h2 className="Values__title-shadow">VALORES</h2>
            <h2 className="Values__title-main">VALORES</h2>
        </div>
            <div className="Values">
                <h2 className="Values_Discipline-title">Disciplina</h2>
                <h3 className="Values_Discipline-text">Trabajamos articuladamente todo el año para cumplir las metas ofrecidas a nuestros clientes, evaluamos constantemente nuestros resultados y capacitamos a nuestros profesionales para obtener lo mejor de ellos.</h3>
                <img className="Values_Discipline-img" src={DisciplineIcon} alt="Icono Disciplina"/>
                <h2 className="Values_Quality-title">Calidad</h2>
                <h3 className="Values_Quality-text">Nuestros desarrollos se destacan por su gran calidad al igual que nuestros clientes, nos aseguramos de generar resultados que sobrepasen las expectativas de nuestros usuarios.</h3>
                <img className="Values_Quality-img" src={QualityIcon} alt="Icono Calidad"/>
                <h2 className="Values_Respect-title">Respeto</h2>
                <h3 className="Values_Respect-text">Consideramos el respeto como el valor más importante, pues se ve reflejado en todas nuestras tareas, respetar el cliente implica cumplirle y satisfacerlo. </h3>
                <img className="Values_Respect-img" src={RespectIcon} alt="Icono Respeto"/>
            </div>
        </div>
    )
}

export default Values
