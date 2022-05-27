import './Task.styles.scss'
import cancelButton from '../../images/icon-cross.svg'

const Task = ({ title, deleteTask, id, toggleCompleted, task, completed}) => {
    
    return (
        <article className='task'>
            <div className="checkmark-container">
                <input type="checkbox" 
                className='toggle-completed' 
                value={completed} 
                onClick={() => toggleCompleted(task, id)}/>
                {/* <span className="checkmark"></span> */}
            </div>
            <p className={completed ? 'strike-through created-title' : 'created-title'}>{title}</p>
            <img 
            src={cancelButton} alt='' 
            className='cancel-icon' 
            onClick={() => deleteTask(id)}
            />
        </article>
    )
}

export default Task