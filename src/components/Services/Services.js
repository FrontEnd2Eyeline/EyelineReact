import React from 'react'
import dev from '../../assets/img/Services/icon-dev.svg'
import audits from '../../assets/img/Services/icon-audits.svg'
import strategy from '../../assets/img/Services/icon-strategy.svg'
import planning from '../../assets/img/Services/icon-planning.svg'
import left from '../../assets/img/Services/left-arrow.svg'
import right from '../../assets/img/Services/right-arrow.svg'
import './Services.scss' 

const Services = () => {
    return (
        <div className="Services" id="services">
        <div className="Services__title-flex">
            <h2 className="Services__title-shadow">SERVICIOS</h2>
            <h2 className="Services__title-main">SERVICIOS</h2>
        </div>
        <h2 className="Services__subtitle-flex">¿Qué ofrecemos?</h2>
        <div className="Services__sliders">
            <div className="Services__slider-solutions">
                <h2 className="Services__slider-solutions-title">SOLUCIONES CORPORATIVAS</h2>
                <h3 className="Services__slider-solutions-text">Desarrollamos aplicaciones de software para ambientes web a la medida de sus
                    necesidades ofrecemos al cliente la posibilidad de tener diferentes perfiles de usuario y
                    restricciones de acceso que permitan que cada persona obtenga la información
                    adecuada en el momento adecuado. <br/><br/>
                    Las aplicaciones web y móviles desarrolladas pueden formar parte de una Intranet o
                    ser de acceso público a través de la red mundial de Internet.</h3>
            </div>
            <div className="Services__slider-software">
                <h2 className="Services__slider-software-title"> DESARROLLO DE SOFTWARE</h2>
                <h3 className="Services__slider-software-text">Utilizando múltiples metodologías de desarrollo de software (Frameworks nativos con lenguajes de programación sincrónicos) enfocadas en la agilidad y la adaptabilidad necesarias en este entorno cambiante. <br/><br/> El equipo de expertos despliega soluciones de software en tiempo récord, con un grado de calidad para proyectos robustos que estadísticamente se puede denominar “de clase mundial”.</h3>
            </div>
            <div className="Services__slider-systems">
                <h2 className="Services__slider-systems-title">SISTEMAS</h2>
                <h3 className="Services__slider-systems-text">
                Ofrecemos diversos servicios de ingeniería de sistemas; analizamos en forma
                exhaustiva los requerimientos de su empresa, buscando la solución que mejor se
                adapte a sus necesidades. Eyeline Business and Development ofrece a su empresa un
                servicio integral de consultoría de sistemas y nuestra especialidad se concentra en las
                siguientes cinco áreas: <br/><br/>
                <b>Planeación estratégica de sistemas</b><br/> <br/> 
                Elaboración, implementación de planes y diagnóstico de sistemas de información según las necesidades del cliente o la compañía. <br/> <br/> 
                <b>Interventoría en sistemas de información</b> <br/><br/> 
                Procesamiento de datos, revisión y evaluación, y análisis de procedimientos de
                administración del sistema con el propósito de determinar la utilización eficiente de los
                recursos tecnológicos.<br/> <br/> 
                <b>Consultoría para la adquisición e implementación de sistemas de información</b> <br/><br/>
                integración de sistemas, programación de aplicaciones y especificaciones de
                hardware.<br/> <br/> 
                <b>Diseño y desarrollo de programación a la medida del cliente </b><br/> 
                Aplicaciones de negocios, integración de sistemas existentes (legacy systems),
                programación tradicional, programación web y bases de datos. <br/> <br/> 
                <b>Estrategia y promoción de negocios y comercios electrónico en internet.</b>
                </h3>
            </div>
        </div>
        <div className="Balls-Service"> 
            <div className="Balls-Service__audits">
                <img className="Balls-Service__audits-icon" src={audits} alt="Interventoría"/>
            </div>
            <div className="Balls-Service__dev">
                <img className="Balls-Service_dev-icon" src={dev} alt="Desarrollo"/>
            </div>
            <div className="Balls-Service__strategy">
                <img className="Balls-Service_strategy-icon" src={strategy} alt="Estrategia"/>
            </div>
            <div className="Balls-Service__planning">
                <img className="Balls-Service_planning-icon" src={planning} alt="Planeación"/>
            </div>
        </div>
        <div className="Service__Nav">
            <img className="Service__Nav-left" src={left} alt="Izquierda"/>
            <div className="Service__Nav-deactivated" ></div>
            <div className="Service__Nav-active" ></div>
            <div className="Service__Nav-deactivated" ></div>
            <img className="Service__Nav-right" src={right} alt="Derecha"/>
        </div>
        </div>
    )
}

export default Services
