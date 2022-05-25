import Task from "../Task/Task.component";
import './TaskList.styles.scss'

const TaskList = ({ allTasks }) => {
    return (
        <div className="task-list">
            {allTasks.length > 0 && allTasks?.map((task) => {
                const {id, title} = task
                
                return (
                    <Task title={title} key={id}/>
                )
            })}
            <div className="control-panel">
                <p className="items-left">{allTasks.length} {allTasks.length > 1 ? 'items left' : 'item left'}</p>
                <div className="control-filters">
                    <p className="all">All</p>
                    <p className="active">Active</p>
                    <p className="completed">Completed</p>
                </div>
                <p className="clear-completed">Clear Completed</p>
            </div>
            <div className="mobile-control-filters">
                <p className="all">All</p>
                <p className="active">Active</p>
                <p className="completed">Completed</p>
            </div>
        </div>
    )
}

export default TaskList