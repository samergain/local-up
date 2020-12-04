import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
import { ClientCard, ClientCardBody } from "../components/AdminPortal/ClientsCard/ClientsCard";
import TicketList from "../components/AdminPortal/TicketList/TicketList";
import ProjectButton from "../components/AdminPortal/ProjectButton/ProjectButton";
// import {Input, TextArea, FormBtn} from "../components/AdminPortal/Form";
import clients from "../data/clients.json";
import tickets from "../data/tickets.json";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";


function AdminClients() {

    // const [clients, setClients] = useState([]);

    // useEffect(() => {
    //     loadClients()
    // }, [])

    console.log("Clients Data: ", clients);

    // function loadClients() {
    //     console.log("API call to get all Clients");
    //     // API.getAllClients()
    //     // .then(res => {
    //     //     setClients(res.data);
    //     // })
    //     // .catch(err => console.log(err));
    // }

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
        projects: []
    });

    function getTicketInfo(event, ticket) {
        console.log("event clicked: ", event);
        console.log("client clicked: ", ticket);
        tickets.map((ticketdata) => {
            if (ticketdata.id === ticket) {
                setTicketInfo({
                    id: ticketdata.id,
                    title: ticketdata.title,
                    type: ticketdata.type,
                    description: ticketdata.description
                });
            }
        })
    }

    // [project, setProject] = useState(false);


    // function createProjectForm(event, ticket){
    //     console.log("create Project Form: ", ticket);
    //     setProject(true);
    // };

    // const [projectForm, setProjectForm] = useState({
    //     title: "",
    //     description: "",
    //     githubRepo: "",
    //     createdBy: "",
    //     status : "",
    //     assignedUsers: [],
    //     tasks: [],
    //     ticket: []
    // })
    // function handleInputChange(event){
    //     const { name, value } = event.target;
    //     setProjectForm({...projectForm, [name]: value})
    // };

    // function handleFormSubmit(event){
    //     event.preventDefault();
    //     if (projectForm.title && assignedUsers[0]) {
    //         console.log("Saving Form: ", projectForm);
    //     }
    // };

    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="show-grid no-gutter">
                    <Col xs={2}>
                        <NavSideBar />
                    </Col>
                    <Col xs={3} lg={3}>
                        {!clients.length ? (
                            <h1 className="text-center">No Clients to Display</h1>
                        ) : (
                                <div className="card-deck text-center">
                                    <ClientCard
                                        className="card-header"
                                        cardHeader="List of Clients"
                                        cardEntry="/clients"
                                    >
                                        <div className="card-body">
                                            {clients.map(client => {
                                                return (<ClientCardBody
                                                    id={client.roles}
                                                    key={client.roles}
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
                            )}
                    </Col>

                    <Col xs={3} lg={3}>

                        {(clientProfile.id !== "") ?
                            (
                                <div className="card-deck">
                                    <div className="card-header mr-auto">
                                        <h2>{clientProfile.company}</h2>
                                    </div>
                                    <p>
                                        <strong>Contact:</strong> {clientProfile.name}<br />
                                        <strong>Email:</strong>{clientProfile.email}<br />
                                        <strong>Phone:</strong>{clientProfile.contact}<br />
                                    </p>
                                    <hr />
                                    {(clientProfile.tickets.length) ?
                                        (
                                            <div className="card-body">
                                                <h6 className="text-center">Tickets:</h6>

                                                {clientProfile.tickets.map(ticket =>
                                                    <TicketList
                                                        id={ticket}
                                                        ticket={ticket}
                                                        key={ticket}
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
                            ) :
                            (<></>)
                        }
                    </Col>
                    <Col xs={3} lg={3}>

                        {(ticketInfo.id !== "") ?
                            (
                                <div className="card-deck">
                                    <div className="card-header mr-auto">
                                        <h2>{ticketInfo.title}</h2>
                                    </div>
                                    <p>
                                        <strong>Id:</strong>{ticketInfo.id}<br />
                                        <strong>Type:</strong> {ticketInfo.type}<br />
                                        <strong>Description:</strong>{ticketInfo.description}
                                    </p>
                                    <div className="card-body">
                                        {/* <ProjectButton 
                                        tktId={ticketInfo.id}
                                        tktType={ticketInfo.type}
                                        tktDesc={ticketInfo.description}
                                        clickFunction={createProjectForm}
                                        /> */}
                                        <button className="btn btn-primary">
                                            Create Project
                                    </button>
                                    </div>
                                </div>
                            ) :
                            (<></>)
                        }
                    </Col>
                    <Col xs={3} lg={3}>

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
        </div >
    )
}

export default AdminClients;