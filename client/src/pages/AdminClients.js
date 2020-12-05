import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
import { ClientCard, ClientCardBody } from "../components/AdminPortal/ClientsCard/ClientsCard";
import TicketList from "../components/AdminPortal/TicketList/TicketList";
import ProjectButton from "../components/AdminPortal/ProjectButton/ProjectButton";
import ProjectForm from "../components/AdminPortal/ProjectForm/ProjectForm";
import users from "../data/users.json";
import tickets from "../data/tickets.json";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";


function AdminClients() {

    const [clients, setClients] = useState({
        id: "",
        username: "",
        name: "",
        company: "",
        email: "",
        contact: "",
        tickets: []
    });

    useEffect(() => {
        loadClients()
    }, [])

    function loadClients() {
        console.log("PlaceHolder for API call to get all Clients");

        let filteredClients = users.filter((user) => (user.roles === "ROLE_CLIENT"));
        setClients(filteredClients);

        // API.getAllClients()
        // .then(res => {
        //     setClients(res.data);
        // })
        // .catch(err => console.log(err));
    }

    const [clientProfile, setClientProfile] = useState({
        id: "",
        name: "",
        company: "",
        email: "",
        contact: "",
        tickets: []
    });

    function displayClientDtl(event, client) {

        setTicketInfo({
            id: "",
            title: "",
            type: "",
            description: ""
        });

        setProjectForm({
            client: "",
            clientticket: "",
            title: "",
            description: "",
            githubRepo: "",
            createdBy: "",
            status: "",
            assignedUsers: [],
            tasks: [],
            ticket: []
        });

        setClientProfile({
            id: client.id,
            name: client.name,
            company: client.company,
            email: client.email,
            contact: client.contact,
            tickets: client.tickets
        });

    }

    const [ticketInfo, setTicketInfo] = useState({
        id: "",
        title: "",
        type: "",
        description: "",
        client: "",
        projects: []
    });

    function getTicketInfo(event, ticket) {
        // console.log("client clicked from getTicketInfo: ", ticket);
        tickets.map((ticketdata) => {
            if (ticketdata.id === ticket.ticket) {
                setTicketInfo({
                    id: ticketdata.id,
                    title: ticketdata.title,
                    type: ticketdata.type,
                    client: ticket.client,
                    description: ticketdata.description
                });
            }
        })
    }

    // const [project, setProject] = useState(false);
    const [projectForm, setProjectForm] = useState({
        client: "",
        clientticket: "",
        title: "",
        description: "",
        githubRepo: "",
        createdBy: "",
        status: "",
        assignedUsers: [],
        tasks: [],
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
            tickets: ""
        });
        setTicketInfo({
            id: "",
            title: "",
            type: "",
            client: "",
            description: ""
        });
        setProjectForm({
            client: ticket.client,
            ticketDesc: ticket.description,
            ticketId: ticket.id,
            title: "",
            description: "",
            githubRepo: "",
            createdBy: "",
            status: "",
            assignedUsers: [],
            tasks: [],
            ticket: []
        });
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setProjectForm({ ...projectForm, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        if (projectForm.title && projectForm.assignedUsers[0]) {
            console.log("Saving Form: ", projectForm);
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
                                    <ClientCard
                                        className="card-header"
                                        cardHeader="List of Clients"
                                        cardEntry="/clients"
                                    >
                                        <div className="card-body">
                                            {clients.map(client => {
                                                return (<ClientCardBody
                                                    id={client.username}
                                                    key={client.username}
                                                    name={client.name}
                                                    company={client.company}
                                                    email={client.email}
                                                    contact={client.contact}
                                                    tickets={client.tickets}
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
                                        <strong>Id:</strong>{ticketInfo.id}<br />
                                        <strong>Type:</strong> {ticketInfo.type}<br />
                                        <strong>Description:</strong>{ticketInfo.description}
                                    </p>
                                    <div className="card-body text-center">
                                        <ProjectButton
                                            id={ticketInfo.id}
                                            type={ticketInfo.type}
                                            description={ticketInfo.description}
                                            client={ticketInfo.client}
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
                                        <h2>{projectForm.client}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Ticket:</strong>{projectForm.ticketId}<br />
                                        <strong>Description:</strong>{projectForm.ticketDesc}
                                    </p>
                                    <div className="card-body">
                                        <ProjectForm
                                            title={projectForm.title}
                                            description={projectForm.description}
                                            githubRepo={projectForm.githubRepo}
                                            createdBy={projectForm.createdBy}
                                            status={projectForm.status}
                                            changeFunction={handleInputChange}
                                            submitFunction={handleFormSubmit}
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