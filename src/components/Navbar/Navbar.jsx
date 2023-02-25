// modules
import {
    Link
} from "react-router-dom";

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
                    <Link to='/formations'>
                        Formations
                    </Link>
                    <Link to='/competences'>
                        Compétences
                    </Link>
                    <Link to='/projects'>
                        Projets
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;