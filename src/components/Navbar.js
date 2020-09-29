import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import MenuIcon from '@material-ui/icons/Menu';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  console.log(isOpen, ' is open?')

  return (
    <div className="navbarContainer">
      {/* <h4><a href="/">Home</a></h4> */}
      <div>
        <button className="navButton" type="button" onClick={() => !isOpen ? setOpen(true) : setOpen(false)}>
          <Icon className="menuIcon">{!isOpen ? 'menu' : 'close'}</Icon>
        </button>
        <div className={`navbarItemContainer ${isOpen ? 'visible' : 'closed'}`}>
          <h4><a href="#about" onClick={() => setOpen(false)}>About</a></h4>
          <h4><a href="#" onClick={() => setOpen(false)}>Resume</a></h4>
          <h4><a href="#" onClick={() => setOpen(false)}>Projects</a></h4>
          <h4><a href="#" onClick={() => setOpen(false)}>Contact</a></h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar;