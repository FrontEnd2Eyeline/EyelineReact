import React ,{useState} from 'react'
import dev from '../../assets/img/Services/icon-dev.svg'
import audits from '../../assets/img/Services/icon-audits.svg'
import strategy from '../../assets/img/Services/icon-strategy.svg'
import planning from '../../assets/img/Services/icon-planning.svg'
import deven from '../../assets/img/Services/icon-dev-en.svg'
import auditsen from '../../assets/img/Services/icon-audits-en.svg'
import strategyen from '../../assets/img/Services/icon-strategy-en.svg'
import planningen from '../../assets/img/Services/icon-planning-en.svg'
// import left from '../../assets/img/Services/left-arrow.svg'
// import right from '../../assets/img/Services/right-arrow.svg'
import { useTranslation } from 'react-i18next';
import './Services.scss' 
import i18next from 'i18next';
import ReactWOW from 'react-wow'

const Services = () => {
    let [classNameSolutions, setClassNameSolutions] = useState('Services__slider-solutions')
    let [classNameSoftware, setClassNameSoftware] = useState('Services__slider-software')
    let [classNameSystems, setClassNameSystems] = useState('Services__slider-systems')
    const { t } = useTranslation();
    let changeCard = (active) => {
        if (active === 'Solutions') {
            classNameSolutions = "Services__slider-software"
            setClassNameSolutions(classNameSolutions)
            classNameSystems = "Services__slider-systems"
            setClassNameSystems(classNameSystems)
            classNameSoftware = "Services__slider-solutions"
            setClassNameSoftware(classNameSoftware)
        } else if (active === 'Software') {
            classNameSolutions = "Services__slider-solutions"
            setClassNameSolutions(classNameSolutions)
            classNameSystems = "Services__slider-systems"
            setClassNameSystems(classNameSystems)
            classNameSoftware = "Services__slider-software"
            setClassNameSoftware(classNameSoftware)
        } else if (active === 'Systems') {
            classNameSolutions = "Services__slider-systems"
            setClassNameSolutions(classNameSolutions)
            classNameSystems = "Services__slider-software"
            setClassNameSystems(classNameSystems)
            classNameSoftware = "Services__slider-solutions"
            setClassNameSoftware(classNameSoftware)
        }
    };
    
    return (
        <div className="Services" id="services">
            {/* Title Services */}
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='0s'><div className="Services__title-flex">
            <h2 className='Services__title-shadow'>{t('services.title-shadow')}</h2>
            <h2 className="Services__title-main">{t('services.title')}</h2>
        </div></ReactWOW>
        {/* Subtitle Offer */}
        <h2 className="Services__subtitle-flex">{t('services.what')}</h2>
        <div className="Services__sliders">
        <ReactWOW animation='fadeInUp' duration='1.5s' delay='0.3s'><div className={classNameSolutions} onClick={() => changeCard('Solutions')}>
                {/* Subtitle Solutions */}
                <h2 className="Services__slider-solutions-title">{t('services.solutions')}</h2>
                <h3 className="Services__slider-solutions-text">{t('services.solutions-text1')} <br/><br/>
                {t('services.solutions-text2')}</h3>
            </div></ReactWOW>
        <ReactWOW animation='fadeInUp' duration='1.5s' delay='0.5s'><div className={classNameSoftware}onClick={() => changeCard('Software')}>
                {/* Subtitle Software Development */}
                <h2 className="Services__slider-software-title">{t('services.software')}</h2>
                <h3 className="Services__slider-software-text">{t('services.software-text1')}
                <br/><br/> {t('services.software-text2')}</h3>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='1s'><div className={classNameSystems} onClick={() => changeCard('Systems')}>
                {/* Subtitle Systems */}
                <h2 className="Services__slider-systems-title">{t('services.systems')}</h2> 
                <h3 className="Services__slider-systems-text">
                {t('services.systems-text')} <br/><br/>
                <b>{t('services.systems-title1')}</b><br/> <br/> 
                {t('services.systems-text1')}<br/> <br/> 
                <b>{t('services.systems-title2')}</b> <br/><br/> 
                {t('services.systems-text2')}<br/> <br/> 
                <b>{t('services.systems-title3')}</b> <br/><br/>
                {t('services.systems-text3')}<br/> <br/> 
                <b>{t('services.systems-title4')}</b><br/> 
                {t('services.systems-text4')}<br/> <br/> 
                <b>{t('services.systems-title5')}</b>
                </h3>
            </div></ReactWOW>
        </div>
        { i18next.language === 'es' ? (
            <div className="Balls-Service"> 
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='0s'><div className="Balls-Service__audits">
                <img className="Balls-Service__audits-icon" src={audits} alt="Interventoría"/>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='0.5s'><div className="Balls-Service__dev">
                <img className="Balls-Service_dev-icon" src={dev} alt="Desarrollo"/>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='1s'><div className="Balls-Service__strategy">
                <img className="Balls-Service_strategy-icon" src={strategy} alt="Estrategia"/>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='1.5s'><div className="Balls-Service__planning">
                <img className="Balls-Service_planning-icon" src={planning} alt="Planeación"/>
            </div></ReactWOW>
        </div>
        ) : (
            <div className="Balls-Service"> 
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='0s'><div className="Balls-Service__audits">
                <img className="Balls-Service__audits-icon" src={auditsen} alt="Interventoría"/>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='0.5s'><div className="Balls-Service__dev">
                <img className="Balls-Service_dev-icon" src={deven} alt="Desarrollo"/>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='1s'><div className="Balls-Service__strategy">
                <img className="Balls-Service_strategy-icon" src={strategyen} alt="Estrategia"/>
            </div></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='1.5s'><div className="Balls-Service__planning">
                <img className="Balls-Service_planning-icon" src={planningen} alt="Planeación"/>
            </div></ReactWOW>
        </div>
        )}
        
        {/* <div className="Service__Nav">
            <img className="Service__Nav-left" src={left} alt="Izquierda"/>
            <div className="Service__Nav-deactivated" ></div>
            <div className="Service__Nav-active" ></div>
            <div className="Service__Nav-deactivated" ></div>
            <img className="Service__Nav-right" src={right} alt="Derecha"/>
        </div> */}
        </div>
    )
}

export default Services
