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
    console.log("currentUser: ", currentUser.username);

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

        //Each ticket has only one project - one project has one ticket

        let ticketDtl = await API.getTicket(project.tickets[0])
            .then(res => {
                // console.log("ticket response: ", res)
                return res.data;

            })
            .catch(error => console.log("error getting ticket details: ", error));


        setProjectDetails({
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

    function displayTaskDetails(event, task) {
        console.log("display Task Details: ", task);
        // const taskDetails = project.tasks.map((task) => {
        //     API.getTaskById(task)
        //         .then(res => console.log("task response: ", res))
        //         .catch(error => console.log("error getting task details: ", error));
        // })

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
        // console.log("printing from AdminClients handleInputChange: ", event);
        const { name, value } = event.target;
        setTaskForm({ ...taskForm, [name]: value })
    };

    async function handleFormSubmit(event) {
        console.log("printing from AdminProjects handleFormSubmit", event);
        event.preventDefault();

        try {
            if (taskForm.title && taskForm.description) {
                
                console.log("createdBy: ", taskForm.createdBy);
                const response = await API.createTask({
                    title: taskForm.title,
                    description: taskForm.description,
                    createdBy: currentUser.username,
                    status: taskForm.status
                });
                // console.log("Project saved response data : ", response.data);
                if (response.status === 200) {
                    alert("Task Added Successfully: ", response);
                    // const responseTicket = await API.addTaskToProject(taskForm.projectId, {taskForm._id});
                    // if (responseTicket.status === 200){
                    //     console.log("ticket status updated: ", responseTicket);
                    //     setTaskForm(
                    //         {clientId: "",
                    //         clientticket: "",
                    //         title: "",
                    //         description: "",
                    //         githubRepo: "",
                    //         createdBy: "",
                    //         status: "",
                    //         ticket: []
                    //         });
                    // }
                }
            }
        } catch (error) {
            console.log("Error while saving Task or updating Project Task status: ", error);
        }
    };



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
                                        <strong>Id:</strong>{projectDetails.id} <br />
                                        <strong>Description:</strong>{projectDetails.description} <br />
                                        <strong>Status:</strong> {projectDetails.status || "new"}<br />
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
                                                        id={task.id}
                                                        ticket={task}
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
                    {(taskForm.ticketId !== "") ?
                        (
                            <Col xs={3} lg={3}>
                                <LightSpeed clear>
                                    <div className="card">
                                        <div className="card-header text-center">
                                            <h2>{taskForm.ticketTitle}</h2>
                                        </div>
                                        <p className="pad-card-info">
                                            <strong>Ticket Id:</strong>{taskForm.ticketId}<br />
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
            </Container>
        </div >
    )
}

export default AdminProjects;