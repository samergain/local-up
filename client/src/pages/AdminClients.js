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
import LightSpeed from "react-reveal/LightSpeed";


function AdminClients() {

    // Get current username for use later 
    let currentUser = AuthService.getCurrentUser();
    
    // Client state definition
    const [clients, setClients] = useState({
        _id: "",
        username: "",
        name: "",
        company: "",
        email: "",
        contact: "",
        clientTickets: []
    });

    // Loading Clients at the point of Admin page load
    useEffect(() => {
        loadClients()
    }, [])


    // Get all Users and filter only the "client" user type
    function loadClients() {
        API.getAllUsers()
            .then(res => {
                // console.log("API CALL Returned - res.data: ", res.data);
                let filteredClients = res.data.filter((user) => (user.roles[0].name === "client"));
                // console.log("clients filtered filterClientes: ", filteredClients);
                setClients(filteredClients);
            })
            .catch(err => console.log(err));
    }

    // Client Profile State definition
    const [clientProfile, setClientProfile] = useState({
        id: "",
        name: "",
        company: "",
        email: "",
        contact: "",
        clientTickets: []
    });

    // Display Client when each client is clicked
    function displayClientDtl(event, client) {
        
        // clear the state of components to hide the that are already displayed
        setTicketInfo({
            id: "",
            title: "",
            type: "",
            description: ""
        });

        setProjectForm({
            clientId: "",
            clientticket: "",
            title: "",
            description: "",
            githubRepo: "",
            createdBy: "",
            status: "",
            ticket: []
        });

        // set the state of the client profile component
        setClientProfile({
            id: client._id,
            name: client.name,
            company: client.company,
            email: client.email,
            contact: client.contact,
            tickets: client.clientTickets
        });

    }

    // Set the state for TicketInfo
    const [ticketInfo, setTicketInfo] = useState({
        id: "",
        title: "",
        description: "",
        status: "",
        client: "",
        clientId: ""
    });

    // Get Ticket Info when the ticket is clicked and set the ticket state
    function getTicketInfo(event, ticket) {      

        //API Call to get the ticket details for the clicked ticket
        API.getTicket(ticket.id)
            .then(res => {
                // console.log("matched ticket: ", res.data);
                setTicketInfo({
                    id: ticket.id,
                    title: res.data.title,
                    status: res.data.status,
                    client: ticket.client,
                    clientId: ticket.clientId,
                    description: res.data.description
                });
            })
            .catch(err => console.log("error in getTicketInfo: ", err))
    }


    // state definition for creating new form
    const [projectForm, setProjectForm] = useState({

        clientId: "",
        clientticket: "",
        title: "",
        description: "",
        githubRepo: "",
        createdBy: "",
        status: "",
        ticket: []
    })

    // functionality when new project needs to be created
    function createProjectForm(event, ticket) {
        console.log("create Project Form: ", ticket);

        // clear states of other components that have to be hidden if they happened to be displayed 
        setClientProfile({
            id: "",
            name: "",
            company: "",
            email: "",
            contact: "",
            clientTickets: []
        });

        setTicketInfo({
            id: "",
            title: "",
            description: "",
            status: "",
            client: "",
            clientId: ""
        });

        // Set the state of the Project Form with the new state
        setProjectForm({
            clientId: ticket.clientId,
            clientCompany: ticket.clientCompany,
            ticketDesc: ticket.ticketDescription,
            ticketId: ticket.ticketId,
            ticketTitle: ticket.ticketTitle,
            ticketStatus: ticket.ticketStatus,
            title: "",
            description: "",
            githubRepo: "",
            createdBy: "",
            status: "",
            ticket: [ticket.ticketId]
        });
    };

    // handles the Project Form Input change event
    function handleInputChange(event) {
        const { name, value } = event.target;
        setProjectForm({ ...projectForm, [name]: value })
    };

    // handles the Project Form submit event - Adds the Project and updates the ticket status to "in-progress"
    async function handleFormSubmit(event) {
        console.log("printing from Adminclients handleFormSubmit", event);
        event.preventDefault();

        try {
            if (projectForm.title && projectForm.description) {
                // console.log("Saving Form: ", projectForm);
                const response = await API.saveProject(projectForm)
                // console.log("Project saved response data : ", response.data);
                if (response.status === 200) {
                    alert("Project Added Successfully: ");
                    const responseTicket = await API.updateTicket(response.data.ticket[0], {"status":"in-progress"});
                    if (responseTicket.status === 200){
                        console.log("ticket status updated: ", responseTicket);
                        setProjectForm(
                            {clientId: "",
                            clientticket: "",
                            title: "",
                            description: "",
                            githubRepo: "",
                            createdBy: "",
                            status: "",
                            ticket: []
                            });
                    }
                }
            }
        } catch (error) {
            console.log("Error while saving Project or updating ticket status: ", error);
        }
    };


    // Conditional DOM rendering 
    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="show-grid no-gutter">
                    <Col xs={2} className="navsidebar">
                        <NavSideBar />
                    </Col>
                    
                    {/* Rendering of all Client users at the time of Load after the Admin Logs in */}
                    {!clients.length ? (
                        <h1 className="text-center">No Clients to Display</h1>
                    ) : (
                            <Col xs={3} lg={3}>
                                <LightSpeed left>
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
                                </LightSpeed>
                            </Col>
                        )}

                    {/* Rendering of Profile of the particular client when clicked */}
                    {(clientProfile.id !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <LightSpeed left>
                                <div className="card">
                                    <div className="card-header text-center">
                                        <h2>{clientProfile.company}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Contact:</strong> {clientProfile.name}<br />
                                        <strong>Email:</strong>{clientProfile.email}<br />
                                        <strong>Phone:</strong>{clientProfile.contact}<br />
                                    </p>
                                    {(clientProfile.tickets.length) ?
                                        (
                                            <div className="card-body text-center">
                                                <h6>Tickets:</h6>

                                                {clientProfile.tickets.map(ticket =>
                                                    <TicketList
                                                        id={ticket}
                                                        ticket={ticket}
                                                        key={ticket}
                                                        clientId={clientProfile.id}
                                                        client={clientProfile.company}
                                                        clickFunction={getTicketInfo}
                                                    />
                                                )
                                                }

                                            </div>
                                        ) :
                                        (
                                            <div className="card-body">
                                                <h6>No Tickets</h6>
                                            </div>
                                        )
                                    }
                                </div>
                                </LightSpeed>
                            </Col>
                        ) : (<></>)
                    }

                    {/* Rendering of Ticket Details */}
                    {(ticketInfo.id !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <LightSpeed left>
                                <div className="card">
                                    <div className="card-header mr-auto">
                                        <h2>{ticketInfo.title}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Id:</strong>{ticketInfo.id} <br />
                                        <strong>Description:</strong>{ticketInfo.description} <br />
                                        <strong>Status:</strong> {ticketInfo.status || "new"} <br />
                                    </p>
                                    <div className="card-body text-center">
                                        <ProjectButton
                                            ticketId={ticketInfo.id}
                                            ticketTitle={ticketInfo.title}
                                            ticketStatus={ticketInfo.status}
                                            ticketDescription={ticketInfo.description}
                                            clientCompany={ticketInfo.client}
                                            clientId={ticketInfo.clientId}
                                            clickFunction={createProjectForm}
                                        />
                                    </div>
                                </div>
                                </LightSpeed>
                            </Col>
                        ) : (<></>)
                    }

                    {/* Rendering of Project Form */}
                    {(projectForm.clientticket !== "") ?
                        (
                            <Col xs={6} lg={6}>
                                <LightSpeed clear>
                                <div className="card">
                                    <div className="card-header">
                                        <h2>{projectForm.clientCompany}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Ticket:</strong>{projectForm.ticketTitle}<br />
                                        <strong>Ticket Description:</strong>{projectForm.ticketDesc}<br />
                                        <strong>Ticket Status:</strong>{projectForm.ticketStatus || "new"}<br />
                                    </p>
                                    <div className="card-body">
                                        <ProjectForm
                                            clientId={projectForm.clientId}
                                            ticketId={projectForm.ticketId}
                                            ticketTitle={projectForm.ticketTitle}
                                            title={projectForm.title}
                                            description={projectForm.description}
                                            githubRepo={projectForm.githubRepo}
                                            createdBy={projectForm.createdBy}
                                            status={projectForm.status}
                                            currentUser={currentUser.username}
                                            handleInputChange={handleInputChange}
                                            handleFormSubmit={handleFormSubmit}
                                        />
                                    </div>
                                </div>
                                </LightSpeed>
                            </Col>
                        ) : (<></>)
                    }
                </Row>
            </Container>
        </div >
    )
}

export default AdminClients;