import React, { useState, useEffect } from "react";
// import { useState } from "react/cjs/react.production.min";

import './create-task.styles.scss';

function CreateTask() {
    const code = 13
    const [task, setTask] = useState('')
    const [allTasks, setAllTasks] = useState([])

    const addTask = (e) => {
        if(e.charCode === code) {
            const newTask = {id: new Date().getTime().toString(), title: task}
            setAllTasks([...allTasks, newTask])
            setTask('')
        }
        if(e.charCode === code && e.target.value === '') {
            alert('Please enter task details')
        }
    }

    return (
        <div className='input-container'>
            <input type="checkbox" className='toggle-completed'/>
            <span className="checkmark"></span>
            <input placeholder="Create a new todo..." type="text" className='make-task' onKeyPress={(e) => addTask(e)} onChange={(e) => setTask(e.target.value)}/>
        </div>
    ) 

}

export default CreateTask;