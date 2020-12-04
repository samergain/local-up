import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";

function SignUp() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <Col xs={4}>
                    </Col>
                    <Col xs={4}>
                        <form>
                            <h3>Sign Up</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Organization</label>
                                <input type="email" className="form-control" placeholder="Enter Organization" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                            <p className="forgot-password text-right">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp;