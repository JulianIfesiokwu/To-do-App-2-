import "./App.css";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import HeaderContainer from "./components/header/header.component";
import CreateTask from "./components/create-task/create-task.component";
import TaskList from "./components/TaskList/TaskList.component";

function App() {
  const code = 13;
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [clonedAllTasks, setClonedAllTasks] = useState([]);
  const [theme, setTheme] = useState(false);
  const [strikeThrough, setStrikeThrough] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  // Rearrange items on drag and drop
  const handleOnDragEnd = (result) => {
    const items = Array.from(clonedAllTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setClonedAllTasks(items);
    setAllTasks(items);
  };

  // Toggle light and dark mode
  const toggleTheme = (theme) => {
    setTheme(!theme);
  };

  // Add a task to the task list
  const addTask = (e) => {
    if (e.target.value === "" && e.charCode === code) {
      alert("Please enter task details");
      return;
    }
    if (e.charCode === code) {
      const newTask = {
        id: new Date().getTime().toString(),
        title: task,
        completed: false,
        shown: true,
      };
      setAllTasks([...allTasks, newTask]);
      setClonedAllTasks([...allTasks, newTask]);
      setTask("");
    }
  };

  // delete a task
  const deleteTask = (id) => {
    setClonedAllTasks(allTasks.filter((task) => task.id !== id));
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };

  // toggle completed or not
  const toggleCompleted = (task, id) => {
    if (task.id === id) {
      task.completed = !task.completed;
      setStrikeThrough(!strikeThrough);
    }
    if (task.id !== id) {
      return;
    }
  };

  // Show all tasks
  const filterTasks = (e) => {
    let type = e.target.textContent;

    if (type === "All") {
      setClonedAllTasks(allTasks);
      return;
    }

    if (type === "Active") {
      let filteredTasks = clonedAllTasks.filter((task) => {
        return task.completed === false;
      });

      setClonedAllTasks(filteredTasks);
    }

    if (type === "Completed") {
      let filteredTasks = clonedAllTasks.filter((task) => {
        return task.completed === true;
      });
      setClonedAllTasks(filteredTasks);
    }

    if (type === "Clear Completed") {
      let filteredTasks = allTasks.filter((task) => {
        return task.completed !== true;
      });
      setAllTasks(filteredTasks);
      setClonedAllTasks(filteredTasks);
    }
  };

  return (
    <div className={theme ? "dark container" : "light container"}>
      <div className="to-do">
        <HeaderContainer toggleTheme={toggleTheme} theme={theme} />
        <CreateTask task={task} addTask={addTask} setTask={setTask} />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="toDrop">
            {(provided) => {
              return (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  <TaskList
                    id="toDrop"
                    allTasks={allTasks}
                    clonedAllTasks={clonedAllTasks}
                    setClonedAllTasks={setClonedAllTasks}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                    Draggable={Draggable}
                    placeholder={provided.placeholder}
                    filterTasks={filterTasks}
                    setActiveFilter={setActiveFilter}
                    activeFilter={activeFilter}
                  />
                  <div>{provided.placeholder}</div>
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="footer">
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
