import React from "react";

function ProjectTaskList(props){

    // console.log("Printing from TicketList.", props);
    return (
        <div>
            <button className="btn btn-primary mb-3 btn-size"
            onClick={(e, task=props) => props.clickFunction(e, task)}
            >
            {props.id}

            </button>
        </div>
    )
}

export default ProjectTaskList;