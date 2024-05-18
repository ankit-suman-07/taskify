import React, { useState } from 'react';
import "./Home.css";


import Task from '../../feature-comps/task-comp/Task';
import Notes from '../../feature-comps/notes-comp/Notes';
import Navbar from '../../components/navbar/Navbar';

import TaskGroup from '../../feature-comps/task-group/TaskGroup';
import Main from "../../components/main-page/Main";

const Home = () => {
    const [feature, setFeature] = useState("main");



    return (
        <div>
            <nav>
                <Navbar />
            </nav>
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

export default Home