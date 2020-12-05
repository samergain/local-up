import React from "react";
import "./TicketList.css";

function TicketList(props){

    // console.log("Printing from TicketList.", props);
    return (
        <div>
            <button className="btn btn-primary mb-3 btn-size"
            onClick={(e, ticket=props) => props.clickFunction(e, ticket)}
            >
            {props.ticket}

            </button>
        </div>
    )
}

export default TicketList;