import './Task.styles.scss'
import cancelButton from '../../images/icon-cross.svg'

const Task = ({ title, deleteTask, id}) => {
    
    return (
        <article className='task'>
            <div className="checkmark-container">
                <input type="checkbox" className='toggle-completed'/>
                <span className="checkmark"></span>
            </div>
            <p className='task-title'>{title}</p>
            <img 
            src={cancelButton} alt='' 
            className='cancel-icon' 
            onClick={() => deleteTask(id)}
            />
            </article>
    )
}

export default Task