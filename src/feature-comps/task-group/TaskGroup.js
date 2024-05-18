import React, { useState } from 'react'
import Task from '../task-comp/Task'
import "./TaskGroup.css";

import AddIcon from "../../assets/addition.png";

const TaskGroup = () => {
    const [taskListName, setTaskListName] = useState(["mydem,o", "old school", "new tution"]);
    const [showInput, setShowInput] = useState(false);
    const [groupName, setGroupName] = useState("");

    const addGroup = (currentTask) => {
        if (currentTask.trim() !== "") {
            if (taskListName.some(group => group.toLowerCase() === currentTask.toLowerCase())) {
                console.log("Already Exists");
            } else {
                setTaskListName([currentTask, ...taskListName]);
                setGroupName("");
                setShowInput(!showInput);
            }
        }
    };

    const deleteOne = (nameToDelete) => {
        setTaskListName(taskListName.filter(name => name !== nameToDelete));
    };

    return (
        <div className='task-group-outer' >
            <div className='task-group-add' >
                <button onClick={() => setShowInput(!showInput)} className='task-group-add-btn' >
                    <img src={AddIcon} alt='add-icon' />
                </button>
                {
                    showInput
                    &&
                    <div className='task-group-input' >
                        <input
                            type="text"
                            placeholder="Enter Group Name"
                            value={groupName}
                            onChange={(event) => setGroupName(event.target.value)}
                        />
                        <button onClick={() => addGroup(groupName)}>Add Group</button>
                    </div>
                }
                <div className='page-feature' >
                    To-Dos'
                </div>
            </div>
            <div className='task-group' >
            {
                taskListName.map((name) => {
                    return <div className='task-div' >
                        <button onClick={() => deleteOne(name)} >
                            Remove Lists
                        </button>
                        <Task name={name} />
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default TaskGroup