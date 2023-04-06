// modules
import React from "react";

// components
import Navbar from '../Navbar/Navbar';
import Graduate from "../../images/graduated.png";

// scss
import './Trainings.scss';

const Trainings = () => {
    return(
        <div className="Trainings">
            <Navbar />
            <div className="ContainerTrainings">
                <div className="Container ContainerType">
                    <h1>Formations</h1>
                    <div className="Graduates Card">
                        <div className="BulletImg">
                            <img src={Graduate} alt="Trainings icon" />
                        </div>
                        
                        <div className="ContentTrainings">
                            <div className="GroupTrainings">
                                <div></div>
                                <div className="YearAndLocation">
                                    <h3>2020</h3>
                                    <h4>Wild Code School</h4>
                                </div>
                                <div>
                                    <p>Formation web et web mobile JavaScript React & Node</p>
                                </div>
                            </div>
                            
                            <div className="GroupTrainings">
                                <div></div>
                                <div className="YearAndLocation">
                                    <h3>2019</h3>
                                    <h4>AFPA</h4>
                                </div>
                                <div>
                                    <p>Certification developpement web et web mobile</p>
                                    <p>Certification TOEIC</p>
                                </div>
                            </div>
                            
                            <div className="GroupTrainings">
                                <div></div>
                                <div className="YearAndLocation">
                                    <h3>2018</h3>
                                    <h4>AFPA</h4>
                                </div>
                                <div>
                                    <p>Certification développement client-serveur</p>
                                </div>
                            </div>
                            
                            <div className="GroupTrainings">
                                <div></div>
                                <div className="YearAndLocation">
                                    <h3>2014</h3>
                                    <h4>Lycée Bernard Palissy</h4>
                                </div>
                                <div>
                                    <p>BTS Communication</p>
                                </div>
                            </div>
                            
                            <div className="GroupTrainings">
                                <div></div>
                                <div className="YearAndLocation">
                                    <h3>2011</h3>
                                    <h4>Lycée Arnaud Daniel</h4>
                                </div>
                                <div>
                                    <p>Bac STG CGRH</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainings;