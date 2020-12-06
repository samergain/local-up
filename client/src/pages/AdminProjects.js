import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
import { ClientCard, ClientCardBody } from "../components/AdminPortal/ClientsCard/ClientsCard";
import TicketList from "../components/AdminPortal/TicketList/TicketList";
import ProjectButton from "../components/AdminPortal/ProjectButton/ProjectButton";
import ProjectForm from "../components/AdminPortal/ProjectForm/ProjectForm";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";
import AuthService from "../services/auth-service";
import API from "../utils/API";


function AdminProjects() {

    let currentUser = AuthService.getCurrentUser();
    currentUser = "Meena Ambalam";
    console.log("currentUser: ", currentUser);

    const [projects, setProjects] = useState({});

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        console.log("PlaceHolder for API call to get all Clients");
    //     API.getProjects()
    //         .then(res => {
    //             // console.log("API CALL Returned - res.data: ", res.data);
    //             let filteredClients = res.data.filter((user) => (user.roles[0].name === "client"));
    //             // console.log("clients filtered filterClientes: ", filteredClients);
    //             setProjects(filteredClients);
    //         })
    //         .catch(err => console.log(err));
    }

   

    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="show-grid no-gutter">
                    <Col xs={2} className="navsidebar">
                        <NavSideBar />
                    </Col>

                    {/* {!projects.length ? (
                        <h1 className="text-center">No Projects to Display</h1>
                    ) : (
                            <Col xs={3} lg={3}>
                                <div className="card text-center">
                                    <div className="card-header text-center">
                                        <h2>List of Clients</h2>
                                    </div>
                                    <ClientCard
                                    >
                                        <div className="card-body">
                                            {clients.map(client => {
                                                return (<ClientCardBody
                                                    id={client._id}
                                                    key={client._id}
                                                    name={client.name}
                                                    company={client.company}
                                                    email={client.email}
                                                    contact={client.contact}
                                                    tickets={client.clientTickets}
                                                    client={client}
                                                    clickFunction={displayClientDtl}
                                                />
                                                );
                                            })}
                                        </div>
                                    </ClientCard>
                                </div>
                            </Col>
                        )} */}
                </Row>
            </Container>
        </div >
    )
}

export default AdminProjects;