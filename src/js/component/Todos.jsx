import React, { useState } from "react";
import { Task } from "./Task.jsx";

export const Todos = () => {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue ] = useState('');
    let items = tasks.length;

    function addTask(e) {
        if (e.code == "Enter") {
            if (inputValue != "") {
                setInputValue("")
                setTasks((prev) => {
                    return ([...prev, inputValue])
                })
            }
        }
    }

    function removeDefault() {

        if (tasks.length == 0) {
            items = 0
            return(
                <div className="defaultTask bg-light text-secondary px-5 py-2 text-start align-items-center">
                    <h3 className="fw-light m-0 col-10">No hay tareas, añadir tareas</h3>
                </div>
            )
        }

        if (tasks.length == 2 && (tasks[0] == "No hay tareas, añadir tareas")) {
            setTasks((prev) => {
                prev.shift()
                return prev
            })
        } 
    }

    return (
        <div className="bg-secondary todos mt-3 text-center pb-1">
            <input type="text"
                onChange={e => setInputValue(e.target.value)} 
                value={inputValue} 
                className="my-3 ps-5" 
                id="inputTask" 
                onKeyPress={addTask}
                placeholder="¿Que tienes por hacer?"
            />         
            {removeDefault()}   
            {              
                tasks.map((item, index) => {return <Task text={item} key={index} tasks={tasks} setTasks={setTasks} index={index}/>})
            }      
            <div className="bg-secondary todos my-3 text-start d-flex justify-content-between">
                {items} item left
                <button type="button" class="btn btn-dark">Clean all</button>
            </div>
        </div>
    )
}