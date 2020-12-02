import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

// Navigation Bar component - using react bootstrap navbar
function NavBar() {
    return (
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/"><h3>Local UP</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-end">
                    <Nav.Link href="/search" ></Nav.Link>
                    <Nav.Link href="/logout" >Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
       
        </div>
    );
}

export default NavBar;
