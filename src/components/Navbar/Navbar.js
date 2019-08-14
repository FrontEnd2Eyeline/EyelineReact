import React, {useState, useEffect} from 'react'
import './Navbar.scss' 
import logo from '../../assets/img/Navbar/Logo.svg'
import Popup from "reactjs-popup";

const Navbar = () => {
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
                <a className="NavbarHeader__text" href="#eyeline">EYELINE</a>
                <a className="NavbarHeader__text" href="#services">SERVICIOS</a>
                <a className="NavbarHeader__text" href="#eyelineworld">MUNDO EYELINE</a>
                    <Popup trigger={ <p className="NavbarHeader__text" >LENGUAJE <span className="NavbarHeader__langtri">▼</span></p>}
                        position="bottom center"
                        on="click"
                        closeOnDocumentClick
                        arrowStyle ={{background:'#5221698c'}}
                        contentStyle={{ padding: "0px", border: "5vw", background:'#5221698c'}}
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

export default Navbar


