import React from "react";

export function ClientCard(props) {

    return (
        <div className="card-header mr-auto">
            {props.children}
        </div>
    )
}

export function ClientCardBody(props) {
    // console.log("pringing from ClientCardBody - Props: ", props);

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
                    // variant="primary"
                    value={props.client}
                    onClick={(e, client=props.client) => props.clickFunction(e, client)}
                >
                    {props.company}
                </button>
        </div>
        
      
    )
}
