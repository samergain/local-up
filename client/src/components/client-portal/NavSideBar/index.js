import React from "react";
import { Nav } from "react-bootstrap";

// Navigation Bar component - using react bootstrap navbar
function NavSideBar() {
  return (
    <div>
      <Nav className="col-md-12 d-none d-md-block bg-default sidebar justify-content-left">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/create-tickets">Create a Ticket</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/active-tickets">Active Tickets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavSideBar;
