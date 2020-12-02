import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {Card, CardBody} from "../components/AdminPortal/Card/Card";
import clients from "../data/clients.json";


function AdminProjects() {

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

    return (
        <div>
            <Container>
                <Row className="show-grid">
                    <Col xs={12} lg={12}>
                        {!clients.length ? (
                            <h1 className="text-center">No Clients to Display</h1>
                        ) : (
                                <div className="card">
                                <Card
                                    className="card-header"
                                    cardHeader="List of Clients"
                                    cardEntry="/clients"
                                >
                                    {clients.map(client => {
                                        return (<CardBody
                                            id={client.roles}
                                            key={client.roles}
                                            name={client.name}
                                            company={client.company}
                                            email={client.email}
                                            contact={client.contact}
                                            tickets={client.tickets}
                                        />
                                        );
                                    })}
                                </Card>
                                </div>
                            )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminProjects;