import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const navItemStyle={ color: "#333", fontWeight: "700"};

  return (
    <div>
      <Navbar color="white" light expand="md" className="  border border-secondary "  >
        <NavbarBrand link="/" style={{ color: "#333",fontFamily: 'Modak'}}>KabaadDukaan</NavbarBrand>
        <NavbarToggler className="border-0 btn-warning btn-lg" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto " navbar>
            <NavItem className="mx-4 my-2 ">
              <NavLink to="/pricelist" className="text-dark text-decoration-none" style={navItemStyle}>PriceList</NavLink>
            </NavItem>
            <NavItem className="mx-4 my-2 ">
              <NavLink to="/request" className="text-dark text-decoration-none" style={navItemStyle}>Request Pickup</NavLink>
            </NavItem>
            <NavItem className="mx-4 my-2 ">
              <NavLink to="/signin" className="text-dark text-decoration-none"style={navItemStyle}>Sign In</NavLink>
            </NavItem>
            <NavItem className="mx-4 my-2 ">
              <NavLink to="/signup" className="text-dark text-decoration-none"style={navItemStyle}>Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp;