import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import {Container, Row, Col} from "react-bootstrap";


function Services() {
    return (
        <div>
            <NavBar />
            <Container fluid>
            <Row>
            <Col xs={12}>
                <h3>Services</h3>

                <div className="form-group">
                    <label>LoremIpsum</label>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Services;