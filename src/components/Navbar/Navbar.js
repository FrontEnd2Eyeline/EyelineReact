import React, {useState, useEffect} from 'react'
import './Navbar.scss' 
import logo from '../../assets/img/Navbar/Logo.svg'
import Popup from "reactjs-popup";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
        

    // Definimos el Hook
    const [scroll, setScroll] = useState('NavbarHeader--enabled')
    // Se usa useEffect como un componentDidMount sin clases
    useEffect(() => {
        document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY < 200
        if (!scrollCheck) {
            setScroll('NavbarHeader--disabled')
        } else {
            setScroll('NavbarHeader--enabled')
        }
      })
    })
    return (
        <div className="Navbar">
            <header className={scroll}>
                <a href="/"><img className="NavbarHeader__Logo" src={logo} alt="Eyeline Bussiness & Development"/></a>
                <div className="NavbarHeader__navigator">
                <a className="NavbarHeader__text" href="#eyeline">{t('navbar.eyeline')}</a>
                <a className="NavbarHeader__text" href="#services">{t('navbar.services')}</a>
                <a className="NavbarHeader__text" href="#eyelineworld">{t('navbar.eyelineworld')}</a>
                    <Popup trigger={ <p className="NavbarHeader__text" >{t('navbar.language')} <span className="NavbarHeader__langtri">▼</span></p>}
                        position="bottom center"
                        on="click"
                        closeOnDocumentClick
                        arrowStyle ={{background:'#5221698c'}}
                        contentStyle={{ padding: "0px", border: "5vw", background:'#5221698c'}}
                        >
                        <div className="NavbarHeader__lang-menu">
                            <h3 className="NavbarHeader__lang-en" onClick={() => changeLanguage('en')}>{t('navbar.english')} </h3>
                            <h3 className="NavbarHeader__lang-es" onClick={() => changeLanguage('es')} >{t('navbar.spanish')} </h3>
                        </div>
                    </Popup>
                </div>
            </header>
        </div>
    )
}

export default Navbar


