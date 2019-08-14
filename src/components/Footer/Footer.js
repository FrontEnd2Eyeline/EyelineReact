import React from 'react'
import './Footer.scss'
import twitter from '../../assets/img/Footer/twitter.png'
import facebook from '../../assets/img/Footer/facebook.png'
import telegram from '../../assets/img/Footer/telegram.png'
import instagram from '../../assets/img/Footer/instagram.png'
import eyepaycash from '../../assets/img/Footer/icon-eyepaycash.png'
import eyepaycard from '../../assets/img/Footer/icon-eyecard.png'
import eyecash from '../../assets/img/Footer/icon-eyecash.png'
import eyewallet from '../../assets/img/Footer/icon-eyewallet.png'
import eyewalletpro from '../../assets/img/Footer/icon-eyewalletpro.png'
import gmm from '../../assets/img/Footer/icon-gmm.png'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__Eyeline">
                <div className="Footer__Eyeline-EyePayCash">
                    <a className="Footer__Eyeline-EyePayCash-icon" href="https://eyepaycash.co/"> 
                        <img className="Footer__Eyeline-EyePayCash-resize" src={eyepaycash} alt="Icono de EyePayCash"/>
                    </a>
                </div>
                <div className="Footer__Eyeline-EyePayCard">
                    <a className="Footer__Eyeline-EyePayCard-icon" href="https://eyepaycard.co/"> 
                        <img className="Footer__Eyeline-EyePayCard-resize" src={eyepaycard} alt="Icono de EyePayCard" />
                    </a>
                </div>
                <div className="Footer__Eyeline-EyeCash">
                    <a className="Footer__Eyeline-EyeCash-icon" href="https://eyecash.io/"> 
                        <img className="Footer__Eyeline-EyeCash-resize" src={eyecash} alt="Icono de Eyecash"/>
                    </a>
                </div>
                <div className="Footer__Eyeline-EyeWallet">
                    <a className="Footer__Eyeline-EyeWallet-icon" href="https://eyewallet.com"> 
                        <img className="Footer__Eyeline-EyeWallet-resize" src={eyewallet} alt="Icono de Eyewallet"/>
                    </a>
                </div>
                <div className="Footer__Eyeline-EyeWalletPro">
                    <a className="Footer__Eyeline-EyeWalletPro-icon" href="https://eyewalletpro.com/"> 
                            <img className="Footer__Eyeline-EyeWalletPro-resize" src={eyewalletpro} alt="Icono de Eyewallet Pro"/>
                    </a>
                </div>
                <div className="Footer__Eyeline-GMM">
                    <a className="Footer__Eyeline-GMM-icon" href="https://gmmclub.com/"> 
                        <img className="Footer__Eyeline-GMM-resize" src={gmm} alt="Global Money Management"/>
                    </a>
                </div>
            </div>
            <div className="Footer__Social">
                <a href="https://www.instagram.com/eyelinebusiness/"><img src={instagram} className="Footer__Social-instagram" alt="Eyeline en Instagram"/></a>
                <a href="https://www.facebook.com/eyelinebusinessoficial/"><img src={facebook} className="Footer__Social-facebook" alt="Eyeline en Facebook"/></a>
                <a href="https://web.telegram.org/"><img src={telegram} className="Footer__Social-telegram" alt="Eyeline en Telegram"/></a>
                <a href="https://twitter.com/eyelinebusiness"><img src={twitter} className="Footer__Social-twitter" alt="Eyeline en Twitter"/></a>
            </div>
            <p className="Footer__Rights"> Copyright© 2019 EYELINE All rights Reserved </p>
        </div>
    )
}

export default Footer
