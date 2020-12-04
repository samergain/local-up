import React from "react";
import "./ClientsCard.css";


export function ClientCard(props) {

    return (
        <div className="card-header mr-auto">
            <h2 className="text-center">{props.cardHeader}</h2>
            {props.children}
        </div>
    )
}

export function ClientCardBody(props) {

    console.log("PROPS from Card: ", props);

    return (
        <div>
                <button
                    id={props.id}
                    name={props.name}
                    company={props.company}
                    email={props.email}
                    contact={props.contact}
                    tickets={props.tickets}
                    className="btn btn-primary btn-size mb-3"
                    value={props.client}
                    onClick={(e, client=props.client) => props.clickFunction(e, client)}
                >
                    {props.company}
                </button>
        </div>
        
      
    )
}
