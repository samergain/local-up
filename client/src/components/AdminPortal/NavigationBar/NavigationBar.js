import React from "react";
import "./NavigationBar.css";
import { Nav, Navbar } from 'react-bootstrap';



// Navigation Bar component - using react bootstrap navbar
function NavigationBar() {

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/"><h3>LocalUP (Admin Portal)</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/clients" >Clients</Nav.Link>
                    <Nav.Link href="/clientprojects" >Projects</Nav.Link>
                    <Nav.Link href="/signout" className="ml-auto">SignOut</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
