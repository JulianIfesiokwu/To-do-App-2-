import Task from "../Task/Task.component";
import './TaskList.styles.scss'

const TaskList = ({ allTasks, deleteTask, toggleCompleted, Draggable, filterTasks, toggleFilter, clonedAllTasks, activeFilter, setActiveFilter }) => {
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
                    <p className={activeFilter === 'all' ? 'active-filter' : 'filter'} onClick={(all) => {
                        filterTasks(all)
                        setActiveFilter('all')
                        }}>All</p>
                    <p className={activeFilter === 'active' ? 'active-filter' : 'filter'} onClick={(active) => {
                        filterTasks(active)
                        setActiveFilter('active')
                        }}>Active</p>
                    <p className={activeFilter === 'completed' ? 'active-filter' : 'filter'} onClick={(completed) => {
                        filterTasks(completed)
                        setActiveFilter('completed')
                        }}>Completed</p>
                </div>
                <p className="clear-completed" onClick={(clear) => filterTasks(clear)}>Clear Completed</p>
            </div>
            </div>
            <div className="mobile-control-filters">
                <p className={activeFilter === 'all' ? 'active-filter' : 'filter'} onClick={(all) => {
                        filterTasks(all)
                        setActiveFilter('all')
                        }}>All</p>
                    <p className={activeFilter === 'active' ? 'active-filter' : 'filter'} onClick={(active) => {
                        filterTasks(active)
                        setActiveFilter('active')
                        }}>Active</p>
                    <p className={activeFilter === 'completed' ? 'active-filter' : 'filter'} onClick={(completed) => {
                        filterTasks(completed)
                        setActiveFilter('completed')
                        }}>Completed</p>
            </div>
        </div>
    )
}

export default TaskList