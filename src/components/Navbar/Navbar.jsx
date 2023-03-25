// modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import CV from '../../documents/CV-johanna-detrieux-developpeuse-reactjs.pdf';
import MobileMenuBurger from "./MobileMenu/MobileMenuBurger";

// scss
import './Navbar.scss';

const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const isMobile = width <= 1015;
    
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }
  
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if (isMobile) {
      return <MobileMenuBurger />
    }

    return (
        <div className="Navbar">
            <div className="Container">
                <div className="Name">
                    <Link to='/'>Johanna Detrieux</Link>
                </div>
                <div className="Links">
                    <Link to='/'>Accueil</Link>
                    <Link to='/trainings'>Formations</Link>
                    <Link to='/competences'>Compétences</Link>
                    <Link to='/experiences'>Expériences</Link>
    
                    <a href={CV} target="_blank" rel="noreferrer">Mon CV</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;