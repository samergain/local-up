import React, {useState} from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import API from "../utils/API";
import AuthService from "../services/auth-service";

function CreateTicket() {
  const currentUser = AuthService.getCurrentUser();
  let ticketId = "";
  const [form, setForm] = useState({});
  const handleInputChange = function(e) {
      const {name, value} = e.target;
      console.log("here is the value of: ", value)
      setForm({...form,[name]:value});
  }
  const handleSubmit = function(e) {
      e.preventDefault();
      
      if (form.title && form.description){
      API.saveTicket({title:form.title, description:form.description})
         .then(response => {
        ticketId = JSON.stringify(response._id);
        API.addTicketToClient(currentUser.id,ticketId).then(response => console.log(response))
      })
      // .then(
      //   API.addTicketToClient(currentUser.id,ticketId)
      // )
      .catch(err=> console.log(err))
    }
      
  }

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
                <Form.Control onChange={handleInputChange} name="title" type="text" placeholder="Ticket Title" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>
                  What's the issue you are having? How would you like it fixed?
                </Form.Label>
                <Form.Control as="textarea" onChange={handleInputChange} name="description" placeholder="Please describe in detail, what your issues are." rows={5} />
              </Form.Group>
              <Button onClick={handleSubmit} variant="primary" type="submit">
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
