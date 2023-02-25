// components
import Navbar from '../Navbar/Navbar';
import Picture from '../../images/photo.jpg';
import React from '../../images/react.png';
import Node from '../../images/logo-node.png';

// scss
import './Homepage.scss';

const Homepage = () => {
    return(
        <>
            <Navbar />
            <div className="Homepage">
                <div className="Container">
                    <div className="ContainerPicture">
                        <div className="ContainerName">Johanna Detrieux</div>
                        <img className="Picture" src={Picture} alt="photo de Johanna" />
                        <h1>Développeuse JavaScript fullstack</h1>
                        <div className="Logos">
                            React
                            <img className="LogoReact" src={React} alt="logo React" />
                            | Node
                            <img className="LogoNode" src={Node} alt="logo NodeJS" />
                        </div>
                    </div>
                    <div className="ContainerText">
                        <div className="ContainerAbout">
                            <h2>A propos</h2>
                            <p>
                                Je suis une personne très curieuse qui aime découvrir et apprendre de nouvelles choses.
                                <span className="block">Étant organisée, rapide, efficace et polyvalente dans mon travail, je n'ai pas de
                                difficultés à prendre rapidement mes repères au sein d'une organisation.</span>
                            </p>
                        </div>
                        <div className="ContainerCareer">
                            <h2>Mon parcours</h2>
                            <p>
                                Diplômée d'un BTS Communication depuis 2014, je possède 2 ans d'expérience dans ce domaine : j'ai travaillée
                                en tant qu'Assistante de Communication à la Mairie de ma ville, ainsi qu'en tant que Chargée de Communication
                                à l'Office de Tourisme du Grand Périgueux. <span className="block">J'ai réalisée deux formations qualifiantes,
                                l'une en 2018 en développement client-serveur à l'AFPA de Brive, et l'autre en 2019 à l'AFPA de Boulazac en
                                développement web et web mobile.</span> <span className="block">En 2020 j'ai réalisée une formation en
                                développement web JavaScript-React-NodeJS à la Wild Code School de Bordeaux.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;