import React, { useState } from 'react';
import Task from './feature-comps/task-comp/Task';
import Notes from './feature-comps/notes-comp/Notes';

const App = () => {
  const [feature, setFeature] = useState("main");
  return (
    <div>
      <header>
        Taskify
      </header>
      <Task />
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default App