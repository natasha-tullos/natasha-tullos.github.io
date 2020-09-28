import React from 'react';
import './App.css';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="slide">
        <img src={require('./assets/default.png')} className="slide-image" alt="logo" />
        <About />
      </div>
    </div>
  );
}

export default App;
