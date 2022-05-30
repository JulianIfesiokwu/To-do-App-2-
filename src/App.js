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
  const [completed, setCompleted] = useState(false);
  const [theme, setTheme] = useState(false);
  const [strikeThrough, setStrikeThrough] = useState(false);

  const handleOnDragEnd = (result) => {
    console.log(result);
    const items = Array.from(allTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setAllTasks(items);
  };

  const toggleTheme = (theme) => {
    setTheme(!theme);
  };

  const addTask = (e) => {
    if (e.charCode === code) {
      const newTask = {
        id: new Date().getTime().toString(),
        title: task,
        completed: false,
      };
      setAllTasks([...allTasks, newTask]);
      setTask("");
    }
    if (e.charCode === code && e.target.value === "") {
      alert("Please enter task details");
      return;
    }
  };

  const deleteTask = (id) => {
    setAllTasks(allTasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    const specificItem = allTasks.find((task) => task.id === id);
    console.log(specificItem);
    if (task.id === id) {
      setCompleted(!completed);
      setStrikeThrough(!strikeThrough);
    }
    if (task.id !== id) {
      return;
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
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                    completed={completed}
                    Draggable={Draggable}
                    placeholder={provided.placeholder}
                  />
                  {provided.placeholder}
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
