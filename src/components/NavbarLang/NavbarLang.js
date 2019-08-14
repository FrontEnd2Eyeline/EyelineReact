import React, {useState, useEffect} from 'react'
import './NavbarLang.scss' 
import logo from '../../assets/img/Navbar/Logo.svg'
import Popup from "reactjs-popup";

const NavbarLang = () => {
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
                    <Popup trigger={ <p className="NavbarHeader__text" >LENGUAJE <span className="NavbarHeader__langtri">▼</span></p>}
                        position="bottom center"
                        on="click"
                        closeOnDocumentClick
                        arrowStyle ={{background:'#5221698c'}}
                        contentStyle={{ padding: "0px", border: "5vw", background:'#5221698c', width: '310px'}}
                        >
                        <div className="NavbarHeader__lang-menu">
                            <a className="NavbarHeader__lang-en" href="#ingles">English</a>
                            <a className="NavbarHeader__lang-es"href="#español">Español</a>
                        </div>
                    </Popup>
                </div>
            </header>
        </div>
    )
}

export default NavbarLang


