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
      thisUserTickets = await allTickets.data.filter(
        (x) => x._id === currUserTickets.id
      );
      // console.log("this is the filtered user tickets", thisUserTickets);
      setClientTickets(thisUserTickets[0].clientTickets);
      // console.log("This is our current state", tickets);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      {/* <Container fluid> */}
        <Row>
          <Col xs={2}>
            <NavSideBar />
          </Col>
          {!tickets.length ? (
            <h1 className="text-center">You have no tickets to display</h1>
          ) : (
            <Col xs={8} lg={6}>
              {tickets.map((ticketData) => {
                return (
                  <div className="card">
                    <div className="card-header mr-auto">
                      <h2>{ticketData.title }</h2>
                    </div>
                    <p className="pad-card-info">
                    <strong>ID: </strong> {ticketData._id}
                    <br />
                      <strong>Description: </strong>  {ticketData.description} <br />
                    </p>
                  </div>
                );
              })}
            </Col>
          )}
        </Row>
      {/* </Container> */}
    </div>
  );
}

export default ActiveTicket;
