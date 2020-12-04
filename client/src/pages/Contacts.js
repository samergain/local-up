import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from "../components/client-portal/NavBar";
import NavSideBar from "../components/client-portal/NavSideBar";

function Contact() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={2}>
                        <NavSideBar/>
                    </Col>
                    <Col xs={10}>
                        <p>Contact Page</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )

}

export default Contact;