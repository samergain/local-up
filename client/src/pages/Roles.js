import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import API from "../utils/API";

function AddRole() {
    const [role, setRole] = useState("");

    function handleRoleChange(event) {
        setRole(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (role) {
            API.addRoles({name: role})
                .then(
                    () => {  window.location.href = "/"; }
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
                        <div className="card-body">
                            <div className="form-group">
                                <label>Role Name</label>
                                <input onChange={handleRoleChange} type="text" className="form-control" placeholder="role name" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-signup">Add Role</button>
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

export default AddRole;
