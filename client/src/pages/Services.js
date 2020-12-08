import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import websiteimage from "../images/website4.jpg";
import seo from "../images/SEO2.jpg";
import onlinemarketing from "../images/online_marketing.jpg";


function Services() {
    return (
        <div>
            <NavBar />
            <Container fluid>

                <div className="servicepage-middle-container">
                    <Row className="justify-content-md-center">
                       
                        <Col xs={8} >
                            <div className="card service-front-card">
                                <div className="servicepage">
                                    <label className="text-color">Website Building</label>
                                    <p className="text-color">
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} >
                            <div className="img-card-servicepage text-center">
                                <div className="servicepage">
                                    <img src={websiteimage} alt="Website Builder" className="service-image" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>

                <div className="servicepage-middle-container">
                    <Row className="justify-content-md-center">

                        <Col xs={3} >
                            <div className="img-card-servicepage text-center">
                                <div className="servicepage">
                                    <img src={seo} alt="Website Builder" className="service-image" />
                                </div>
                            </div>
                        </Col>
                        <Col xs={8} >
                            <div className="card service-front-card">
                                <div className="servicepage">
                                    <label className="text-color">SEO (Search Engine Optimization)</label>
                                    <p className="text-color">
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>

                <div className="servicepage-middle-container">
                    <Row className="justify-content-md-center fluid">
                       
                        <Col xs={8} >
                            <div className="card service-front-card">
                                <div className="servicepage">
                                    <label className="text-color" >Online Marketing Building</label>
                                    <p className="text-color">
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={2} >
                            <div className="img-card-servicepage">
                                <div className="servicepage">
                                      <img src={onlinemarketing} alt="Website Builder" className="service-image" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>

            </Container>
        </div >
    );
}

export default Services;