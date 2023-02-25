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
import VS from '../../images/vs.png';
import SQL from '../../images/sql-server.png';
import MySQL from '../../images/mysql.png';
import JS from '../../images/js.png';
import PHP from '../../images/php.png';
import Node from '../../images/node.png';
import Apache from '../../images/logo-apache.png';
import React from '../../images/react.png';
import Express from '../../images/express.png';
import Symfony from '../../images/symfony.png';
import Bootstrap from '../../images/bootstrap.png';
import Git from '../../images/git.png';
import Linux from '../../images/linux.png';

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
                        <h2>Développement web et mobile</h2>
                        <div>
                            <div>
                                <h3>Éditeurs</h3>
                                <div>
                                    <img src={VSC} alt="" />
                                    <img src={VS} alt="" />
                                </div>
                            </div>

                            <div>
                                <h3>SGBD</h3>
                                <div className="SGBD">
                                    <img src={SQL} alt="" />
                                    <img src={MySQL} alt="" />
                                </div>
                            </div>

                            <div>
                                <h3>Langages</h3>
                                <div className="Lang">
                                    <img src={JS} alt="" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <div className="LangPlus">
                                    <img src={PHP} alt="" />
                                </div>
                            </div>

                            <div>
                                <h3>Environnement back-end</h3>
                                <div className="Back">
                                    <img src={Node} alt="" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <img src={Apache} alt="" />
                            </div>

                            <div>
                                <h3>Frameworks - librairies</h3>
                                <div className="Front">
                                    <img src={React} alt="" />
                                    <img src={Express} alt="" />
                                </div>
                                <p>Ce que je peux faire :</p>
                                <div className="FrontPlus">
                                    <img src={Symfony} alt="" />
                                    <img src={Bootstrap} alt="" />
                                </div>
                            </div>

                            <div>
                                <h3>Terminal</h3>
                                <div className="">
                                    <img src={Git} alt="" />
                                    <img src={Linux} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="BulletImg">
                            <img src={WebDev} alt="" />
                        </div>
                    </div>
                    <div className="ContainerCards">
                        <div className="Language Card">
                            <h2>Langages</h2>
                            <img src={French} alt="" />
                            <img src={English} alt="" />
                            <div className="BulletImg">
                                <img src={Language} alt="" />
                            </div>
                        </div>
                        <div className="Design Card">
                            <h2>Web design</h2>
                            <img src={Photoshop} alt="" />
                            <img src={Indesign} alt="" />
                            <img src={Illustrator} alt="" />
                            <img src={Adobexd} alt="" />
                            <img src={Zeplin} alt="" />
                            <div className="BulletImg">
                                <img src={WebDesign} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;