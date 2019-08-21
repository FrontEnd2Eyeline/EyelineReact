import React from 'react'
import './Vision.scss' 
import VisionLogo from '../../assets/img/Vision/Vision.svg'
import { useTranslation } from 'react-i18next';

const Vision = () => {
    const { t } = useTranslation();
    return (
        <div className="Vision">
        <h2 className="Vision__title">{t('vision.title')}</h2>
            <h3 className="Vision__text">{t('vision.text')}</h3>
        <img className="Vision__Logo" src={VisionLogo} alt="Logo Mision"/>
        </div>
    )
}

export default Vision
