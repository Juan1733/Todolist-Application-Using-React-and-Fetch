import propTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Task = (props) => {
    return(
        <div className="taskBox bg-light text-secondary d-flex px-5 py-2 text-start align-items-center row">
            
            <h3 className="fw-light m-0 col-10">{props.text}</h3>
            <FontAwesomeIcon icon={faXmark} className="xMark col-1" onClick={() => {

                props.setTasks((prev) => {
                    prev[props.index].done = true
                    prev.splice(props.index, 1)
                    props.updateTasks()
                    return([...prev])
                })                
            }}
            />
        </div>
    )
}

