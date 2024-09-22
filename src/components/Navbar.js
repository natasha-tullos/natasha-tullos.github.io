import React, { useState } from 'react';
import { 
  Collapse, 
  Navbar, 
  NavbarToggler,
  Nav, 
  NavItem,
  NavbarBrand,
  NavLink
} from 'reactstrap';
import '../styles/Navbar.css';

const NavbarWrapper = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className="navbarContainer">
      <Navbar color="faded" light>
        {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" /> */}
        {/* <Collapse isOpen={!collapsed} navbar> */}
          <Nav navbar>
            <NavItem>
              <NavLink href="/">
                <h4>Home</h4>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">
                <h4>About</h4>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/skills">
                <h4>Skills</h4>
              </NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/work">
                <h4>Experience</h4>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                <h4>Contact</h4> 
              </NavLink>
            </NavItem>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  )
}

export default NavbarWrapper;