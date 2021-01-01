import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import AuthService from "../services/auth-service";

function SignUpAdmin() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [roles, setRoles] = useState("");

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

    function handleRolesChange(event) {
        setRoles(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        
        console.log("roles is:", roles); //["admin"]
        const company = "";
        const contact = "";
        if (username && email && password && roles) {
            AuthService.register(username, email, password, name, company, contact, roles)
                .then(
                    () => {  window.location.href = "/sign-in"; }
                )
                .catch((err) => alert(err))
        }
    }
    return (
        <div>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={6}>
                    <div className="card">
                        <form>
                        <div className="card-header">
                            <h3>Sign Up as Admin</h3>
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
                                <label>Role Name</label>
                                <input onChange={handleRolesChange} type="text" className="form-control" placeholder="admin/developer" />
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

export default SignUpAdmin;
