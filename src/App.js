import { useState } from "react";

const App = () => {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([
    { task: "Task 1", selected: false },
    { task: "Snorkelling", selected: false },
    { task: "Scuba Dive", selected: false },
    { task: "Task 19", selected: false },
    { task: "New Task", selected: false }
  ]);

  const toggleSelected = (task) => {
    setTasks(tasks.map((item) => {
      if (task === item.task) {
        return { ...item, selected: !item.selected };
      }
      return item;
    }));
  };

  const deleteSelected = () => {
    setTasks(tasks.filter(item => !item.selected));
  };

  const cancelSelected = () => {
    setTasks(tasks.map(item => { item.task = item.task, selected = false }));
  };

  const addTask = (currentTask) => {
    if (currentTask.trim() !== "") {
      setTasks([...tasks, { task: currentTask, selected: false }]);
      setCurrentTask(""); // Optional: Clear the input field after adding a task
    }
  };


  return (
    <div>
      Taskify
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          value={currentTask}
          onChange={(event) => setCurrentTask(event.target.value)}
        />
        <button onClick={() => addTask(currentTask)}>Add</button>
      </div>
      <div>
        {
          // genders.forEach((gender) => console.log(gender));
          tasks && tasks.map((item, index) => {
            return (
              <div key={index} >
                <button>
                  {
                    item.selected ? <span>Selected</span> : <span>Not</span>
                  }
                </button>
                {item.task}
                <button onClick={() => toggleSelected(item.task)}>Toggle</button>
              </div>
            )

          })
        }
      </div>
      <button onClick={deleteSelected}>
        Delete Tasks
      </button>
      <button onClick={cancelSelected}>
        Cancel
      </button>
    </div>
  );
}

export default App;
