import "./App.css";

import HeaderContainer from "./components/header/header.component";
import CreateTask from "./components/create-task/create-task.component";
import TaskList from "./components/TaskList/TaskList.component";

function App() {
  return (
    <div className="container">
      <div className="to-do">
        <HeaderContainer />

        <CreateTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
