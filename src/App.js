// modules
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// components
import Homepage from './components/Homepage/Homepage';
import Skills from './components/Skills/Skills';
import Formations from './components/Formations/Formations';

// scss
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="/competences" element={<Skills />} />
                <Route path="/formations" element={<Formations />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;