import React, { useEffect, useState } from "react";
import { Task } from "./Task.jsx";

export const Todos = () => {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue ] = useState('');
    let items = tasks.length;

    async function getTasks(){
        try{
            fetch('https://assets.breatheco.de/apis/fake/todos/user/juan17')
                      
            .then(resp => {            
                return resp.json();
            })

            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    let element = data[i]                                        
                    setTasks((prev) => {
                        prev.push(element)
                        return([...prev])
                    })
                    //tasks.push(element)                               
                }                                
                items = tasks.length                
            })                                                                   
        }
        catch(error) {
            console.log(error)
        }
    }

    async function postTask(){
        try {
            await fetch('https://assets.breatheco.de/apis/fake/todos/user/juan17', {
                method: 'POST',
                body: JSON.stringify([]),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(resp => {
                console.log(resp.ok)
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function updateTasks(){
        await fetch('https://assets.breatheco.de/apis/fake/todos/user/juan17', {
            method: "PUT",
            body: JSON.stringify(tasks),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {            
            return resp.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {            
            console.log(error);
        });
    }

    async function deleteList(){
        await fetch('https://assets.breatheco.de/apis/fake/todos/user/juan17', {
            method: "DELETE",            
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => {
            console.log(resp.status)
            return resp.json()
        })
        .then(data => {
            console.log(data)
        })
        setTasks([])
    }

    useEffect(() => {
        postTask()
        getTasks()
    }, [])

    function addTask(e) {
        if (e.code == "Enter") {
            if (inputValue.trim() != "") {
                setInputValue("")
                let task = { label: inputValue, done: false }
                tasks.push(task)
                updateTasks()
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
                onKeyDown={addTask}
                placeholder="¿Que tienes por hacer?"
            />
            {removeDefault()}       
            {              
                tasks.map((item, index) => {return <Task text={item.label} key={index} tasks={tasks} setTasks={setTasks} index={index} updateTasks={updateTasks}/>})
            }      
            <div className="bg-secondary todos my-3 text-start d-flex justify-content-between">
                {items} item left
                <button type="button" className="btn btn-dark" onClick={deleteList}>Clean all</button>
            </div>
        </div>
    )
}