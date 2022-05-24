import "./App.css";
import { useState } from "react";

import HeaderContainer from "./components/header/header.component";
import CreateTask from "./components/create-task/create-task.component";
import TaskList from "./components/TaskList/TaskList.component";

function App() {
  const code = 13;
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const addTask = (e) => {
    if (e.charCode === code) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setAllTasks([...allTasks, newTask]);
      setTask("");
    }
    if (e.charCode === code && e.target.value === "") {
      alert("Please enter task details");
    }
  };

  return (
    <div className="container">
      <div className="to-do">
        <HeaderContainer />
        <CreateTask task={task} addTask={addTask} setTask={setTask} />
        <TaskList item={allTasks} />
      </div>
    </div>
  );
}

export default App;
