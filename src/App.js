// modules
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// components
import Homepage from './components/Homepage/Homepage';
import Skills from './components/Skills/Skills';
import Trainings from './components/Trainings/Trainings';
import Experiences from "./components/Experiences/Experiences";

// scss
import './App.scss';

// Utilisation de "Flaticon" pour les icônes

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/competences" element={<Skills />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/experiences" element={<Experiences />} />
            </Routes>
            <p className="Copyright">© Site portefolio réalisé par Johanna DETRIEUX</p>
        </BrowserRouter>
    );
}

export default App;