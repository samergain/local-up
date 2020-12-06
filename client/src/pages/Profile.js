import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
import clientUser from "../data/users.json";
import AuthService from "../services/auth-service";

function Profile() {

  const [clientProfile, setClientProfile] = useState({
    id: "",
    company: "",
    name: "",
    description: "",
    email: "",
    contact: ""
  });

// ==== clientProfile not getting data, that's why nothing is showing up. =====
console.log("Line 20 and 39 should match");
console.log(clientProfile);


  useEffect(() => {
    loadClientProfile();
  }, []);

  function loadClientProfile() {
    console.log("API call to get all Clients");
    console.log(clientUser);

    //1. get the logged in user from LocalStorage
    const currUserID = AuthService.getCurrentUser; //Get and match from localstorage
    //2. Get the json file, filter only the user that is logged in, id or role
    // and save into new var
  

    console.log(currUserID);

    //3. setclientProfile(....)
    setClientProfile(currUserID);

        // API.getAllClients()
        // .then(res => {
        //     setClients(res.data);
        // })
        // .catch(err => console.log(err));
        
  }

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavSideBar />
          </Col>
          {clientProfile.id !== "" ? (
          <Col xs={3} lg={3}>
              <div className="card-deck">
                <div className="card-header mr-auto">
                  <h2>{clientProfile.company}</h2>
                </div>
                <p>
                  <strong>Name:</strong> {clientProfile.name}
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
            ) : (
              <> </>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
