import React, { useState } from 'react';
import Task from './feature-comps/task-comp/Task';
import Notes from './feature-comps/notes-comp/Notes';
import Main from './components/main-page/Main';

import TaskGroup from './feature-comps/task-group/TaskGroup';

const App = () => {
  const [feature, setFeature] = useState("main");



  return (
    <div>
      <header>
        Taskify
      </header>
      <div>
        <button onClick={() => setFeature("main")} >Main</button>
        <button onClick={() => setFeature("task")} >Task btn</button>
        <button onClick={() => setFeature("notes")} >Notes btn</button>
      </div>
      {
        feature == "main" ? <Main />
          : (feature == "task" ? <TaskGroup /> : <Notes />)
      }
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default App