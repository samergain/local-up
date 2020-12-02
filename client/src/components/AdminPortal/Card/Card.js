import React from "react";
import "./Card.css";
import ClientProfile from "../ClientProfile/ClientProfile";

export function Card(props) {
    console.log("Card PROPS: ", props);
    return (
        <div className="card-header mr-auto">
            <h2 className="text-center">{props.cardHeader}</h2>
            {props.children}
        </div>
    )
}

export function CardBody(props) {
    console.log("CardBody", props);


    function displayClientDtl(props){
        console.log("client clicked: ", props);

        return (
            <ClientProfile />
        )
    }

    return (
        <div>
            <div className="card-body">
                <button
                    id={props.id}
                    name={props.name}
                    company={props.company}
                    email={props.email}
                    contact={props.contact}
                    tickets={props.tickets}
                    className="btn btn-danger"
                    onClick={()=> displayClientDtl(props)}
                >
                    {props.company}
                </button>
            </div>
        </div>
    )
}
