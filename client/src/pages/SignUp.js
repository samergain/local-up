import React, {useState} from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import AuthService from "../services/auth-service";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [contact, setContact] = useState("");

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCompanyChange(event) {
        setCompany(event.target.value);
    }

    function handleContactChange(event) {
        setContact(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const roles = "client";
        if (username && email && password) {
            AuthService.register(username, email, password, name, company, contact, roles)
                .then(
                    () => {  window.location.href = "/sign-in"; }
                )
                .catch((err) => alert(err))
        }
    }
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
                                <label>Username</label>
                                <input onChange={handleUsernameChange} type="text" className="form-control" placeholder="username" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input onChange={handleEmailChange} type="email" className="form-control" placeholder="email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input onChange={handlePasswordChange} type="password" className="form-control" placeholder="password" />
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input onChange={handleNameChange} type="text" className="form-control" placeholder="full name" />
                            </div>
                            <div className="form-group">
                                <label>Business Name</label>
                                <input onChange={handleCompanyChange} type="text" className="form-control" placeholder="Organization/Company" />
                            </div>
                            <div className="form-group">
                                <label>Contact</label>
                                <input onChange={handleContactChange} type="text" className="form-control" placeholder="Phone number" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-signup">Sign Up</button>
                            {/* <p className="forgot-password text-left">
                                Already registered? <a href="#">sign in</a>
                            </p> */}
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
