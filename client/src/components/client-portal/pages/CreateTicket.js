import React from "react";
import NavBar from "../NavBar";
import { Nav, Col, Container, Row, Form, Button } from "react-bootstrap";
function CreateTicket() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
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
          </Col>
          <Col xs={10}>
            <Form>
              <h3>Got a problem? Create a ticket for it.</h3>
              <Form.Group controlId="formTicketTitle">
                <Form.Label>What's the issue? Give it a title.</Form.Label>
                <Form.Control type="ticket" placeholder="Ticket Title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  What's the issue you are having? How would you like it fixed?
                </Form.Label>
                <Form.Control as="textarea" placeholder="Please describe in detail, what your issues are." rows={5} />
              </Form.Group>
              <Button variant="primary" type="submit">
    Submit
  </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateTicket;
