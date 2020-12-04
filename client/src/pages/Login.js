import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/HomePortal/NavBar/NavBar";

function Login() {
    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                <Col xs={4}>
                    </Col>
                    <Col xs={4}>
                        <form>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>User Name</label>
                                <input type="username" className="form-control" placeholder="Enter UserName" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
