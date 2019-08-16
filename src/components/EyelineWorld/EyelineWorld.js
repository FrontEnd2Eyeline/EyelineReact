import React from 'react'
import './EyelineWorld.scss'
import { useTranslation } from 'react-i18next';


const EyelineWorld = () => {
    const { t } = useTranslation();
    return (
<div>
    <div id="eyelineworld" className="EyelineWorld">
    <h2 className="EyelineWorld__maintitle-shadow">{t('eyeworld.title-shadow')}</h2>
    <h2 className="EyelineWorld__maintitle">{t('eyeworld.title')}</h2>
        <h2 className="EyelineWorld__title">{t('eyeworld.our')}</h2>
        <h3 className="EyelineWorld__subtitle">{t('eyeworld.sub1')} <br/>
        {t('eyeworld.sub2')}</h3>
        <h3 className="EyelineWorld__text">{t('eyeworld.text1')}<br/><br/>
        {t('eyeworld.text2')}</h3>
    </div>
</div>
    )
}

export default EyelineWorld
