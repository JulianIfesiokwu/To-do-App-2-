import "./App.css";
import { useState } from "react";

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

  const toggleTheme = (theme) => {
    setTheme(!theme);
    console.log("yas");
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

  const toggleCompleted = (task, id) => {
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
        <TaskList
          allTasks={allTasks}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          completed={completed}
        />
      </div>
      <div className="footer">
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
