import './Task.styles.scss'
import cancelButton from '../../images/icon-cross.svg'

const Task = ({ title, deleteTask, id, toggleCompleted, task}) => {
    
    return (
        <article className='task'>
            <div className="checkmark-container">
                <input type="checkbox" className='toggle-completed' />
                <span className="checkmark" onClick={() => toggleCompleted(task, id)}></span>
            </div>
            <p className='task-title'>{title}</p>
            <img 
            src={cancelButton} alt='' 
            className='cancel-icon' 
            onClick={() => deleteTask(id)}
            />
            {console.log(task)}
        </article>
    )
}

export default Task