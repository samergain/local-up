import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../components/AdminPortal/NavigationBar/NavigationBar";
import NavSideBar from "../components/AdminPortal/NavSideBar/NavSideBar";
import { ProjectCard, ProjectCardBody } from "../components/AdminPortal/ProjectsCard/ProjectsCard";
import ProjectTicketList from "../components/AdminPortal/ProjectTicketList/ProjectTicketList";
import ProjectTaskList from "../components/AdminPortal/ProjectTaskList/ProjectTaskList";
import TaskForm from "../components/AdminPortal/TaskForm/TaskForm";
import AuthService from "../services/auth-service";
import LightSpeed from "react-reveal/LightSpeed";
import API from "../utils/API";


function AdminProjects() {

    
    let currentUser = AuthService.getCurrentUser();

    const [projects, setProjects] = useState({
        _id: "",
        title: "",
        description: "",
        githubRepo: "",
        status: "",
        created_at:"",
        tasks: [],
        ticket: []
    });

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.getProject()
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => console.log(err));
    }

    const [projectDetails, setProjectDetails] = useState({
        id: "",
        title: "",
        description: "",
        githubrepo: "",
        status: "",
        tasks: [],
        tickets: [],
        ticketDec: "",
        ticketTitle: "",
        ticketStatus: ""
    });


    async function displayProjDetails(event, project) {
        event.preventDefault();
        setTaskForm(
            {
                projectId: "",
                ticketId: "",
                ticketTitle: "",
                title: "",
                description: "",
                createdBy: "",
                status: ""
            });

            setTaskDetails({
                _id: "",
                title: "",
                description: "",
                status: ""
            });

        //Each ticket has only one project - one project has one ticket

        let ticketDtl = await API.getTicket(project.tickets[0])
            .then(res => {
                return res.data;

            })
            .catch(error => console.log("error getting ticket details: ", error));

        console.log("display proj details - getting task function: ", project.tasks);
        await setProjectDetails({
            id: project.id,
            title: project.title,
            description: project.description,
            githubrepo: project.githubrepo,
            status: project.status,
            tasks: project.tasks,
            tickets: project.tickets,
            ticketDesc: ticketDtl.description || "",
            ticketTitle: ticketDtl.title || "",
            ticketStatus: ticketDtl.status || ""
        })

    }

    const [taskDetails, setTaskDetails] = useState({
        _id: "",
        title: "",
        description: "",
        status: ""
    });


    async function displayTaskDetails(event, task) {
        const taskDetails = await API.getTaskById(task.id)
            .then(res => {
                console.log("task response from API for particular ID: ", res.data);
                return res.data;
            })
            .catch(error => console.log("error getting task details: ", error));

        setTaskForm({
            projectId: "",
            ticketId: "",
            ticketTitle: "",
            title: "",
            description: "",
            createdBy: "",
            status: ""
        });

        setTaskDetails(taskDetails);
    }

    const [taskForm, setTaskForm] = useState({
        projectId: "",
        ticketId: "",
        ticketTitle: "",
        title: "",
        description: "",
        createdBy: "",
        status: ""
    })


    function createTaskForm(event, ticket) {
        event.preventDefault();

        setTaskDetails({
            _id: "",
            title: "",
            description: "",
            status: ""
        })


        setTaskForm({
            projectId: ticket.projectId,
            ticketId: ticket.id,
            ticketTitle: ticket.ticketTitle,
            title: "",
            description: "",
            createdBy: "",
            status: ""
        });
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setTaskForm({ ...taskForm, [name]: value })
    };

    async function handleFormSubmit(event) {

        event.preventDefault();
        try {
            if (taskForm.title && taskForm.description) {
                const response = await API.createTask({
                    title: taskForm.title,
                    description: taskForm.description,
                    createdBy: currentUser.username,
                    status: "open"
                });
                // console.log("Project saved response data : ", response.data);
                if (response.status === 200) {
                    alert("Task Added Successfully: ", response);
                    const responseProject = await API.addTaskToProject(projectDetails.id, response.data._id);
                    if (responseProject.status === 200) {
                        console.log("Task added to Project successfully: ", responseProject);
                        setTaskForm(
                            {
                                projectId: "",
                                ticketId: "",
                                ticketTitle: "",
                                title: "",
                                description: "",
                                createdBy: "",
                                status: ""
                            });
                        setProjectDetails({
                            id: "",
                            title: "",
                            description: "",
                            githubrepo: "",
                            status: "",
                            tasks: [],
                            tickets: [],
                            ticketDec: "",
                            ticketTitle: "",
                            ticketStatus: ""
                        });

                        loadProjects();
                    }
                }
            }
        } catch (error) {
            console.log("Error while saving Task or updating Project Task status: ", error);
        }
    };



    return (
        <div>
            <NavigationBar />
            {/* <Container fluid> */}
                <Row className="show-grid no-gutter">
                    <Col xs={2} className="navsidebar">
                        <NavSideBar />
                    </Col>

                    {!projects.length ? (
                        <h1 className="text-center">No Projects to Display</h1>
                    ) : (
                            <Col xs={3} lg={3}>
                                <LightSpeed left>
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
                                                        // key={project._id}
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
                                </LightSpeed>
                            </Col>
                        )}

                    {(projectDetails.id !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <LightSpeed left>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h2>{projectDetails.title}</h2>
                                        </div>
                                        <p className="pad-card-info">
                                            <strong>Id:</strong>  {projectDetails.id} <br />
                                            <strong>Description:</strong>  {projectDetails.description} <br />
                                            <strong>Status:</strong>  {projectDetails.status || "new"}<br />
                                        </p>
                                        <div className="card-body text-center">
                                            <h4><u>Ticket:</u></h4>
                                            {(projectDetails.tickets.length)
                                                ? (projectDetails.tickets.map(ticket => (
                                                    <ProjectTicketList
                                                        id={ticket}
                                                        ticket={ticket}
                                                        // key={ticket.id}
                                                        projectId={projectDetails.id}
                                                        projectTitle={projectDetails.title}
                                                        ticketTitle={projectDetails.ticketTitle}
                                                        ticketDesc={projectDetails.ticketDesc}
                                                        ticketStatus={projectDetails.ticketStatus}
                                                        clickFunction={createTaskForm}
                                                    />
                                                )))
                                                : (<h6>No Tickets</h6>)
                                            }
                                            <h4><u>Tasks:</u></h4>
                                            {(projectDetails.tasks.length)
                                                ? (
                                                    projectDetails.tasks.map(task => (
                                                        <ProjectTaskList
                                                            id={task}
                                                            task={task}
                                                            // key={task.id}
                                                            projectId={projectDetails.id}
                                                            projectTitle={projectDetails.title}
                                                            clickFunction={displayTaskDetails}
                                                        />
                                                    )))
                                                : (<h6>No Tasks</h6>)
                                            }
                                        </div>
                                    </div>
                                </LightSpeed>
                            </Col>
                        ) : (<></>)
                    }
                    {(taskDetails._id !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <LightSpeed left>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h2>{taskDetails.title}</h2>
                                        </div>

                                        <div className="card-body text-center">
                                            <p className="pad-card-info">
                                                <strong>Task ID: </strong>{taskDetails._id}<br />
                                                <strong>Description:</strong>  {taskDetails.description}<br />
                                                <strong>Status:</strong>  {taskDetails.status}<br />
                                            </p>
                                            <button className="btn btn-primary mb-3 btn-size"> ASSIGN DEV</button>
                                        </div>
                                    </div>
                                </LightSpeed>
                            </Col>
                        ) : (<></>)
                    }
                    {(taskForm.ticketId !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <LightSpeed clear>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h2>{taskForm.ticketTitle}</h2>
                                        </div>
                                        <p className="pad-card-info">
                                            <strong>Ticket Id:</strong>  {taskForm.ticketId}<br />
                                        </p>
                                        <div className="card-body">
                                            <TaskForm
                                                ticketId={taskForm.ticketId}
                                                ticketTitle={taskForm.ticketTitle}
                                                title={taskForm.title}
                                                description={taskForm.description}
                                                // createdBy={taskForm.createdBy}
                                                status={taskForm.status}
                                                createdBy={currentUser.username}
                                                handleInputChange={handleInputChange}
                                                handleFormSubmit={handleFormSubmit}
                                            />
                                        </div>
                                    </div>
                                </LightSpeed>
                            </Col>
                        ) : (<></>)
                    }
                </Row>
            {/* </Container> */}
        </div >
    )
}

export default AdminProjects;