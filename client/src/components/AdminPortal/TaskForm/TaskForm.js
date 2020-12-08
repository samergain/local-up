import React from "react";
import {Input, TextArea, FormBtn} from "../Form";

function TaskForm(props) {
    // console.log("Printing from TaskForm", props);

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
                    name="createdBy"
                    placeholder="Created By"
                    value={props.createdBy}
                    disabled
                />
                <Input
                    onChange={props.handleInputChange}
                    name="status"
                    placeholder="Status"
                    value="open"
                    disabled
                />
                <FormBtn
                disabled={!(props.title && props.description)}
                onClick={props.handleFormSubmit}
                >
                    Submit Task Form
                </FormBtn>
            </form>
        </div>
    )
}

export default TaskForm;