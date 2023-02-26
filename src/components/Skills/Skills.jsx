// components
import React from "react"
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
import JS from '../../images/js.png';
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
                <div className="Container">
                    <h1>Compétences</h1>
                    <div className="Dev Card">
                        <h2>Développement Web</h2>
                        <div>
                            <div>
                                <h3>Langages</h3>
                                <div className="Lang">
                                    <img src={JS} alt="Logo JavaScript" />
                                    <img src={TS} alt="Logo TypeScript" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <div className="LangPlus">
                                    <img src={PHP} alt="Logo PHP" />
                                </div>
                            </div>
    
                            <div>
                                <h3>Frameworks & Librairies</h3>
                                <div className="Front">
                                    <img src={ReactImg} alt="Logo ReactJS" />
                                    <img src={Redux} alt="Logo Redux" />
                                    <img src={Express} alt="Logo Express" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <div className="FrontPlus">
                                    <img src={MaterialUI} alt="Logo MaterialUI" />
                                    <img src={Bootstrap} alt="Logo Bootstrap" />
                                    <img src={Symfony} alt="Logo Symfony" />
                                </div>
                            </div>
    
                            <div>
                                <h3>Éditeurs</h3>
                                <div>
                                    <img src={VSC} alt="Logo Visual Studio Code" />
                                    <img src={Webstorm} alt="Logo Webstorm" />
                                </div>
                            </div>

                            <div>
                                <h3>SGBD</h3>
                                <div className="SGBD">
                                    <img src={SQL} alt="Logo SQL" />
                                    <img src={MySQL} alt="Logo MySQL" />
                                </div>
                            </div>

                            <div>
                                <h3>Environnement Back-end</h3>
                                <div className="Back">
                                    <img src={Node} alt="Logo NodeJS" />
                                </div>
                            </div>

                            <div>
                                <h3>Terminal</h3>
                                <div className="">
                                    <img src={Git} alt="Logo Git" />
                                    <img src={Linux} alt="Logo Linux" />
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
                                <img src={French} alt="French flag" />
                                Natif
                            </div>
                            <div className={"LanguageItem"}>
                                <img src={English} alt="English flag" />
                                Certification TOEIC : B2 ( 780 pts )
                            </div>
                            
                            <div className="BulletImg">
                                <img src={Language} alt="Icon languages" />
                            </div>
                        </div>
                        <div className="Design Card">
                            <h2>Web Design</h2>
                            <img src={Photoshop} alt="Logo Photoshop" />
                            <img src={Indesign} alt="Logo Indesign" />
                            <img src={Illustrator} alt="Logo Illustrator" />
                            <img src={Adobexd} alt="Logo AdobeXD" />
                            <img src={Zeplin} alt="Logo Zeplin" />
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