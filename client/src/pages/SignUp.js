import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";

function SignUp() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                    <div className="card">
                        <form>
                        <div className="card-header">
                            <h3>Sign Up</h3>
                        </div>
                        <div className="card-body">
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
                                <input type="text" className="form-control" placeholder="Enter Organization" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-signup">Sign Up</button>
                            <p className="forgot-password text-left">
                                Already registered <a href="#">sign in?</a>
                            </p>
                        </div>
                        </form>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default SignUp;
