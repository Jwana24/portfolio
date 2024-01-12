// modules
import React, { useState } from "react";

// components
import Navbar from '../Navbar/Navbar';
import ZoomedImage from "../ZoomedImage";
// --- Definima --- //
import Dev from "../../images/development.png";
import Communication from "../../images/communication.png";
import Definima from "../../images/definima/definima.png";
import Locaway from "../../images/definima/locaway.png";
import Iming from "../../images/definima/iming.png";
import RCommerce from "../../images/definima/rcommerce.png";
import Placeco from "../../images/definima/placeco.png";
import CentralSono from "../../images/definima/central-sono.png";
import SymbioseClub from "../../images/definima/symbiose-club.png";
import LaDegust from "../../images/definima/la-degust.png";

// --- Dydu --- //
import Dydu from "../../images/dydu/dydu.png";
import Chatbot from "../../images/dydu/chatbot-dydu.png";

// --- Particeep --- //
import Particeep from "../../images/particeep/particeep.png";
import Finstore from "../../images/particeep/finstore-particeep.png";

// --- Comm --- //
import WeekendFestif from "../../images/com/weekend-festif.jpg";
import MoisDoc from "../../images/com/mois-doc.jpg";
import SoireeFrisson from "../../images/com/soiree-frisson.jpg";
import BalTrad from "../../images/com/bal-trad.jpg";
import ConcertLeonid from "../../images/com/concert-leonid.jpg";

// --- Dev front --- //
import Front from "../../images/frontend.png";
import Github from "../../images/github.png";
import Portfolio from "../../images/projets-perso/portfolio.png";

// --- Dev back --- //
import Back from "../../images/backend.png";

// --- Dev fullstack --- //
import FullS from "../../images/fullstack.png";

// scss
import './Experiences.scss';

