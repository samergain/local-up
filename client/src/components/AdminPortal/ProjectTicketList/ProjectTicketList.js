import React from "react";

function ProjectTicketList(props){

    console.log("Printing from TicketList.", props);
    return (
        <div>
            <button className="btn btn-primary mb-3 btn-size"
            onClick={(e, ticket=props) => props.clickFunction(e, ticket)}
            >
            {props.id}

            </button>
        </div>
    )
}

export default ProjectTicketList;