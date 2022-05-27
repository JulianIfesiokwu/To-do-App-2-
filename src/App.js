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

  const toggleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  const toggleStrikeThrough = () => {
    setStrikeThrough(!strikeThrough);
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
    if (task.id === id) {
      setCompleted(!completed);
      toggleStrikeThrough(!strikeThrough);
    }
  };

  return (
    <div className="container">
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
