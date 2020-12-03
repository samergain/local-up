import React, { useEffect } from "react";
import NavBar from "../NavBar";
import { Nav, Col, Container, Row } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Nav className="col-md-12 d-sm-block bg-default sidebar justify-content-left">
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
          </Col>
          <Col xs={10}>
            <p>Hello User</p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
