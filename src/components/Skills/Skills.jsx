// modules
import React from "react";

// components
import Navbar from '../Navbar/Navbar';
import French from '../../images/french-flag.png';
import English from '../../images/english-flag.png';
import Photoshop from '../../images/photoshop.png';
import Indesign from '../../images/indesign.png';
import Illustrator from '../../images/illustrator.png';
import Adobexd from '../../images/adobexd.png';
import Zeplin from '../../images/zeplin.png';
import Language from '../../images/languages.png';
import WebDesign from '../../images/web-design.png';
import WebDev from '../../images/web-development.png';
import VSC from '../../images/vsc.png';
import SQL from '../../images/sql-server.png';
import MySQL from '../../images/mysql.png';
import JS from '../../images/javascript.png';
import TS from '../../images/typescript.png';
import PHP from '../../images/php.png';
import Node from '../../images/node.png';
import ReactImg from '../../images/react.png';
import Redux from '../../images/redux.png';
import Express from '../../images/express.png';
import Symfony from '../../images/symfony.png';
import Bootstrap from '../../images/bootstrap.png';
import Git from '../../images/git.png';
import Linux from '../../images/linux.png';
import Webstorm from '../../images/webstorm.png';
import MaterialUI from '../../images/materialui.png';

// scss
import './Skills.scss';

const Skills = () => {
    return(
        <div className="Skills">
            <Navbar />
            <div className="ContainerSkills">
                <div className="Container ContainerType">
                    <h1>Compétences</h1>
                    <div className="Dev Card">
                        <h2>Développement Web</h2>
                        <div className="ContainerGrid">
                            <div>
                                <h3>Langages</h3>
                                <div className="Lang">
                                    <img src={JS} className="ImgMedium" alt="Logo JavaScript" />
                                    <img src={TS} className="ImgMedium" alt="Logo TypeScript" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <div>
                                    <img src={PHP} className="ImgSmall" alt="Logo PHP" />
                                </div>
                            </div>
    
                            <div>
                                <h3>Frameworks & Librairies</h3>
                                <div className="Front">
                                    <img src={ReactImg} className="ImgMedium" alt="Logo ReactJS" />
                                    <img src={Redux} className="ImgMedium" alt="Logo Redux" />
                                    <img src={Express} className="ImgExtraLarge" alt="Logo Express" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <div>
                                    <img src={MaterialUI} className="ImgExtraSmall" alt="Logo MaterialUI" />
                                    <img src={Bootstrap} className="ImgExtraSmall" alt="Logo Bootstrap" />
                                    <img src={Symfony} className="ImgExtraSmall" alt="Logo Symfony" />
                                </div>
                            </div>
    
                            <div>
                                <h3>Éditeurs</h3>
                                <div>
                                    <img src={VSC} className="ImgMedium" alt="Logo Visual Studio Code" />
                                    <img src={Webstorm} className="ImgMedium" alt="Logo Webstorm" />
                                </div>
                            </div>

                            <div>
                                <h3>SGBD</h3>
                                <div className="SGBD">
                                    <img src={SQL} className="ImgMediumSmall" alt="Logo SQL" />
                                    <img src={MySQL} className="ImgLarge" alt="Logo MySQL" />
                                </div>
                            </div>

                            <div>
                                <h3>Environnement Back-end</h3>
                                <div className="Back">
                                    <img src={Node} className="ImgMediumLarge" alt="Logo NodeJS" />
                                </div>
                            </div>

                            <div>
                                <h3>Terminal</h3>
                                <div>
                                    <img src={Git} className="ImgMedium" alt="Logo Git" />
                                    <img src={Linux} className="ImgMedium" alt="Logo Linux" />
                                </div>
                            </div>
                        </div>
                        <div className="BulletImg">
                            <img src={WebDev} alt="Icon web development" />
                        </div>
                    </div>

                    <div className="ContainerCards">
                        <div className="Language Card">
                            <h2>Langages</h2>
                            <div className={"LanguageItem"}>
                                <img src={French} className="ImgMedium" alt="French flag" />
                                Natif
                            </div>
                            <div className={"LanguageItem"}>
                                <img src={English} className="ImgMedium" alt="English flag" />
                                Certification TOEIC : B2 ( 780 pts )
                            </div>
                            
                            <div className="BulletImg">
                                <img src={Language} alt="Icon languages" />
                            </div>
                        </div>
                        <div className="Design Card">
                            <h2>Web Design</h2>
                            <img src={Photoshop} className="ImgMediumSmall" alt="Logo Photoshop" />
                            <img src={Indesign} className="ImgMediumSmall" alt="Logo Indesign" />
                            <img src={Illustrator} className="ImgMediumSmall" alt="Logo Illustrator" />
                            <img src={Adobexd} className="ImgMediumSmall" alt="Logo AdobeXD" />
                            <img src={Zeplin} className="ImgMediumSmall" alt="Logo Zeplin" />
                            <div className="BulletImg">
                                <img src={WebDesign} alt="Icon web design" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;