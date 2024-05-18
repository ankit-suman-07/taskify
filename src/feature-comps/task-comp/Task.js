import { useState } from "react";
import "./Task.css";

import TickIcon from "../../assets/tick.png";

const Task = ({ name }) => {
    const [currentTask, setCurrentTask] = useState("");
    const [clicked, setClicked] = useState(false);
    const [tasks, setTasks] = useState([
        { task: "Task 1", selected: false, line: false },
        { task: "Snorkelling", selected: false, line: false },
        { task: "Scuba Dive", selected: false, line: false },
        { task: "Task 19", selected: false, line: false },
        { task: "New Task", selected: false, line: false }
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
        setClicked(!clicked);
    };

    const deleteOne = (taskToDelete) => {
        setTasks(tasks.map(item => {
            if (taskToDelete.task === item.task) {
                return { ...item, line: true };
            }
            return item;
        }));
    };

    const cancelSelected = () => {
        setTasks(tasks.map(item => ({ task: item.task, selected: false, line: item.line })));
    };


    const addTask = (currentTask) => {
        if (currentTask.trim() !== "") {
            setTasks([...tasks, { task: currentTask, selected: false, line: false }]);
            setCurrentTask(""); // Optional: Clear the input field after adding a task
        }
    };


    return (
        <div className="task-outer" >
            <div className="task-header" >
                {name}
            </div>
            <div className="task-input" >
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={currentTask}
                    onChange={(event) => setCurrentTask(event.target.value)}

                />
                <button onClick={() => addTask(currentTask)} className="task-input-add-btn" >
                    Add
                </button>
            </div>
            <div>
                {
                    // genders.forEach((gender) => console.log(gender));
                    tasks && tasks.map((item, index) => {
                        return (
                            <div key={index} className="task-individual-div" id={item.line ? "line-through-disable" : ""}>
                                <button onClick={() => toggleSelected(item.task)} className="task-toggle-btn" >
                                    {
                                        item.selected ? <div className="toggle-selected" ></div> : <div className="toggle-not-selected"  ></div>
                                    }
                                </button>
                                <span className={item.line ? "line-through" : ""} >
                                    {item.task}
                                </span>

                                <button onClick={() => deleteOne(item, index)} className="task-complete-btn" >
                                    <img src={TickIcon} alt="tick-icon" />
                                </button>
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

export default Task;
