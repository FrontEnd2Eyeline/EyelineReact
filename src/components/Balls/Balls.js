import React from 'react'
import './Balls.scss' 
import security from '../../assets/img/Balls/icon-security.svg'
import results from '../../assets/img/Balls/icon-results.svg'
import attention from '../../assets/img/Balls/icon-attention.svg'
import power from '../../assets/img/Balls/icon-power.svg'
import Popup from "reactjs-popup";
import { useTranslation } from 'react-i18next';
import ReactWOW from 'react-wow'

const Balls = () => {
    const { t } = useTranslation();
    return (
        <div className="Balls">
            {/* Security */}
        <Popup trigger={
            <ReactWOW animation='fadeInUp' duration='1.5s' delay='0s'><div className="Balls__security">
                <img src={security} alt="Icono de Seguridad" className="Balls__security-icon"/>
                <p className="Balls__security-text">{t('balls.security')}</p>
            </div></ReactWOW>
            } on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__security-popup">{t('balls.security-text')}</div>
            </Popup>
            {/* Results */}
            <Popup trigger={
                <ReactWOW animation='fadeInUp' duration='1.5s' delay='0.5s'><div className="Balls__results">
                <img src={results} alt="Icono de Resultados" className="Balls__results-icon" />
                <p className="Balls__results-text">{t('balls.results')}</p>
            </div></ReactWOW>
            }on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__results-popup">{t('balls.results-text')}</div>
            </Popup>
            {/* Attention */}
            <Popup trigger={
                <ReactWOW animation='fadeInUp' duration='1.5s' delay='1s'><div className="Balls__attention">
                <img src={attention} alt="Icono de Atención" className="Balls__attention-icon"/>
                <p className="Balls__attention-text">{t('balls.attention')}</p>
            </div></ReactWOW>
            }on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__attention-popup">{t('balls.attention-text')}</div>
            </Popup>
            {/* Power */}
            <Popup trigger={
                <ReactWOW animation='fadeInUp' duration='1.5s' delay='2s'><div className="Balls__power">
                <img src={power} alt="Icono de Poder" className="Balls__power-icon"/>
                <p className="Balls__power-text">{t('balls.power')}</p>
            </div></ReactWOW>
            } on="hover" position="top center" contentStyle={{ padding: "2vw 3vw 2vw 3vw", border: "none" , width: "15%" }}>
                <div className="Balls__results-popup">{t('balls.power-text')}</div>
            </Popup>
        </div>
    )
}

export default Balls
