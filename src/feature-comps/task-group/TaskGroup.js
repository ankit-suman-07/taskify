import React, { useState } from 'react'
import Task from '../task-comp/Task'

const TaskGroup = () => {
    const [taskListName, setTaskListName] = useState(["mydem,o", "old school", "new tution"]);
    const [showInput, setShowInput] = useState(true);
    const [groupName, setGroupName] = useState("");

    const addGroup = (currentTask) => {
        if (currentTask.trim() !== "") {
            if (taskListName.some(group => group.toLowerCase() === currentTask.toLowerCase())) {
                console.log("Already Exists");
            } else {
                setTaskListName([...taskListName, currentTask]);
                setGroupName("");
            }
        }
    };

    const deleteOne = (nameToDelete) => {
        setTaskListName(taskListName.filter(name => name !== nameToDelete));
    };

    return (
        <div>
            <button onClick={() => setShowInput(!showInput)} >
                Add Group
            </button>
            {
                showInput
                &&
                <div>
                    <input
                        type="text"
                        placeholder="Enter Group Name"
                        value={groupName}
                        onChange={(event) => setGroupName(event.target.value)}
                    />
                    <button onClick={() => addGroup(groupName)}>Add Group</button>
                </div>
            }

            {
                taskListName.map((name) => {
                    return <>
                        <button onClick={() => deleteOne(name)} >
                            Remove Lists
                        </button>
                        <Task name={name} />
                    </>
                })
            }
        </div>
    )
}

export default TaskGroup