import React from "react";

function ProjectButton(props) {
    // console.log("Printing from ProjectButton", props);

    return (
        <div>
            {(!props.ticketStatus)
                ? (<button
                    className="btn btn-primary mb-3 btn-size"
                    onClick={(e, ticket = props) => props.clickFunction(e, ticket)}>
                    Create Project
                </button>)
                : (
                    <button
                        className="btn btn-primary mb-3 btn-size"
                        disabled
                    >
                    Project Already Exists
                    </button>
                )
            }
        </div>
    )
}

export default ProjectButton;