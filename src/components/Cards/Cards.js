import React from 'react'
import './Cards.scss' 
import { useTranslation } from 'react-i18next';

const Cards = () => {
    const { t } = useTranslation();
    return (
        <div className="Cards">
            <div className="Cards__Db">
                <h2 className="Cards__Db-title"> {t('cards.admin-title')}</h2>
                <h3 className="Cards__Db-text"> {t('cards.admin-text')}</h3>
            </div>
            <div className="Cards__Admin">
                <h2 className="Cards__Admin-title"> {t('cards.software-title')} </h2>
                <h3 className="Cards__Admin-text">{t('cards.software-text')}</h3>
            </div>
            <div className="Cards__Apps">
                <h2 className="Cards__Apps-title">{t('cards.mobile-title')}</h2>
                <h3 className="Cards__Apps-text">
                {t('cards.mobile-text')}
                </h3>
            </div>
        </div>
    )
}

export default Cards
