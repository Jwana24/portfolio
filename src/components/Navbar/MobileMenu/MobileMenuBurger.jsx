// modules
import React from "react";
import { Link } from "react-router-dom";

// components
import CV from "../../../documents/CV-johanna-detrieux-developpeuse-reactjs.pdf";

// scss
import './MobileMenuBurger.scss';

const MobileMenuBurger = () => {
    return (
        <div className="Mobile">
            <input id="toggle" type="checkbox" />
            <label className="toggle-container" htmlFor="toggle">
                <span className="button button-toggle"></span>
            </label>

            <nav className="nav">
                <Link to='/' className="nav-item">Accueil</Link>
                <Link to='/trainings' className="nav-item">Formations</Link>
                <Link to='/competences' className="nav-item">Compétences</Link>
                <Link to='/experiences' className="nav-item">Expériences</Link>
                <a href={CV} className="nav-item" target="_blank" rel="noreferrer">Mon CV</a>
            </nav>
        </div>
    )
}

export default MobileMenuBurger;