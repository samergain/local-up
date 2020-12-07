import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
import AuthService from "../services/auth-service";
import API from "../utils/API";

function ActiveTicket() {
  const [tickets, setClientTickets] = useState({});

  useEffect(() => {
    loadTickets();
  }, {});

  // Loads all books and sets them to books
  const loadTickets = async function () {
    try {
      const currUserTickets = AuthService.getCurrentUser();
      let thisUserTickets = [];
      // console.log("this is currUserTickets.id", currUserTickets.id);

      const allTickets = await API.getClients();
      // console.log("These are all the tickets", allTickets);
      thisUserTickets = await allTickets.data.filter((x) => x._id === currUserTickets.id);
      // console.log("this is the filtered user tickets", thisUserTickets);
      setClientTickets(thisUserTickets[0].clientTickets);
      // console.log("This is our current state", tickets);
    }catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavSideBar />
          </Col>
          {!tickets.length ? (
            <h1 className="text-center">You have no tickets to display</h1>
          ) : (
            <Col xs={3} lg={3}>
                    {tickets.map((ticketData) => {
                      return (
                        <div className="card-deck">
                <div className="card-header mr-auto">
                  ID: {ticketData._id}
                </div>
                <p>Title :{ticketData.title}</p>
                <p><strong>Description:</strong> {ticketData.description}
                  <br />
                </p>
                <hr />
              </div>
                      );
                    })}
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ActiveTicket;
