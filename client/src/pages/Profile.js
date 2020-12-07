import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
import AuthService from "../services/auth-service";
import API from "../utils/API";

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    loadClientProfile();
  }, {});

  const loadClientProfile = async function () {
    try {
      const currUser = AuthService.getCurrentUser();
      let thisUser = [];
      console.log("this is currUser.id", currUser.id);
      console.log(currUser);
      const allClients = await API.getClients();
      console.log("These are all the clients", allClients.data);
      thisUser = await allClients.data.filter((x) => x._id === currUser.id);

      console.log("this is the filtered user", thisUser);
      setUser(thisUser[0]);

      console.log("This is our current state", user.company);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={3}>
            <NavSideBar />
          </Col>
          {user.id !== "" ? (
            <Col xs={3} lg={3}>
              <div className="card-deck">
                <div className="card-header mr-auto">
                  <h2>Company: {user.company}</h2>
                </div>
                <p>
                  <strong>NAme: </strong> {user.name}
                  <br />
                  <strong>Email: </strong>
                  {user.email}
                  <br />
                  <strong>Phone: </strong>
                  {user.contact}
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
