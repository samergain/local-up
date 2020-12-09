import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import websiteimage from "../images/website5.jpg";
import seo from "../images/SEO5.jpg";
import onlinemarketing from "../images/online_marketing3.jpg";


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
                                    <label className="text-color">Building Websites:</label>
                                    <p className="text-color">

                                        By creating a website, you’re building an online presence. Whether you’re making a basic website with contact information for your small business, creating a full system for receiving/delivering orders, having a website will help you share who you are and what you do with the right audience.
                                        LocalUP can help you pick the right solution for you, the right template/theme, and give you full support until you are comfortable managing it yourself.
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
                                    <label className="text-color">Be Visible on the Web (SEO):</label>
                                    <p className="text-color">

                                        Most internet users begin their session by searching for something—that something is a need. People use the internet to fulfill their need for information, whether it’s settling a bet on who the 14th president was (Franklin Pierce, by the way) or finding a local restaurant, perfect piece of clothing, or the ideal contractor for a home remodel.
                                        Search engine optimization (SEO) is the process of helping your customers connect with your business online.
                                        Our team uses modern SEO services, backed by the best digital practices, to increase your traffic & rankings for vetted keywords and long-tail phrases that drive business to your site.
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
                                    <label className="text-color" >e-Marketing:</label>
                                    <p className="text-color">
                                        eMarketing includes Search Engine Marketing, Social Media Marketing, Content Marketing, Web Analytics. The goal of all those services: More Visibility, More Customers, More Sales.
                                        Our team can do all that for you and show you how to do it yourself as a professional.
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