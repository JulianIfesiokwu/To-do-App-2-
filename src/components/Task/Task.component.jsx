import './Task.styles.scss'
import cancelButton from '../../images/icon-cross.svg'

const Task = ({ title, deleteTask, id, toggleCompleted, task, Draggable, index}) => {
    
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided) => {
                return (
                    <article className={task.shown ? 'show task' : 'hidden'} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} index={index}>
                        <div className="checkmark-container">
                            <input type="checkbox" 
                            className='toggle-completed' 
                            value={task.completed ? true : false} 
                            onClick={() => toggleCompleted(task, id)}/>
                            {/* <span className="checkmark"></span> */}
                        </div>
                        <p className={task.completed ? 'strike-through created-title' : 'created-title'}>{title}</p>
                        <img 
                        src={cancelButton} alt='' 
                        className='cancel-icon' 
                        onClick={() => deleteTask(id)}
                        />
                    </article>
                )
            }}
        </Draggable>
    )
}

export default Task