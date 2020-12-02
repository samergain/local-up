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
        <Nav className="col-md-12 d-none d-md-block bg-dark sidebar">
            <div className="sidebar-sticky"></div>
        <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        </Nav>
        </div>
    );
}

export default NavBar;
