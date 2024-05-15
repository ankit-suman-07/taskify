import React, { useState } from 'react'
import Task from '../task-comp/Task'

const TaskGroup = () => {
    const [taskListName, setTaskListName] = useState(["mydem,o", "old school", "new tution"]);
    return (
        <div>
            {
                taskListName.map((name) => {
                    return <Task name={name} />
                })
            }
        </div>
    )
}

export default TaskGroup