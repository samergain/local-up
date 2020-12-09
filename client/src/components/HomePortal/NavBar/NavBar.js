import React from "react";
import "./NavBar.css";
import { Nav, Navbar } from 'react-bootstrap';
import Logo from "../../../images/localuplogo1.png";



// Navigation Bar component - using react bootstrap navbar
function NavBar() {

    return (
        <Navbar  className="navbar-bg" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/"><img src={Logo} alt="LocalUP" className="localuplogo"/></Navbar.Brand>


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


