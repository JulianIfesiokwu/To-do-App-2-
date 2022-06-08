import Task from "../Task/Task.component";
import './TaskList.styles.scss'

const TaskList = ({ allTasks, deleteTask, toggleCompleted, Draggable, filterTasks, toggleFilter, clonedAllTasks }) => {
    return (
        <div>
            <div className="task-list">
            {clonedAllTasks.length > 0 && clonedAllTasks.map((task, index) => {
                const {id, title} = task
                
                return (
                    <Task 
                    task={task} 
                    title={title} 
                    key={id} 
                    deleteTask={deleteTask} 
                    id={id} 
                    toggleCompleted={toggleCompleted}
                    Draggable={Draggable}
                    index={index}
                    />
                )
            })}
            <div className="control-panel">
                <p className="items-left">{allTasks.length} {allTasks.length > 1 ? 'items left' : 'item left'}</p>
                <div className="control-filters">
                    <p className={toggleFilter ? 'active-filter' : 'all'} onClick={(all) => filterTasks(all)}>All</p>
                    <p className={toggleFilter ? 'active-filter' : 'active'} onClick={(active) => filterTasks(active)}>Active</p>
                    <p className={toggleFilter ? 'active-filter' : 'completed'} onClick={(completed) => filterTasks(completed)}>Completed</p>
                </div>
                <p className="clear-completed" onClick={(clear) => filterTasks(clear)}>Clear Completed</p>
            </div>
            </div>
            <div className="mobile-control-filters">
                <p className="all" onClick={(all) => filterTasks(all)}>All</p>
                <p className="active" onClick={(active) => filterTasks(active)}>Active</p>
                <p className="completed" onClick={(completed) => filterTasks(completed)}>Completed</p>
            </div>
        </div>
    )
}

export default TaskList