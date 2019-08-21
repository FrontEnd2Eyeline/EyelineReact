import React from 'react'
import './Mission.scss' 
import MissionLogo from '../../assets/img/Mission/Mission.svg'
import { useTranslation } from 'react-i18next';

const Mission = () => {
    const { t } = useTranslation();
    return (
        <div className="Mission">
            <h2 className="Mission__title">{t('mission.title')}</h2>
            <h3 className="Mission__text">{t('mission.text')}</h3>
            <img className="Mission__Logo" src={MissionLogo} alt="Logo Mision"/>
        </div>
    )
}

export default Mission
