import React, { useState } from "react";
import { Task } from "./Task.jsx";

export const Todos = () => {

    const [tasks, setTasks] = useState(["No hay tareas, añadir tareas"]);
    const [inputValue, setInputValue ] = useState('');
    let items = tasks.length;

    function addTask(e) {
        if (e.code == "Enter") {
            setTasks((prev) => {
                return ([...prev, inputValue])
            })
        }
    }

    function removeDefault() {

        if (tasks[0] == "No hay tareas, añadir tareas") {
            items = 0
        }

        if (tasks.length == 0) {
            setTasks((prev) => {
                prev.push("No hay tareas, añadir tareas")
                items = 0
                return prev
            })
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
                tasks.map((item, index) => {return <Task text={item} key={index} tasks={tasks} setTasks={setTasks}/>})
            }      
            <div className="bg-secondary todos my-3 text-start">
                {items} item left
            </div>
        </div>
    )
}