const Experiences = () => {
    const [proBool, setProBool] = useState(false);
    const [persoBool, setPersoBool] = useState(true);

    const handleClickPro = () => {
        setProBool(true);
        setPersoBool(false);
    }

    const handleClickPerso = () => {
        setPersoBool(true);
        setProBool(false);
    }

    return(
        <div className="Experiences">
            <Navbar />
            <div className="ContainerExperiences">
                <div className="Container ContainerType">
                    <div className="ContainerButtons">
                        <button className="ButtonCustom" onClick={handleClickPerso}>🏠 Projets personnels</button>
                        <button className="ButtonCustom" onClick={handleClickPro}>🏢 Expériences professionelles</button>
                    </div>
                    {persoBool && (
                      // TODO: add personals projects here
                      <>
                            <h1>Projets personnels significatifs</h1>
                            <div className="Dev DevFront Card">
                                <h2>Développement frontend</h2>
                                <div className="BulletImg">
                                    <img src={Front} alt="Frontend icon" />
                                </div>
          
                                <div className="ContainerDevReact">
                                    <div>
                                        <div className="ContainerProjectName">
                                            <h3>POK React-Hook-Form</h3>
                                            <a href="https://github.com/Jwana24/pok-rhf_controller" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : React-Hook-Form, Yup</p>
                                        <h4>Créé le 17 Juillet 2023</h4>
                                        <p>👉🏻 Librairie de gestion de formulaires React-Hook-Form, librairie de validation de formulaires Yup.</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Un pok pour apprendre à mettre en place RHF ainsi que Yup et notamment avec le composant Controller.
                                            </span>
                                        </p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="ContainerProjectName">
                                            <h3>Pet Care</h3>
                                            <a href="https://github.com/Jwana24/pet_care_front" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : NextJS, TypeScript, Tailwind, Eslint, react-toastify, Yup</p>
                                        <h4>Créé le 02 Avril 2023</h4>
                                        <p>👉🏻 Application de gestion de carnet de santé animalier avec inscription et connexion utilisateur, crud de carnet de santé, crud d’informations utilisateur.</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Projet pour apprendre NextJS v13 et Tailwind, avec une bonne utilisation de TypeScript.
                                            </span>
                                        </p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="ContainerProjectName">
                                            <h3>Portfolio ReactJS</h3>
                                            <a href="https://github.com/Jwana24/portfolio" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : ReactJS, JavaScript, react-router, react-router-dom, SCSS</p>
                                        <h4>Refonte en React le 25 Février 2023</h4>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="Dev DevFullstack Card">
                                <h2>Développement fullstack</h2>
                                <div className="BulletImg">
                                    <img src={FullS} alt="Fullstack icon" />
                                </div>
                
                                <div>
                                    <h3>En formation et dans le cadre professionnel (Photoshop / Illustrator / InDesign)</h3>
                                    <h4>2015 à 2017</h4>
                                    
                                </div>
                            </div>

                            <div className="Dev DevBack Card">
                                <h2>Développement backend</h2>
                                <div className="BulletImg">
                                    <img src={Back} alt="Backend icon" />
                                </div>
                
                                <div>
                                    <h3>En formation et dans le cadre professionnel (Photoshop / Illustrator / InDesign)</h3>
                                    <h4>2015 à 2017</h4>
                                    
                                </div>
                            </div>
                        </>
                    )}

                    {proBool && (
                        <>
                            <h1>Expériences professionelles</h1>
                            <div className="Dev Card">
                                <h2>Développement</h2>
                                <div className="BulletImg">
                                    <img src={Dev} alt="Development icon" />
                                </div>
          
                                <div className="ContainerDevReact">
                                    <div>
                                        <h3>Développement React</h3>
                                        <p>🛠️ Outils et technologies : Redux / Typescript / Webpack / Styled component / JSS / MaterialUI / Formik / React Hook Form / Jest</p>
                                        <h4>Particeep - septembre 2022 à mai 2023</h4>
                                        <p>
                                            J'ai réalisé principalement du bug fix sur le nouveau design en React, sur le front office et le back office du projet qui concerne des
                                            investissements financiers.
                                        </p>
                                        <p className="SmallText">👤 Travail en autonomie sur ce projet.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Particeep} alt="Website Particeep" />
                                            <ZoomedImage src={Finstore} alt="Finstore Particeep" />
                                        </div>
            
                                        <h4>Dydu - juillet 2021 à juillet 2022</h4>
                                        <p>
                                            J'ai réalisé des fonctionnalités et des bugs fix sur différentes chatbox (V1 en Angular et V2 en React), ainsi que sur l'outil de gestion
                                            des chatbox.
                                        </p>
                                        <p className="SmallText">👤 Travail en autonomie sur ce projet.</p>
                                        <p className="SmallText">👥 Un peu de travail en pair-programming sur certaines features / bugs.</p>
                                        <div className="Dydu">
                                            <ZoomedImage src={Dydu} alt="Website Dydu" />
                                            <ZoomedImage src={Chatbot} alt="Chatbot Dydu" className="ChatbotImg" />
                                        </div>
                                    </div>
        
                                    <h3>Intégration et développement PHP</h3>
                                    <p>🛠️ Outils et technologies : Bolt / Prestashop / Symfony / Twig / JavaScript / SCSS</p>
                                    <h4>Definima - août 2020 à août 2021</h4>
                                    <p className="SmallText">👤 Travail en autonomie sur les sites : Iming, Central Sono, Symbiose Club.</p>
                                    <p className="SmallText">
                                        👥 Travail en équipe avec d'autres développeurs (backend - frontend) sur les sites : Definima, Locaway, RCommerce, Placéco
                                        et LaDégust.
                                    </p>
                                    <div className="Integration">
                                        <ZoomedImage src={Definima} alt="Website Definima" />
                                        <ZoomedImage src={Locaway} alt="Website Locaway" />
                                        <ZoomedImage src={Iming} alt="Website Iming" />
                                        <ZoomedImage src={RCommerce} alt="Website RCommerce" />
                                        <ZoomedImage src={Placeco} alt="Website Placéco" />
                                        <ZoomedImage src={CentralSono} alt="Website Central Sono" />
                                        <ZoomedImage src={SymbioseClub} alt="Website Symbiose Club" />
                                        <ZoomedImage src={LaDegust} alt="Website La Dégust" />
                                    </div>
                                </div>
                            </div>
            
                            <div className="Communication Card">
                                <h2>Créations visuelles</h2>
                                <div className="BulletImg">
                                    <img src={Communication} alt="Communication icon" />
                                </div>
                
                                <div>
                                    <h3>En formation et dans le cadre professionnel (Photoshop / Illustrator / InDesign)</h3>
                                    <h4>2015 à 2017</h4>
                                    <div className="Creations">
                                        <ZoomedImage src={WeekendFestif} alt="Weekend festive flyer" />
                                        <ZoomedImage src={MoisDoc} alt="Month document flyer" />
                                        <ZoomedImage src={SoireeFrisson} alt="Thrill party flyer" />
                                        <ZoomedImage src={BalTrad} alt="Traditional ball flyer" />
                                        <ZoomedImage src={ConcertLeonid} alt="Leonid concert flyer" />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experiences;