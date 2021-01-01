import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from "../../../images/localuplogo1.png";

// Navigation Bar component - using react bootstrap navbar
function NavBar() {
  return (
    <div>
      <Navbar className="navbar-bg" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
        <img src={Logo} alt="LocalUP" className="localuplogo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="/search"></Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="d-sm-none ">
          <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
          <NavDropdown.Item href="/create-tickets">Create a Ticket</NavDropdown.Item>
          <NavDropdown.Item href="/active-tickets">Active Tickets</NavDropdown.Item>
          <NavDropdown.Divider />
          {/* <NavDropdown.Item href="/contacts">Contacts</NavDropdown.Item> */}
        </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
