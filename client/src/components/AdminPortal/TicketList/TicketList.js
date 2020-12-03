import React from "react";
import "./TicketList.css";

function TicketList(props){

    console.log("Printing from TicketList.");
    return (
        <div>
            <button className="btn btn-danger mb-3"
            onClick={(e, ticket=props.ticket) => props.clickFunction(e, ticket)}
            >
            {props.ticket}

            </button>
        </div>
    )
}

export default TicketList;