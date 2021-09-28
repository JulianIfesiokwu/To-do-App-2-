import './App.css';

import HeaderContainer from './components/header/header.component';
import CreateTask from './components/create-task/create-task.component';

function App() {
  return (
    <div className='container'>
      <div className='to-do'>
        <HeaderContainer />

        <CreateTask />
      </div>

    </div>
  );
}

export default App;
