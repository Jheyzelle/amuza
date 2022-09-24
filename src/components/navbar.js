import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import TasksPage from "./taskspage";
function Navbar() {

    return (
        <div className="topnav">
            
            <h1>Site logo</h1>
            <div>
                <ul>
                    <li>Dashboard</li>
                    <li>Tasks</li>
                    <li>Clock</li>
                    <li>Messages</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar