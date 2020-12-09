import React from "react";

function ProjectTicketList(props){

    // console.log("Printing from ProjectTicketList.", props);
    return (
        <div>
            <div className="text-left">
            <strong>ID:</strong>{props.id}<br/>   
            <strong>Title:</strong>{props.ticketTitle}<br/>
            <strong>Status:</strong>{props.ticketStatus}<br/>
            </div>
            <hr/>
            <button className="btn btn-primary mb-3 btn-size"
            onClick={(e, ticket=props) => props.clickFunction(e, ticket)}
            >
            CREATE TASK
            </button>
            
        </div>
    )
}

export default ProjectTicketList;