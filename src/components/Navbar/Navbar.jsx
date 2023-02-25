// modules
import {
    Link
} from "react-router-dom";
import CV from '../../documents/CV-johanna-detrieux-developpeuse-reactjs.pdf';

// scss
import './Navbar.scss';

const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="Container">
                <div className="Name">
                    <Link to='/'>
                        Johanna Detrieux
                    </Link>
                </div>
                <div className="Links">
                    <Link to='/'>
                        Accueil
                    </Link>
                    <Link to='/trainings'>
                        Formations
                    </Link>
                    <Link to='/experiences'>
                        Expériences
                    </Link>
                    <Link to='/competences'>
                        Compétences
                    </Link>
    
                    <a href={CV} target="_blank">Mon CV</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;