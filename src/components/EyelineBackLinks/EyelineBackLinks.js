import React from 'react'
import './EyelineBackLinks.scss' 
import EyePayCashLogo from '../../assets/img/EyelineBacklinks/EyePayCashLogo.png'
import EyePayCashBanner from '../../assets/img/EyelineBacklinks/EyePayCashBanner.png'
import EyePayCashBannerEn from '../../assets/img/EyelineBacklinks/EyePayCashBanner-en.png'
import EyePayCardLogo from '../../assets/img/EyelineBacklinks/EyePayCardLogo.png'
import EyePayCardBanner from '../../assets/img/EyelineBacklinks/EyePayCardBanner.png'
import EyePayCardBannerEn from '../../assets/img/EyelineBacklinks/EyePayCardBanner-en.png'
import EyeCashLogo from '../../assets/img/EyelineBacklinks/EyeCashLogo.png'
import EyeCashBanner from '../../assets/img/EyelineBacklinks/EyeCashBanner.png'
import EyeCashBannerEn from '../../assets/img/EyelineBacklinks/EyeCashBanner-en.png'
import EyeWalletLogo from '../../assets/img/EyelineBacklinks/EyeWalletLogo.png'
import EyeWalletBanner from '../../assets/img/EyelineBacklinks/EyeWalletBanner.png'
import EyeWalletBannerEn from '../../assets/img/EyelineBacklinks/EyeWalletBanner-en.png'
import GMMLogo from '../../assets/img/EyelineBacklinks/GMMLogo.png'
import GMMBanner from '../../assets/img/EyelineBacklinks/GMMBanner.png'
import GMMBannerEn from '../../assets/img/EyelineBacklinks/GMMBanner-en.png'
import EyeWalletProLogo from '../../assets/img/EyelineBacklinks/EyeWalletProLogo.png'
import EyeWalletProBanner from '../../assets/img/EyelineBacklinks/EyeWalletProBanner.png'
import EyeWalletProBannerEn from '../../assets/img/EyelineBacklinks/EyeWalletProBanner-en.png'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ReactWOW from 'react-wow'

const EyelineBackLinks = () => {
    const { t } = useTranslation();
    return (
        <div>
        { i18next.language === 'es' ? (            
            <div id="links" className="EyelineBackLinks">
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyePayCash-Logo" src={EyePayCashLogo} alt="EyePayCash Logo"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyePayCash-Banner" src={EyePayCashBanner} alt="EyePayCash Banner"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><a className="EyelineBackLinks__EyePayCash-goto" href="https://eyepaycash.co/">{t('eyelinks.goto')}</a></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyePayCard-Logo" src={EyePayCardLogo} alt="EyePayCard Logo"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyePayCard-Banner" src={EyePayCardBanner} alt="EyePayCard Banner"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><a className="EyelineBackLinks__EyePayCard-goto" href="https://eyepaycard.co/">{t('eyelinks.goto')}</a></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyeCash-Logo" src={EyeCashLogo} alt="EyeCash Logo"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyeCash-Banner" src={EyeCashBanner} alt="EyeCash Banner"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><a className="EyelineBackLinks__EyeCash-goto" href="https://eyecash.io/">{t('eyelinks.goto')}</a></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyeWallet-Logo" src={EyeWalletLogo} alt="EyeWallet Logo"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyeWallet-Banner" src={EyeWalletBanner} alt="EyeWallet Banner"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><a className="EyelineBackLinks__EyeWallet-goto" href="https://eyewallet.com/">{t('eyelinks.goto')}</a></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__GMM-Logo" src={GMMLogo} alt="GMM Global Money Management Logo"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__GMM-Banner" src={GMMBanner} alt="GMM Global Money Management Banner"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><a className="EyelineBackLinks__GMM-goto" href="https://gmmclub.com/">{t('eyelinks.goto')}</a></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyeWalletPro-Logo" src={EyeWalletProLogo} alt="EyeCash Logo"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><img className="EyelineBackLinks__EyeWalletPro-Banner" src={EyeWalletProBanner} alt="EyeCash Banner"/></ReactWOW>
            <ReactWOW animation='fadeInUp' duration='1s' delay='0s'><a className="EyelineBackLinks__EyeWalletPro-goto" href="https://eyewalletpro.com/">{t('eyelinks.goto')}</a></ReactWOW>
            </div>
            ) : (
            <div id="links" className="EyelineBackLinks">
                <img className="EyelineBackLinks__EyePayCash-Logo" src={EyePayCashLogo} alt="EyePayCash Logo"/>
                <img className="EyelineBackLinks__EyePayCash-Banner" src={EyePayCashBannerEn} alt="EyePayCash Banner"/>
                <a className="EyelineBackLinks__EyePayCash-goto" href="https://eyepaycash.co/">{t('eyelinks.goto')}</a>
                <img className="EyelineBackLinks__EyePayCard-Logo" src={EyePayCardLogo} alt="EyePayCard Logo"/>
                <img className="EyelineBackLinks__EyePayCard-Banner" src={EyePayCardBannerEn} alt="EyePayCard Banner"/>
                <a className="EyelineBackLinks__EyePayCard-goto" href="https://eyepaycard.co/">{t('eyelinks.goto')}</a>
                <img className="EyelineBackLinks__EyeCash-Logo" src={EyeCashLogo} alt="EyeCash Logo"/>
                <img className="EyelineBackLinks__EyeCash-Banner" src={EyeCashBannerEn} alt="EyeCash Banner"/>
                <a className="EyelineBackLinks__EyeCash-goto" href="https://eyecash.io/">{t('eyelinks.goto')}</a>
                <img className="EyelineBackLinks__EyeWallet-Logo" src={EyeWalletLogo} alt="EyeWallet Logo"/>
                <img className="EyelineBackLinks__EyeWallet-Banner" src={EyeWalletBannerEn} alt="EyeWallet Banner"/>
                <a className="EyelineBackLinks__EyeWallet-goto" href="https://eyewallet.com/">{t('eyelinks.goto')}</a>
                <img className="EyelineBackLinks__GMM-Logo" src={GMMLogo} alt="GMM Global Money Management Logo"/>
                <img className="EyelineBackLinks__GMM-Banner" src={GMMBannerEn} alt="GMM Global Money Management Banner"/>
                <a className="EyelineBackLinks__GMM-goto" href="https://gmmclub.com/">{t('eyelinks.goto')}</a>
                <img className="EyelineBackLinks__EyeWalletPro-Logo" src={EyeWalletProLogo} alt="EyeCash Logo"/>
                <img className="EyelineBackLinks__EyeWalletPro-Banner" src={EyeWalletProBannerEn} alt="EyeCash Banner"/>
                <a className="EyelineBackLinks__EyeWalletPro-goto" href="https://eyewalletpro.com/">{t('eyelinks.goto')}</a>
            </div>
            )}
        </div>
    )
}

export default EyelineBackLinks