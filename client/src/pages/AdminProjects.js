import React from "react";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";
import {Container, Row, Col} from "react-bootstrap";

function AdminProjects() {

    return (
        <div>
        <NavigationBar/>
        <Container fluid>
                <Row>
                    <Col xs={2}>
                        <NavSideBar />
                    </Col>
                    <Col xs={10}>
                        <p>Admin Projects</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminProjects;