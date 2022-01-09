import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Project from './components/projects';

function App() {
  return (
    <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/projects' component={Project} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
