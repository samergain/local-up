import React from "react";
import "./NavigationBar.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from "../../../images/localuplogo1.png";



// Navigation Bar component - using react bootstrap navbar
function NavigationBar() {

  const handleLogout = function(){
    localStorage.removeItem("user");
  }

    return (
        <Navbar className="navbar-bg" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
        <img src={Logo} alt="LocalUP" className="localuplogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link onClick={handleLogout} href="/home">Logout</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="d-sm-none ">
          <NavDropdown.Item href="/clients">Clients</NavDropdown.Item>
          <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
        </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        
    );
}

export default NavigationBar;
