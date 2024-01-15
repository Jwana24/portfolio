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
                
                                <div className="ContainerDevFullstack">
                                    <div>
                                        <div>
                                            <h3>My library</h3>
                                        </div>
                                        <h4>Créé le 03 Août 2023</h4>
                                        <p>👉🏻 Application de gestion de bibliothèque personnelles : livres, films, musiques, pour mettre en place des filtres
                                            de recherche spécifiques, aussi bien front que back.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                        <div className="ContainerProjectName">
                                            <h3>My library front</h3>
                                            <a href="https://github.com/Jwana24/my_library_front" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : ReactJS, ViteJS, react-router-dom, TypeScript, SCSS, Eslint, Axios, MaterialUI</p>
                                        <p>👉🏻 Crud pour chaque type (livre / film / musique) ainsi que pour les genres (romans, mangas, fantastique, science-fiction,
                                                pop, rap, rock, etc.). Filtres sur les genres, les statuts (en cours de lecture, visionné, à acheter, etc.) et recherche générale.</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Bonne utilisation de MaterialUI et gestion de filtres côté front.
                                            </span>
                                        </p>

                                        <div className="ContainerProjectName">
                                            <h3>My library back</h3>
                                            <a href="https://github.com/Jwana24/my_library_back" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : NodeJS, ExpressJS, TypeORM, TypeScript, MySQL, Postman</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Première utilisation d’un ORM, mise en place d'un modèle MVC et gestion de filtres côté back.
                                            </span>
                                        </p>
                                    </div>

                                    <div>
                                        <div>
                                            <h3>Recipe weblist</h3>
                                        </div>
                                        <h4>Créé le 12 Juillet 2021</h4>
                                        <p>👉🏻 Application de gestion de recettes de cuisine avec utilisation de WYSIWYG.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                        <div className="ContainerProjectName">
                                            <h3>Recipe weblist front</h3>
                                            <a href="https://github.com/Jwana24/recipe-weblist-front" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : ReactJS, react-router, react-router-dom, JavaScript, SCSS, Axios, React-Hook-Form, DraftJS</p>
                                        <p>👉🏻 Crud des recettes de cuisine.</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Apprendre à mettre en place et utiliser une librairie de WYSIWYG et utilisation d’une librairie de gestion de formulaires.
                                            </span>
                                        </p>

                                        <div className="ContainerProjectName">
                                            <h3>Recipe weblist back</h3>
                                            <a href="https://github.com/Jwana24/recipe-weblist-back" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : NodeJS, JavaScript, ExpressJS, MySQL, Postman</p>
                                    </div>

                                    <div>
                                        <div>
                                            <h3>Piggy bank</h3>
                                        </div>
                                        <h4>Créé le 08 Février 2021</h4>
                                        <p>👉🏻 Application mobile de gestion et suivi de compte bancaire : possibilité d’épargne et de dépenses, affichage du type et de la date pour chacun.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                        <div className="ContainerProjectName">
                                            <h3>Piggy bank front</h3>
                                            <a href="https://github.com/Jwana24/tirelire-front" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : React Native, Expo, Axios, react-hook-form, MomentJS</p>
                                        <p>👉🏻 Crud des dépenses variables et crud des dépenses fixes.</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Apprendre à mettre en place un projet sous React Native.
                                            </span>
                                        </p>

                                        <div className="ContainerProjectName">
                                            <h3>Piggy bank back</h3>
                                            <a href="https://github.com/Jwana24/tirelire-back" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <p>🛠️ Outils et technologies : NodeJS, JavaScript, ExpressJS, MySQL, Postman</p>
                                    </div>

                                    <div>
                                        <div className="ContainerProjectName">
                                            <h3>Projet afpa 2019 (lesnacs) v1</h3>
                                            <a href="https://github.com/Jwana24/projet_afpa_2019" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <h4>Créé le 19 Janvier 2019</h4>
                                        <p>👉🏻 Application réalisée dans le cadre de ma 2e formation. Site d’informations concernant les animaux de compagnie avec des articles et un forum.
                                            Quelques fonctionnalités importantes : Possibilité de mettre des commentaires, des réponses et des likes aux commentaires, version administrateur et traduction anglaise.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>

                                        <div className="ContainerProjectName">
                                            <h3>Projet afpa 2019 (lesnacs) front</h3>
                                        </div>
                                        <p>🛠️ Outils et technologies : JavaScript, Twig, CKEditor, Algolia, Bootstrap</p>
                                        <p>👉🏻 Application front réalisée avec l'outil de template Twig et une recherche générale gérée grâce à l'outil Algolia.</p>

                                        <div className="ContainerProjectName">
                                            <h3>Projet afpa 2019 (lesnacs) back</h3>
                                        </div>
                                        <p>🛠️ Outils et technologies : PHP 7 et Symfony 4, MySQL</p>
                                        <p>👉🏻 Application réalisée avec le framework Symfony 4 et utilisation de son ORM Doctrine.</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Apprendre à mettre en place un projet (côté back) avec un framework PHP, dernière version.
                                            </span>
                                        </p>
                                    </div>

                                    <div>
                                        <div className="ContainerProjectName">
                                            <h3>lesnacs v2</h3>
                                            <a href="https://github.com/Jwana24/lesnacs" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <h4>Créé le 18 Juin 2019</h4>
                                        <p>👉🏻 La même application que celle vu précédemment. C'est ce projet en PHP natif qui a été présenté à un jury pour ma certification de développement.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>

                                        <div className="ContainerProjectName">
                                            <h3>lesnacs front</h3>
                                        </div>
                                        <p>🛠️ Outils et technologies : JavaScript, QuillJS, CSS, Bootstrap</p>
                                        <p>
                                            💡
                                            <span className="ProjectDesc">
                                                Changement d'outil de WYSIWYG pour un outil plus performant et plus utilisé que CKEditor.
                                            </span>
                                        </p>

                                        <div className="ContainerProjectName">
                                            <h3>lesnacs back</h3>
                                        </div>
                                        <p>🛠️ Outils et technologies : PHP 7, PHPMailer, AltoRouter, MySQL</p>
                                    </div>
                                </div>
                            </div>

                            <div className="Dev DevBack Card">
                                <h2>Développement backend</h2>
                                <div className="BulletImg">
                                    <img src={Back} alt="Backend icon" />
                                </div>
                
                                <div className="ContainerDevBack">
                                    <div>
                                        <div className="ContainerProjectName">
                                            <h3>projetBibliothequeCertif</h3>
                                            <a href="https://github.com/Jwana24/projetBibliothequeCertif" target="_blank">
                                                <img className="Github" src={Github} alt="Github" />
                                            </a>
                                        </div>
                                        <h4>Créé le 30 Mai 2018</h4>
                                        <p>👉🏻 Application réalisée dans le cadre de ma première formation de reconversion dans le domaine du développement.
                                            Gestion de bibliothèque municipale avec crud de livres, crud de membres, crud de familles et sur chaque un filtre de recherche. Il y a également une gestion de temps d’emprunt des livres.</p>
                                        <div className="Particeep">
                                            <ZoomedImage src={Portfolio} alt="Website Portfolio" />
                                        </div>
                                    </div>
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