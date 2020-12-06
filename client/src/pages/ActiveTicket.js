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
    
    //   const [thisclientTicket, setthisclientTicket] = useState([]);
    
      // Load all books and store them with setBooks
      useEffect(() => {
        loadTickets();
      }, []);
    
      // Loads all books and sets them to books
      function loadTickets() {
        console.log("API call to get all Tickets");
        console.log(clientTicket);
    
        let currTicketID = "tkt11";
        let matchedTicket = clientTicket.filter(
          (currTicket) => currTicket.id === currTicketID
        );
        console.log(currTicketID);
        console.log(matchedTicket);
        setClientTickets({
          id: matchedTicket.id,
          title: matchedTicket.title,
          type: matchedTicket.type,
          description: matchedTicket.description,
          projects: matchedTicket.projects
        });
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