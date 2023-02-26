// components
import React from "react";
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

// scss
import './Experiences.scss';

const Experiences = () => {
    return(
        <div className="Experiences">
            <Navbar />
            <div className="ContainerExperiences">
                <div className="Container">
                    <h1>Expériences</h1>
                    <div className="Dev Card">
                        <h2>Développement</h2>
                        <div className="BulletImg">
                            <img src={Dev} alt="Development icon" />
                        </div>
  
                        <div>
                            <div className="ContainerDevReact">
                                <h3>Développement React (Redux / Typescript / Webpack / Styled component / MaterialUI / Formik)</h3>
                                <h4>Particeep - septembre 2022 à aujourd'hui</h4>
                                <div className="Particeep">
                                    <ZoomedImage src={Particeep} alt="Website Particeep" />
                                    <ZoomedImage src={Finstore} alt="Finstore Particeep" />
                                </div>
    
                                <h4>Dydu - juillet 2021 à juillet 2022</h4>
                                <div className="Dydu">
                                    <ZoomedImage src={Dydu} alt="Website Dydu" />
                                    <ZoomedImage src={Chatbot} alt="Chatbot Dydu" className="ChatbotImg" />
                                </div>
                            </div>

                            <h3>Intégration et développement PHP (Bolt / Prestashop / Symfony)</h3>
                            <h4>Definima - août 2020 à août 2021</h4>
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
                </div>
            </div>
        </div>
    )
}

export default Experiences;