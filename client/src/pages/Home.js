import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import smallbusiness from "../images/localbusiness3.jpg";

function Home() {
    return (
        <div>
            <NavBar />
            <Container fluid>

                <div className="blue-container-homepage">
                    <Row className="justify-content-md-center">

                        

                        <Col xs={7} >
                            <div className="card homepage-card">
                                <div className="homepage">
                                    <label><h1>Local UP</h1></label>
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={3} >
                            <div className="img-card-homepage ">
                                <div className="text-center">
                                    <img src={smallbusiness} alt="Website Builder" className="mainpage-image" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>


            </Container>
        </div>
    );
}

export default Home;