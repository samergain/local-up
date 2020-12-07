import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import Golocal from "../Localupimages/Golocal.png"
import Localbusinessfirst from "../Localupimages/Localbusinessfirst.png"
import smallbusinesscommunity from "../Localupimages/smallbusinesscommunity.jpg"
import Storepic from "../Localupimages/Storepic.jpg"
import Thanksforshoppinglocal from "../Localupimages/Thanksforshoppinglocal.jpg"
import Thinkbig from "../Localupimages/Thinkbig.jpg"

function Home() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={10}>
                        <div className="card mainpage-card">
                            <div className="mainpage">
                            {/* <img src= {Golocal} alt="ImageNotRendering" width="200" height="150"/> */}
                            <img src= {Localbusinessfirst} alt="ImageNotRendering" width="400" height="220"/>
                            {/* <img src= {smallbusinesscommunity} alt="ImageNotRendering" width="200" height="150"/>
                            <img src= {Storepic} alt="ImageNotRendering" width="200" height="150"/>
                            <img src= {Thanksforshoppinglocal} alt="ImageNotRendering" width="200" height="150"/>
                            <img src= {Thinkbig} alt="ImageNotRendering" width="200" height="150"/> */}
                            <h3>Local-Up(logo-here)</h3>
                                <label>Shop Local</label>
                                <p>
                                Our organization helps small and local businesses with marketing, search engine optimization (seo), and technical services such as setting up a website. The goal of our organization is to give small local businesses a cost-effective way to market their services.  Our overall mission is to give local businesses low-cost marketing solutions. As well as establish them an e-commerce presence by creating them a website where they can sell their goods online.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;