import React from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";

function Profile() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavSideBar/>
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
