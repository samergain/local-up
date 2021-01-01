import React from "react";
import {Input, TextArea, FormBtn} from "../Form";

function ProjectForm(props) {
    console.log("Printing from ProjectForm", props);

    return (
        <div>
            <form>
                <Input
                    onChange={props.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                    value={props.title}
                />
                <TextArea
                    onChange={props.handleInputChange}
                    name="description"
                    placeholder="Description (required)"
                    value={props.description}
                />
                <Input
                    onChange={props.handleInputChange}
                    name="githubRepo"
                    placeholder="GitHubRepo"
                    value={props.githubRepo}
                />
                <Input
                    onChange={props.handleInputChange}
                    name="createdBy"
                    placeholder="Created By"
                    value={props.currentUser}
                    disabled
                />
                <Input
                    onChange={props.handleInputChange}
                    name="status"
                    placeholder="Status"
                    value="OPEN"
                    disabled
                />
                <FormBtn
                disabled={!(props.title && props.description)}
                onClick={props.handleFormSubmit}
                >
                    Submit Project Form
                </FormBtn>
            </form>
        </div>
    )
}

export default ProjectForm;