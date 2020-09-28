import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="navbarContainer">
    <h4><a href="/">Home</a></h4>
    <div className="navbarItemContainer">
      <h4><a href="#">About</a></h4>
      <h4><a href="#">Resume</a></h4>
      <h4><a href="#">Projects</a></h4>
      <h4><a href="#">Contact</a></h4>
    </div>
  </div>
)

export default Navbar;