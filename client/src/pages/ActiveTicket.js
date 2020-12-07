import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
// import clientUser from "../data/users.json";
// import clientTicket from "../data/tickets.json";
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
      console.log("this is currUserTickets.id", currUserTickets.id);
      // console.log(clientTicket);

      const allTickets = await API.getClients();
      console.log("These are all the tickets", allTickets);
      thisUserTickets = await allTickets.data.filter((x) => x._id === currUserTickets.id);

      // const thisClientTicket = thisUserTickets[0].clientTickets;
      

      console.log("this is the filtered user", thisUserTickets);
      setClientTickets(thisUserTickets[0].clientTickets);

      // tickets.map((ticketdata) => {

      // })

      console.log("This is our current state", tickets);

      // console.log(matchedTicket);
      // setClientTickets(matchedTicket);
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
          <Col xs={3} lg={3}>
            {tickets.id !== "" ? (
              <div className="card-deck">
                <div className="card-header mr-auto">
                  <h2>{tickets.title}</h2>
                </div>
                <p>
                  <strong>Description:</strong> {tickets.description}
                  <br />
                </p>
                <hr />
              </div>
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ActiveTicket;
