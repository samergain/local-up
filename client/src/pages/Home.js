import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import smallbusiness from "../images/localbusiness3.jpg";
import developer from "../images/developers1.jpg";

function Home() {
    return (
        <div>
            <NavBar />
            <Container fluid>

                <div className="middle-container-homepage">
                    <Row className="justify-content-md-center">
                        <Col xs={6} >
                            <div className="card homepage-card">
                                <div className="homepage">
                                    <label><h1 className="text-color">Local UP</h1></label>
                                    <p className="text-color">
                                    Our organization helps small and local businesses with marketing, search engine optimization (SEO), and technical services such as setting up a website. 
                                    The goal of our organization is to give small local businesses a cost-effective way to market their services. Our overall mission is to give local businesses low-cost marketing solutions. 
                                    As well as establish them an e-commerce presence by creating them a website where they can sell their goods online.
                                    </p>
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