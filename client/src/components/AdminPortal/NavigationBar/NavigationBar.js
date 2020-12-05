import React from "react";
import "./NavigationBar.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';



// Navigation Bar component - using react bootstrap navbar
function NavigationBar() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <h3>Local UP</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="/logout">Logout</Nav.Link>
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
