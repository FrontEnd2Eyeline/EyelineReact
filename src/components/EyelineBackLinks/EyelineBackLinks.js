import React from 'react'
import './EyelineBackLinks.scss' 
import EyePayCashLogo from '../../assets/img/EyelineBacklinks/EyePayCashLogo.png'
import EyePayCashBanner from '../../assets/img/EyelineBacklinks/EyePayCashBanner.png'
import EyePayCardLogo from '../../assets/img/EyelineBacklinks/EyePayCardLogo.png'
import EyePayCardBanner from '../../assets/img/EyelineBacklinks/EyePayCardBanner.png'
import EyeCashLogo from '../../assets/img/EyelineBacklinks/EyeCashLogo.png'
import EyeCashBanner from '../../assets/img/EyelineBacklinks/EyeCashBanner.png'
import EyeWalletLogo from '../../assets/img/EyelineBacklinks/EyeWalletLogo.png'
import EyeWalletBanner from '../../assets/img/EyelineBacklinks/EyeWalletBanner.png'
import GMMLogo from '../../assets/img/EyelineBacklinks/GMMLogo.png'
import GMMBanner from '../../assets/img/EyelineBacklinks/GMMBanner.png'
import EyeWalletProLogo from '../../assets/img/EyelineBacklinks/EyeWalletProLogo.png'
import EyeWalletProBanner from '../../assets/img/EyelineBacklinks/EyeWalletProBanner.png'

const EyelineBackLinks = () => {
    return (
        <div id="links" className="EyelineBackLinks">
            <img className="EyelineBackLinks__EyePayCash-Logo" src={EyePayCashLogo} alt="EyePayCash Logo"/>
            <img className="EyelineBackLinks__EyePayCash-Banner" src={EyePayCashBanner} alt="EyePayCash Banner"/>
            <a className="EyelineBackLinks__EyePayCash-goto" href="https://eyepaycash.co/">ir al sitio</a>
            <img className="EyelineBackLinks__EyePayCard-Logo" src={EyePayCardLogo} alt="EyePayCard Logo"/>
            <img className="EyelineBackLinks__EyePayCard-Banner" src={EyePayCardBanner} alt="EyePayCard Banner"/>
            <a className="EyelineBackLinks__EyePayCard-goto" href="https://eyepaycard.co/">ir al sitio</a>
            <img className="EyelineBackLinks__EyeCash-Logo" src={EyeCashLogo} alt="EyeCash Logo"/>
            <img className="EyelineBackLinks__EyeCash-Banner" src={EyeCashBanner} alt="EyeCash Banner"/>
            <a className="EyelineBackLinks__EyeCash-goto" href="https://eyecash.io/">ir al sitio</a>
            <img className="EyelineBackLinks__EyeWallet-Logo" src={EyeWalletLogo} alt="EyeWallet Logo"/>
            <img className="EyelineBackLinks__EyeWallet-Banner" src={EyeWalletBanner} alt="EyeWallet Banner"/>
            <a className="EyelineBackLinks__EyeWallet-goto" href="https://eyewallet.com/">ir al sitio</a>
            <img className="EyelineBackLinks__GMM-Logo" src={GMMLogo} alt="GMM Global Money Management Logo"/>
            <img className="EyelineBackLinks__GMM-Banner" src={GMMBanner} alt="GMM Global Money Management Banner"/>
            <a className="EyelineBackLinks__GMM-goto" href="https://gmmclub.com/">ir al sitio</a>
            <img className="EyelineBackLinks__EyeWalletPro-Logo" src={EyeWalletProLogo} alt="EyeCash Logo"/>
            <img className="EyelineBackLinks__EyeWalletPro-Banner" src={EyeWalletProBanner} alt="EyeCash Banner"/>
            <a className="EyelineBackLinks__EyeWalletPro-goto" href="https://eyewalletpro.com/">ir al sitio</a>
        </div>
    )
}

export default EyelineBackLinks