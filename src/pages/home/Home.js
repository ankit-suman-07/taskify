import React, { useState } from 'react';
import "./Home.css";


import Task from '../../feature-comps/task-comp/Task';
import Notes from '../../feature-comps/notes-comp/Notes';
import Navbar from '../../components/navbar/Navbar';
import NotesGroup from '../../feature-comps/notes-group/NotesGroup';

import TaskGroup from '../../feature-comps/task-group/TaskGroup';
import Main from "../../components/main-page/Main";

import HomeIcon from "../../assets/home.png";
import TodoIcon from "../../assets/todo.png";
import NotesIcon from "../../assets/post-it.png";
import DocsIcon from "../../assets/document.png";

const Home = () => {
    const [feature, setFeature] = useState("main");
    const components = {
        "main": <Main />,
        "task": <TaskGroup />,
        "notes": <NotesGroup />,
        "docs": <Notes />
    }


    return (
        <div className='home' >
            <nav>
                <Navbar />
            </nav>
            <div className='floating-menu-outer' >
                <div className='floating-menu' >
                    <button onClick={() => setFeature("main")}
                        className='floating-menu-btn'
                        id={feature === "main" ? "active-btn" : ""}>
                        <img src={HomeIcon} alt='home-icon' />
                    </button>
                    <button onClick={() => setFeature("task")}
                        className='floating-menu-btn'
                        id={feature === "task" ? "active-btn" : ""}>
                        <img src={TodoIcon} alt='todo-icon' />
                    </button>
                    <button onClick={() => setFeature("notes")}
                        className='floating-menu-btn'
                        id={feature === "notes" ? "active-btn" : ""}>
                        <img src={NotesIcon} alt='notes-icon' />
                    </button>
                    <button onClick={() => setFeature("docs")}
                        className='floating-menu-btn'
                        id={feature === "docs" ? "active-btn" : ""}>
                        <img src={DocsIcon} alt='document-icon' />
                    </button>
                </div>
            </div>

            {
                components[feature]
            }
            {/* <footer>
                Footer
            </footer> */}
        </div>
    )
}

export default Home