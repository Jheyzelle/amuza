import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import TasksPage from "./taskspage";
function HeaderNav() {

    return (
        <>
        <header className="projnav-header">
                <div className="fl-left">

                    <div className="header-logo"></div>
                    <h1 className="project-title"></h1>
                </div>

                <div className="fl-right">
                    <div className="projmngr">Project Manager<div ></div></div>
                    <div className="projmmbrs">Members Online</div>
                </div>
            </header>
            <nav className="topnav">
                <ul>
                    <li>
                        <Link to='/dashboard' className="lnk"><p>Dashboard</p></Link>
                    </li>
                    <li className="activenavtab">
                        <Link to='/projectinfo' className="lnk"><p>Project Overview</p></Link>
                    </li>

                    <li>
                        <Link className="lnk"><p>Activities</p></Link>
                    </li>

                    <li >
                        <Link to='/' className="lnk"><p>Project Members</p></Link>

                    </li>

                </ul>
            </nav>
        </>
    )
}

export default HeaderNav