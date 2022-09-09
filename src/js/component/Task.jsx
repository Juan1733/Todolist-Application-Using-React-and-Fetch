import propTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Task = (props) => {
    return(
        <div className="taskBox bg-light text-secondary d-flex px-5 py-2 justify-content-start align-items-center">
            <h3 className="fw-light m-0">{props.text}</h3>
            <FontAwesomeIcon icon={faXmark} className="xMark" onClick={() => {
                props.setTasks((prev) => {
                    let index = prev.indexOf(props.text)
                    prev.splice(index, 1)
                    return([...prev])
                })
            }}
            />
        </div>
    )
}

