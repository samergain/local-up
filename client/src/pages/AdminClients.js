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


function AdminClients() {

    let currentUser = AuthService.getCurrentUser();
    currentUser = "Meena Ambalam";
    console.log("currentUser: ", currentUser);

    const [clients, setClients] = useState({
        _id: "",
        username: "",
        name: "",
        company: "",
        email: "",
        contact: "",
        clientTickets: []
    });

    useEffect(() => {
        loadClients()
    }, [])
    // Get all Users and filter only the "client" user type
    function loadClients() {
        console.log("PlaceHolder for API call to get all Clients");
        API.getAllUsers()
            .then(res => {
                console.log("API CALL Returned - res.data: ", res.data);
                let filteredClients = res.data.filter((user) => (user.roles[0].name === "client"));
                // console.log("clients filtered filterClientes: ", filteredClients);
                setClients(filteredClients);
            })
            .catch(err => console.log(err));
    }

    const [clientProfile, setClientProfile] = useState({
        id: "",
        name: "",
        company: "",
        email: "",
        contact: "",
        clientTickets: []
    });

    function displayClientDtl(event, client) {

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

        setClientProfile({
            id: client._id,
            name: client.name,
            company: client.company,
            email: client.email,
            contact: client.contact,
            tickets: client.clientTickets
        });

    }

    const [ticketInfo, setTicketInfo] = useState({
        id: "",
        title: "",
        description: "",
        status: "",
        client: "",
        clientId: ""
    });

    function getTicketInfo(event, ticket) {
        // console.log("client clicked from getTicketInfo: ", ticket);

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


    // const [project, setProject] = useState(false);
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


    function createProjectForm(event, ticket) {
        console.log("create Project Form: ", ticket);
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

        setProjectForm({
            clientId: ticket.clientId,
            clientCompany: ticket.clientCompany,
            ticketDesc: ticket.ticketDescription,
            ticketId: ticket.ticketId,
            ticketTitle:ticket.ticketTitle,
            ticketStatus: ticket.ticketStatus,
            title: "",
            description: "",
            githubRepo: "",
            createdBy: "",
            status: "",
            ticket: [ticket.ticketId]
        });
    };

    function handleInputChange(event) {
        // console.log("printing from AdminClients handleInputChange: ", event);
        const { name, value } = event.target;
        setProjectForm({ ...projectForm, [name]: value })
    };

    function handleFormSubmit(event) {
        console.log("printing from Adminclients handleFormSubmit", event);
        event.preventDefault();

        if (projectForm.title && projectForm.description) {
            console.log("Saving Form: ", projectForm);
            API.saveProjects(projectForm)
            .then(res => {
                console.log(res.data);
                alert("Project Added Successfully: ");
            })
            .catch(err=>console.log("error while adding project: ", err))
        }
    };



    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="show-grid no-gutter">
                    <Col xs={2} className="navsidebar">
                        <NavSideBar />
                    </Col>

                    {!clients.length ? (
                        <h1 className="text-center">No Clients to Display</h1>
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
                        )}

                    {(clientProfile.id !== "") ?
                        (
                            <Col xs={3} lg={3}>
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
                            </Col>
                        ) : (<></>)
                    }

                    {(ticketInfo.id !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <div className="card">
                                    <div className="card-header mr-auto">
                                        <h2>{ticketInfo.title}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Id:</strong>{ticketInfo.id} <br />
                                        <strong>Description:</strong>{ticketInfo.description} <br />
                                        <strong>Status:</strong> {ticketInfo.status} <br />
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
                            </Col>
                        ) : (<></>)
                    }
                    {(projectForm.clientticket !== "") ?
                        (
                            <Col xs={6} lg={6}>
                                <div className="card">
                                    <div className="card-header">
                                        <h2>{projectForm.clientCompany}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Ticket:</strong>{projectForm.ticketTitle}<br />
                                        <strong>Ticket Description:</strong>{projectForm.ticketDesc}<br/>
                                        <strong>Ticket Status:</strong>{projectForm.ticketStatus}<br/>
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
                                            currentUser={currentUser}
                                            handleInputChange={handleInputChange}
                                            handleFormSubmit={handleFormSubmit}
                                        />
                                    </div>
                                </div>
                            </Col>
                        ) : (<></>)
                    }
                </Row>
            </Container>
        </div >
    )
}

export default AdminClients;