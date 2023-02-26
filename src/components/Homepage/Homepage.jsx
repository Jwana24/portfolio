// components
import React from "react";
import Navbar from '../Navbar/Navbar';
import Picture from '../../images/photo.jpg';
import ReactImg from '../../images/react.png';
import Node from '../../images/logo-node.png';
import Github from '../../images/github.png';
import Linkedin from '../../images/linkedin.png';
import Email from '../../images/email.png';

// scss
import './Homepage.scss';

const Homepage = () => {
    return(
        <>
            <Navbar />
            <div className="Homepage">
                <div className="Container">
                    <div className="ContainerPicture">
                        <img className="Picture" src={Picture} alt="Myself" />
                        <h1>Développeuse React en full-remote</h1>
                        <div className="Logos">
                            ReactJS
                            <img className="LogoReact" src={ReactImg} alt="Logo ReactJS" />
                            | Node
                            <img className="LogoNode" src={Node} alt="Logo NodeJS" />
                        </div>
                    </div>
                    <div className="ContainerText">
                        <div className="ContainerAbout">
                            <h2>À propos</h2>
                            <p>
                                Je suis une personne très curieuse qui aime découvrir et apprendre de nouvelles choses.
                                <span className="block">Étant organisée, rapide, efficace et polyvalente dans mon travail, je n'ai pas de
                                difficultés à prendre rapidement mes repères au sein d'une organisation.</span>
                            </p>
                        </div>
                        <div className="ContainerCareer">
                            <h2>Mon parcours</h2>
                            <p>
                                Diplômée d'un BTS Communication, je possède 2 ans d'expérience dans ce domaine.
                                Dans le cadre d'une reconversion professionnelle, j'ai réalisé deux formations qualifiantes
                                en développement client-serveur puis en web et web mobile.

                                <span className="block">
                                    J'ai participé ensuite à une formation en développement web spécialisée en JavaScript, notamment sur React et NodeJS
                                    à la Wild Code School à Bordeaux.
                                </span>
                                
                                <span className="block">
                                    Depuis, j'ai approfondi mes connaissances lors de mes expériences professionnelles en me spécialisant sur la
                                    bibliothèque ReactJS et son écosystème.
                                </span>
                            </p>
                        </div>
                        <div className="ContainerContact">
                            <a href="https://github.com/Jwana24" target="_blank" rel="noreferrer" >
                                <img className="LogoGithub" src={Github} alt="Logo Github" />
                            </a>
                            <a href="https://www.linkedin.com/in/johannadetrieux/" target="_blank" rel="noreferrer" >
                                <img className="LogoLinkedin" src={Linkedin} alt="Logo LinkedIn" />
                            </a>
                            <a href="mailto:johanna.detrieux@gmail.com" target="_blank" rel="noreferrer" >
                                <img className="Image email" src={Email} alt="Email" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;