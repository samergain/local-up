import React from "react";
import "./Jumbotron.css";

function Jumbotron(){
    console.log("Printing from Jumbotron");
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <h5 className="display-6">Local-UP!</h5>
                        <p>Platform that connects Local Business needing technology help with Developers who want to help them and grow themselves!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;