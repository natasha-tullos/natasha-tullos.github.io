import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import NavbarWrapper from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Resume from './pages/Resume';
import NotFoundPage from './pages/NotFoundPage';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <NavbarWrapper />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
