import React from "react";

import './create-task.styles.scss';

function CreateTask() {
    return (
        <div className='input-container'>
            <input type="checkbox" className='toggle-completed'/>
            <span class="checkmark"></span>
            <input  type="text" className='make-task'/>
        </div>
    ) 

}

export default CreateTask;