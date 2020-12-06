import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
import clientUser from "../data/users.json";

function Profile() {

  const [clientProfile, setClientProfile] = useState({
    id: "",
    name: "",
    company: "",
    email: "",
    contact: "",
    tickets: [],
  });

// clientProfile not getting data, that's why nothing is showing up.
console.log(clientProfile);


  // const [clients, setClients] = useState([]);

  useEffect(() => {
    loadClientProfile();
  }, []);

  function loadClientProfile() {
    console.log("API call to get all Clients");
    console.log(clientUser);

    //1. get the logged in user from LocalStorage
    let currUserID = "client1";
    //2. Get the json file, filter only the user that is logged in, id or role
    // and save into new var
    let matchedUser = clientUser.filter(
      (currUser) => currUser.id === currUserID
    );
    console.log(currUserID);
    console.log(matchedUser);
    
    //3. setclientProfile(....)
    setClientProfile({
      id: matchedUser.id,
      name: matchedUser.name,
      company: matchedUser.company,
      email: matchedUser.email,
      contact: matchedUser.contact,
      tickets: matchedUser.tickets,
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
            {clientProfile.id !== "" ? (
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
            ) : (
              <></>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
