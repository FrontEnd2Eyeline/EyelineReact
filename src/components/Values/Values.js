import React from 'react'
import './Values.scss'
import DisciplineIcon from '../../assets/img/Values/DisciplineIcon.svg'
import QualityIcon from '../../assets/img/Values/QualityIcon.svg'
import RespectIcon from '../../assets/img/Values/RespectIcon.svg'
import { useTranslation } from 'react-i18next';

const Values = () => {
    const { t } = useTranslation();
    return (
        <div>
        <div className="Values__title-flex">
            <h2 className="Values__title-shadow">{t('values.title-shadow')}</h2>
            <h2 className="Values__title-main">{t('values.title')}</h2>
        </div>
            <div className="Values">
                <h2 className="Values_Discipline-title">{t('values.discipline-title')}</h2>
                <h3 className="Values_Discipline-text">{t('values.discipline-text')}</h3>
                <img className="Values_Discipline-img" src={DisciplineIcon} alt="Icono Disciplina"/>
                <h2 className="Values_Quality-title">{t('values.quality-title')}</h2>
                <h3 className="Values_Quality-text">{t('values.quality-text')}</h3>
                <img className="Values_Quality-img" src={QualityIcon} alt="Icono Calidad"/>
                <h2 className="Values_Respect-title">{t('values.respect-title')}</h2>
                <h3 className="Values_Respect-text">{t('values.respect-text')} </h3>
                <img className="Values_Respect-img" src={RespectIcon} alt="Icono Respeto"/>
            </div>
        </div>
    )
}

export default Values
