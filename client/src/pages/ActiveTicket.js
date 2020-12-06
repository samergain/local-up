import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
// import clientUser from "../data/users.json";
import clientTicket from "../data/tickets.json";

function ActiveTicket() {

    const [tickets, setClientTickets] = useState({
        id: "",
        title: "",
        type: "",
        description: "",
        projects: [],
      });
    
console.log(tickets);


// use getclients, then filter that from localstorage and get tickets
// result of filter is new array
// let filteredClients = res.data.filter((user) => (user.roles[0] === "client"));
// setClients(filteredClients);
    
      // Load all books and store them with setBooks
      useEffect(() => {
        loadTickets();
      }, []);
    
      // Loads all books and sets them to books
      function loadTickets() {
        console.log("API call to get all Tickets");
        console.log(clientTicket);
    
        const currTicketID = "tkt11"; // Match with username from localstorage
        let matchedTicket = clientTicket.filter(
          (currTicket) => currTicket.id === currTicketID
        );

        console.log(matchedTicket);
        setClientTickets(matchedTicket);
      }

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
                  <strong>Type:</strong> {tickets.type}
                  <br />
                  <strong>Description:</strong> {tickets.description}
                  {tickets.email}
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
    )

}

export default ActiveTicket;