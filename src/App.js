import { useState } from "react";

const App = () => {
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


  return (
    <div>
      Taskify
      <div>
        <input type="text" placeholder="Enter Task" />
        <button>Add</button>
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
    </div>
  );
}

export default App;
