import React from "react";
import { Nav } from "react-bootstrap";

// Navigation Bar component - using react bootstrap navbar
function NavSideBar() {
  return (
    <div>
      <Nav className="col-md-12 d-none d-md-block sidebar justify-content-left">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="/tasks">tasks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavSideBar;
