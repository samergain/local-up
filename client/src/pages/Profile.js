import React, { useState, useEffect } from "react";
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";
import { Col, Container, Row } from "react-bootstrap";
import clientUser from "../data/clients.json";

function Profile() {

  const [clientProfile, setClientProfile] = useState({
    id: "1",
    name: "",
    company: "company",
    email: "a@a.com",
    contact: "Sam",
    tickets: [],
  });

    const [clients, setClients] = useState([]);

  useEffect(() => {
      loadClients()
  }, [])

   function loadClients() {
      console.log("API call to get all Clients");
      console.log(clientUser);
      setClients(clientUser);
      // API.getAllClients()
      // .then(res => {
      //     setClients(res.data);
      // })
      // .catch(err => console.log(err));
  }



  function displayClientDtl(event, client) {

    setClientProfile({
      id: client.id,
      name: client.name,
      company: client.company,
      email: client.email,
      contact: client.contact,
      tickets: client.tickets,
    });
  }

  // function getCurrentUser(id){
  //   // let getUser = clients.filter(currUser => if (currUser.username ==id) return currUser);
  //   //family.filter(person => person.age > 18);
   
  //   //set that to clientProfile
  // }


  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={2}>
            <NavSideBar/>
          </Col>
          <Col xs={6}>
            {clientUser[0].name}
          {clientUser.id !== "" ? (
              <div className="card mt-5">
                <div className="card-header">
                  <h2 className="text-center">{clientUser[0].name}</h2>
                  <ul class="list-group">
                  <li class="list-group-item text-center"> <strong className="text-left">Company: </strong>
                  {clientProfile.company}</li>
                  <li class="list-group-item text-center"><strong  className="text-left">Email: </strong> {clientUser.email}</li>
                  <li class="list-group-item text-center"><strong className="text-left" >Contacts: </strong>
                  {clientUser.contacts}</li>
                </ul>
                 {/*
                </div>
               
               
                <div className="justify-content-center">
                  <p className=" pl-3 pt-2 ">
                  <strong className="text-left">Company:</strong>
                  {clientProfile.company}
                  <br />
                  <strong  className="text-left">Email:</strong> {clientProfile.email}
                  <br />
                  <strong className="text-left" >Contacts:</strong>
                  {clientProfile.contacts}
                </p></div>
                
                <div className="card-body">
                   <ProjectButton 
                                        tktId={ticketInfo.id}
                                        tktType={ticketInfo.type}
                                        tktDesc={ticketInfo.description}
                                        clickFunction={createProjectForm}
                                        /> */}
                  <button className="btn btn-primary">Create Project</button>
                </div>
              </div>
            ) : (
              <></>
            )}
          </Col>
          <Col xs={4} lg={3}>
            {/* {(project) ?
                            (
                                <div className="card">
                                    <div className="card-header mr-auto">
                                        <h2>{ticketInfo.title}</h2>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <Input 
                                            onChange={handleInputChange}
                                            name="title"
                                            placeholder="Title (required)"
                                            value={projectForm.title}
                                            />
                                            <Input
                                            onChange={handleInputChange}
                                            name="description"
                                            placeholder="Description (required)"
                                            value={projectForm.description}
                                            />
                                            <Input
                                            onChange={handleInputChange}
                                            name="githubRepo"
                                            placeholder="GitHubRepo (required)"
                                            value={projectForm.githubRepo}
                                            />
                                            <Input
                                            onChange={handleInputChange}
                                            name="createdBy"
                                            placeholder="Created By (required)"
                                            value={projectForm.createdBy}
                                            />
                                            <Input
                                            onChange={handleInputChange}
                                            name="status"
                                            placeholder="Status"
                                </div>
                            </div>):
                     (<></>)
                     } */}

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
