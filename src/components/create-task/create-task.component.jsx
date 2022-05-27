import './create-task.styles.scss';

function CreateTask({addTask, setTask, task}) {
    return (
        <div className='input-container'>
            <input type="checkbox" className='create-completed' disabled/>
            <span className="checkmark"></span>
            <input placeholder="Create a new todo..." 
            type="text" 
            className='make-task' 
            onKeyPress={(e) => addTask(e)} onChange={(e) => setTask(e.target.value)}
            value={task}
            />
        </div>
    ) 

}

export default CreateTask;