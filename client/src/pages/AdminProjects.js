import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";
import {ProjectCard, ProjectCardBody} from "../components/AdminPortal/ProjectsCard/ProjectsCard";
// import AuthService from "../services/auth-service";
import API from "../utils/API";


function AdminProjects() {

    // let currentUser = AuthService.getCurrentUser();
 
    const [projects, setProjects] = useState({
        _id: "",
        title: "",
        description: "",
        githubRepo: "",
        status : "",
        tasks: [],
        ticket: []
    });

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        console.log("Getting all Projects");
        API.getProject()
            .then(res => {
                console.log("API CALL Returned - res.data: ", res.data)
                setProjects(res.data);
            })
            .catch(err => console.log(err));
    }

    // const [clientProfile, setClientProfile] = useState({
    //     id: "",
    //     name: "",
    //     company: "",
    //     email: "",
    //     contact: "",
    //     clientTickets: []
    // });

    async function displayProjDetails(event, project) {
        event.preventDefault();

        console.log("display Project Details: ", project)
        const ticketDetails = project.ticket.map((ticket) => {
            console.log("Ticket Value: ", ticket);
            API.getTicket(ticket)
            .then(res => console.log("ticket response: ", res))
            .catch(error => console.log("error getting ticket details: ", error));
        })

        console.log("TicketDetails: ", ticketDetails);

        const taskDetails = project.tasks.map((task) => {
            API.getTaskById(task)
            .then(res => console.log("task response: ", res))
            .catch(error => console.log("error getting task details: ", error));
        })

        console.log("Task Details: ", taskDetails);
 
    }

   

    return (
        <div>
            <NavigationBar />
            <Container fluid>
                <Row className="show-grid no-gutter">
                    <Col xs={2} className="navsidebar">
                        <NavSideBar />
                    </Col>

                    {!projects.length ? (
                        <h1 className="text-center">No Projects to Display</h1>
                    ) : (
                            <Col xs={3} lg={3}>
                                <div className="card text-center">
                                    <div className="card-header text-center">
                                        <h2>List of Projects</h2>
                                    </div>
                                    <ProjectCard
                                    >
                                        <div className="card-body">
                                            {projects.map(project => {
                                                return (<ProjectCardBody
                                                    id={project._id}
                                                    key={project._id}
                                                    title={project.title}
                                                    description={project.description}
                                                    githubrepo={project.githubRepo}
                                                    status={project.status}
                                                    tasks={project.tasks}
                                                    tickets={project.ticket}
                                                    project={project}
                                                    clickFunction={displayProjDetails}
                                                />
                                                );
                                            })}
                                        </div>
                                    </ProjectCard>
                                </div>
                            </Col>
                        )}
                </Row>
            </Container>
        </div >
    )
}

export default AdminProjects;