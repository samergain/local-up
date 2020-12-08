import React from "react";
import "./NavBar.css";
import { Nav, Navbar } from 'react-bootstrap';



// Navigation Bar component - using react bootstrap navbar
function NavBar() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/"><h3>Local UP</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home" >Home</Nav.Link>
                    <Nav.Link href="/sign-in" >Login</Nav.Link>
                    <Nav.Link href="/sign-up" >SignUp</Nav.Link>
                    <Nav.Link href="/services" >Services</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;