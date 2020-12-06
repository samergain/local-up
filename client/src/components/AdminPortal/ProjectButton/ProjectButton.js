import React from "react";

function ProjectButton(props){
    // console.log("Printing from ProjectButton", props);

    return(
        <div>
            <button className="btn btn-primary mb-3 btn-size"
             onClick={(e, ticket=props) => props.clickFunction(e, ticket)}>
                Create Project
            </button>
        </div>
    )
}

export default ProjectButton;