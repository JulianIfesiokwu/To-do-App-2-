import Task from "../Task/Task.component";
import './TaskList.styles.scss'

const TaskList = ({ allTasks }) => {
    return (
        <div className="task-list">
            {allTasks?.map((item) => {
                return (
                    <Task key={item.id}>{item.title}</Task>
                )
            })}
        </div>
    )
}

export default TaskList