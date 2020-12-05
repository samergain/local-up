import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";

function CreateTicket() {
  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavSideBar />
          </Col>
          <Col xs={10}>
          <div className="card">
            <Form>
              <div className="card-header">                                       
              <h3>Got a problem? Create a ticket for it.</h3>
              </div>
              <div className="card-body">
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
              </div>
            </Form>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateTicket;
