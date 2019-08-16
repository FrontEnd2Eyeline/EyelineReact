import React from 'react'
import './AboutUs.scss' 
import bitcoinbuilding from '../../assets/img/AboutUs/edificio-bitcoin.png'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div id="eyeline">
            <div className="AboutUs__title-flex">
                <h2 className="AboutUs__title-shadow">{t('aboutus.title-shadow')}</h2>
                <h2 className="AboutUs__title-main">{t('aboutus.title')}</h2>
            </div>
            <div className="AboutUs">
                <h2 className="AboutUs__who">{t('aboutus.who')}</h2> 
                <h3 className="AboutUs__text">{t('aboutus.who-text')} <br/>
                <br/> {t('aboutus.who-text2')}<br/>
                <br/>{t('aboutus.who-text3')} <br/>
                <br/>{t('aboutus.who-text3')}<br/>
                </h3>
                <div className="AboutUs__button">
                    <h3 className="AboutUs__button-text"><Link to="/aboutus" className="AboutUs__button-text">{t('aboutus.learn')}</Link></h3>
                </div>
                <img className="AboutUs__image" src={bitcoinbuilding} alt="Edificio Bitcoin"/>
            </div>
        </div>
    )
}

export default AboutUs
