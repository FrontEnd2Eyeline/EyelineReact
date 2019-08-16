import './Hero.scss' 
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import './Hero.scss'

class Hero extends Component {
    render() {
        const { t } = this.props;
        const textHero = this.props.textHero;
        return (
            <div className="Hero">
                { textHero === true
                        ? (
                            <div className="Hero">
                                <h1 className="Hero__main-text"> {t('hero.main1')}<br/> {t('hero.main2')} </h1>
                                <h2 className="Hero__sub-text">{t('hero.sub1')}<br/> {t('hero.sub2')}</h2>
                                <div className="Hero__button-join"><a href="#links" className="Hero__button-link"><p className="Hero__button-text">{t('hero.join')}</p></a></div>
                            </div>
                            )
                        : (
                        <div className="Hero">
                            <h1 className="Hero__main-text">{t('hero.aboutus')}</h1>
                        </div>
                        )
                    }
            </div>
        )
    }
    
}
export default withTranslation()(Hero);

Hero.propTypes = {
    textHero: PropTypes.bool.isRequired,
}