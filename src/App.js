// modules
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

// components
import Homepage from './components/Homepage/Homepage';
import Skills from './components/Skills/Skills';
import Formations from './components/Formations/Formations';

// scss
import './App.scss';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/competences" component={Skills} />
                    <Route path="/formations" component={Formations} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;