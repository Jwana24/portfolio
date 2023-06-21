// modules
import React from "react";

// components
import Navbar from '../Navbar/Navbar';
import French from '../../images/french-flag.png';
import English from '../../images/english-flag.png';
import Adobexd from '../../images/adobexd.png';
import Zeplin from '../../images/zeplin.png';
import Figma from '../../images/figma.png';
import Language from '../../images/languages.png';
import WebDesign from '../../images/web-design.png';
import WebDev from '../../images/web-development.png';
import SQL from '../../images/sql-server.png';
import MySQL from '../../images/mysql.png';
import JS from '../../images/javascript.png';
import TS from '../../images/typescript.png';
import PHP from '../../images/php.png';
import Next from '../../images/nextjs.png';
import Node from '../../images/node.png';
import ReactImg from '../../images/react.png';
import Redux from '../../images/redux.png';
import Express from '../../images/express.png';
import Symfony from '../../images/symfony.png';
import Bootstrap from '../../images/bootstrap.png';
import Git from '../../images/git.png';
import Linux from '../../images/linux.png';
import MaterialUI from '../../images/materialui.png';
import Tailwind from '../../images/tailwindcss.png';
import Formik from '../../images/formik.png';
import ReactHookForm from '../../images/reactHookForm.png';
import Jest from '../../images/jest.png';

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
                                    <img src={JS} className="ImgMedium" alt="Logo JavaScript" title="JavaScript" />
                                    <img src={TS} className="ImgMedium" alt="Logo TypeScript" title="TypeScript" />
                                </div>
                                <p>Ce que je connais en + :</p>
                                <div>
                                    <img src={PHP} className="ImgSmall" alt="Logo PHP" title="PHP" />
                                </div>
                            </div>
    
                            <div>
                                <h3>Frameworks & Librairies</h3>
                                <div className="Front">
                                    <img src={ReactImg} className="ImgMedium" alt="Logo ReactJS" title="React" />
                                    <img src={Redux} className="ImgMediumSmall" alt="Logo Redux" title="Redux" />
                                    <img src={Next} className="ImgMediumSmall" alt="Logo Next" title="NextJS" />
                                    <img src={Express} className="ImgExtraLarge" alt="Logo Express" />
                                </div>
                                <p>Ce que je connais en + :</p>
                                <div className="KnownFront">
                                    <img src={Symfony} className="ImgExtraSmall" alt="Logo Symfony" title="Symfony" />
                                    <img src={Formik} className="ImgExtraSmall" alt="Logo Formik" title="Formik" />
                                    <img src={ReactHookForm} className="ImgExtraSmall" alt="Logo React Hook Form" title="React Hook Form" />
                                    <img src={Jest} className="ImgExtraSmall" alt="Logo Jest" title="Jest" />
                                    <img src={Tailwind} className="ImgExtraSmall" alt="Logo TailwindCSS" title="TailwindCSS" />
                                    <img src={MaterialUI} className="ImgExtraSmall" alt="Logo MaterialUI" title="MaterialUI" />
                                    <img src={Bootstrap} className="ImgExtraSmall" alt="Logo Bootstrap" title="Bootstrap" />
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
                                    <img src={Node} className="ImgLarge" alt="Logo NodeJS" />
                                </div>
                            </div>

                            <div>
                                <h3>Terminal</h3>
                                <div>
                                    <img src={Git} className="ImgMedium" alt="Logo Git" title="Git" />
                                    <img src={Linux} className="ImgMedium" alt="Logo Linux" title="Linux" />
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
                                Certification TOEIC : B2 (780 pts)
                            </div>
                            
                            <div className="BulletImg">
                                <img src={Language} alt="Icon languages" />
                            </div>
                        </div>
                        <div className="Design Card">
                            <h2>Web Design</h2>
                            <img src={Adobexd} className="ImgMediumSmall" alt="Logo AdobeXD" title="AdobeXD" />
                            <img src={Zeplin} className="ImgMediumSmall" alt="Logo Zeplin" title="Zeplin" />
                            <img src={Figma} className="ImgExtraSmall" alt="Logo Figma" title="Figma" />
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