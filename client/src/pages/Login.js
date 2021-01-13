import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import AuthService from "../services/auth-service";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleLoginSubmit(event) {
        event.preventDefault();
        if (username && password) {
            AuthService.login(username, password)
                .then(
                    (user) => {  
                        if (user.roles[0] === "ROLE_CLIENT") {
                            window.location.href = "/profile";                      
                        }
                        else if (user.roles[0]==="ROLE_DEVELOPER") {
                            window.location.href = "/";
                        }
                        else if (user.roles[0] === "ROLE_ADMIN") {
                            window.location.href = "/clients";
                        }
                        else {
                            window.location.href = "/";
                            }
                    }
                )
                .catch((err) => alert(err))
        }
    }

    return (
        <div>
            <NavBar />
            <Container fluid>
                <Row>
                    <p></p>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={4}>
                        <div className="card">
                            <form>
                                <div className="card-header">
                                    <h3>Sign In</h3>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input onChange={handleUsernameChange} type="username" className="form-control" placeholder="Enter UserName" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input onChange={handlePasswordChange} type="password" className="form-control" placeholder="Enter password" />
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                        </div>
                                    </div>

                                    <button onClick={handleLoginSubmit} type="submit" className="btn btn-primary btn-login">Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;
