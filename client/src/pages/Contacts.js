import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import clientUser from "../data/users.json";
import clientTicket from "../data/tickets.json";

function Contact() {
  // if ticket.json id === users.json tickets[], then
  // display users.json name, email, and contact


  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavSideBar />
          </Col>
          {
            <Col xs={10}>
              <h3>For questions or concerns, please contact :</h3>
              <div className="card-deck">
                <div className="card-header mr-auto">
                  <h2>{clientProfile.company}</h2>
                </div>
                <p>
                  <strong>Contact:</strong> {clientProfile.name}
                  <br />
                  <strong>Email:</strong>
                  {clientProfile.email}
                  <br />
                  <strong>Phone:</strong>
                  {clientProfile.contact}
                  <br />
                </p>
                <hr />
              </div>
            </Col>
          }
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
