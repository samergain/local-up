import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import {Link} from "react-router-dom";
import { ClientCard, ClientCardBody } from "../components/AdminPortal/ClientsCard/ClientsCard";
import TicketList from "../components/AdminPortal/TicketList/TicketList";
import clients from "../data/clients.json";
import tickets from "../data/tickets.json";


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

    return (
        <div>
            <Container>
                <Row className="show-grid">
                    <Col xs={3} lg={3}>
                        {!clients.length ? (
                            <h1 className="text-center">No Clients to Display</h1>
                        ) : (
                                <div className="card">
                                    <ClientCard
                                        className="card-header"
                                        cardHeader="List of Clients"
                                        cardEntry="/clients"
                                    >
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
                                    </ClientCard>
                                </div>
                            )}
                    </Col>

                    <Col xs={3} lg={3}>

                        {(clientProfile.id !== "") ?
                            (
                                <div className="card">
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
                                                <h6>Tickets:</h6>
                                                
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
                                <div className="card">
                                    <div className="card-header mr-auto">
                                        <h2>{ticketInfo.title}</h2>
                                    </div>
                                    <p>
                                        <strong>Id:</strong>{ticketInfo.id}<br />
                                        <strong>Type:</strong> {ticketInfo.type}<br />
                                        <strong>Description:</strong>{ticketInfo.description}<br />
                                    </p>
                                    <hr />
                                    <div className="card-body">
                                    <button className="btn btn-danger">
                                        Create Project
                                    </button>
                                </div>
                     </div>
                     ):
                     (<></>)
                     }
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default AdminClients;