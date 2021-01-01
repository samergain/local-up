import React from "react";

export function ProjectCard(props) {

    return (
        <div className="card-header mr-auto">
            {props.children}
        </div>
    )
}

export function ProjectCardBody(props) {
    // console.log("pringing from ProjectCardBody - Props: ", props);

    return (
        <div>
                <button
                    id={props.id}
                    title={props.title}
                    description={props.description}
                    githubrepo={props.githubrepo}
                    status={props.status}
                    className="btn btn-primary btn-size mb-3"
                    tasks={props.tasks}
                    tickets={props.tickets}
                    project={props.project}
                    onClick={(e, project=props) => props.clickFunction(e, project)}
                >
                    {props.title}
                </button>
        </div>
        
      
    )
}
