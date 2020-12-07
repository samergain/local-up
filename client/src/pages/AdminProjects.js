import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";
import { ProjectCard, ProjectCardBody } from "../components/AdminPortal/ProjectsCard/ProjectsCard";
import ProjectTicketList from "../components/AdminPortal/ProjectTicketList/ProjectTicketList";
import ProjectTaskList from "../components/AdminPortal/ProjectTaskList/ProjectTaskList";
import AuthService from "../services/auth-service";
import API from "../utils/API";


function AdminProjects() {

    let currentUser = AuthService.getCurrentUser();

    const [projects, setProjects] = useState({
        _id: "",
        title: "",
        description: "",
        githubRepo: "",
        status: "",
        tasks: [],
        ticket: []
    });

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.getProject()
            .then(res => {
                console.log("API CALL Returned - res.data: ", res.data)
                setProjects(res.data);
            })
            .catch(err => console.log(err));
    }

    // const [projectDetails, setProjectDetails] = useState[{
    //     id: "",
    //     title: "",
    //     description: "",
    //     githubrepo: "",
    //     status: "",
    //     tasks: [],
    //     tickets: []
    // }]

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

        // setProjectDetails({
        //     id: project.id,
        //     title: project.title,
        //     description: project.description,
        //     githubrepo: project.githubrepo,
        //     status: project.status,
        //     tasks: taskDetails,
        //     tickets: ticketDetails
        // })

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

                    {/* {projectDetails.id !== "" ?
                        (
                            <Col xs={3} lg={3}>
                                <div className="card text-center">
                                    <div className="card-header text-center">
                                        <h2>{projectDetails.title}</h2>
                                    </div>
                                    <p className="pad-card-info">
                                        <strong>Id:</strong>{projectDetails.id} <br />
                                        <strong>Description:</strong>{projectDetails.description} <br />
                                        <strong>Status:</strong> {projectDetails.status} <br />
                                    </p>
                                    <div className="card-body">
                                        <h4><u>Tickets:</u></h4>
                                        {(projectDetails.tasks.length)
                                            ?(projectDetails.tickets.map(ticket => {
                                            <ProjectTicketList
                                                id={ticket.id}
                                                ticket={ticket}
                                                key={ticket.id}
                                                projectId={projectDetails.id}
                                                projectTitle={projectDetails.title}
                                                clickFunction={displayProjDetails}
                                            />
                                            }))
                                            :(<h6>No Tickets</h6>)
                                        }

                                        <h4><u>Tasks:</u></h4>
                                        {(projectDetails.tasks.length)
                                            ?(
                                            projectDetails.tickets.map(task => {
                                            <ProjectTaskList
                                                id={task.id}
                                                ticket={task}
                                                key={task.id}
                                                projectId={projectDetails.id}
                                                projectTitle={projectDetails.title}
                                                clickFunction={displayProjDetails}
                                            />
                                            }))
                                            :(<h6>No Tasks</h6>)
                                        }
                                    </div>
                                </div>
                            </Col>
                        ) : (<></>)
                    } */}
                </Row>
            </Container>
        </div >
    )
}

export default AdminProjects;