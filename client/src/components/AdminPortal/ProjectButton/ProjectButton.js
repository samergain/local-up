import React from "react";
import "./ProjectButton.css";

function ProjectButton(props){
    console.log("Printing from ProjectButton");

    return(
        <div>
            <button className="btn btn-primary mb-3"
             onClick={(e, ticket=props.ticket) => props.clickFunction(e, ticket)}>
                Create Project
            </button>
        </div>
    )
}

export default ProjectButton;