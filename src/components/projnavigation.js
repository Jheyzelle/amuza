import { useEffect } from "react"
import { Link } from 'react-router-dom'
import HeaderNav from "./navbar"

function ProjectNavigation() {
    let componentTitle = 'ProjectNavigation'

    let listProjData = ['Hack & Wellness', 'September 25, 2022', 'Daniel Watchon', 'Focusing on health and wellness, build an app for mental well being.', 'University students', '$1']

    useEffect(() => {
        let pTitle = document.querySelector('.project-title')
        pTitle.innerHTML = 'The Amuza Project'
    })

    function setProjOv(datalist) {
        let uiProjData = document.querySelectorAll('.list-proj-data .pdata')
        console.log(uiProjData)

        for (let i = 0; i < uiProjData.length; i++) {
            console.log('hello' + uiProjData[i])

            uiProjData[i].innerHTML = datalist[i]
        }
    }

    function addTask() {
        let x = document.querySelector('#titletask')
        let y = document.querySelector('#desctask')
        let p = document.querySelector('.taskslst')
  
        
        let e = document.createElement('li')
        e.innerHTML = `Task 7: ${x.value}<button className="strtask">Start Task</button>`

        let b = document.createElement('button')
        b.

        p.appendChild(e)

    }

    useEffect(() => {
        setProjOv(listProjData)
    })

    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="proverview">
                <div className="part-sec">
                    {/* Project timeline */}
                    <section className="sec-prog">
                        <h3 className="sec-title">Project Timeline</h3>

                        
                        <div className="prog">

                            <div className="progressbar">
                                <div className="percent">

                                </div>

                            </div>

                            <ul className="pbarmilestones">
                                <li>
                                    <div className="msc">1</div>
                                    <span>Milestone 1</span>
                                </li>
                                <li>
                                    <div className="msc">2</div>
                                    <span>Milestone 2</span>
                                </li>
                                <li>
                                    <div className="msc">3</div>
                                    <span>Milestone 3</span>
                                </li>
                                <li>
                                    <div className="msc">4</div>
                                    <span>Milestone 4</span>
                                </li>
                                <li>
                                    <div className="msc">5</div>
                                    <span>Milestone 5</span>
                                </li>
                            </ul>

                        </div>

                    </section>

                </div>
                <div className="part-bot">
                    <div className="part-sec ps-left">
                        <section className="sec-projov">
                            {/* Project Overview */}

                            <h3 className="sec-title">Project Overview</h3>
                            <div className="card-sec">
                                <ul className="list-proj-data">
                                    <li className="sec"><span className="hlbl">Project Name: </span><span className="pdata"></span></li>
                                    <li className="sec"><span className="hlbl">Deadline: </span><span className="pdata"></span></li>
                                    <li className="sec"><span className="hlbl">Project Manager: </span><span className="pdata"></span></li>
                                    <li className="sec"><span className="hlbl">Problem: </span><span className="pdata"></span></li>
                                    <li className="sec"><span className="hlbl">Target Audience: </span><span className="pdata"></span></li>
                                    <li className="sec"><span className="hlbl">Budget: </span><span className="pdata"></span></li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            {/* Task List */}
                            <h3 className="sec-title">Task List</h3>
                            <div className="card-sec card-addtask">
                                <label htmlFor="addtask" className="hlbl">Add task</label>
                                <input name="addtask" id="titletask"/>
                                <label htmlFor="adddesc" className="hlbl">Task description</label>
                                <textarea name="adddesc" id="desctask"/>
                                <button id="pbtnaddtask" onClick={addTask}>Add task</button>
                            </div>
                            <div className="card-sec card-tasks">
                                <ul className="taskslst">
                                    <li>Task 5: Connect database to frontend <button className="strtask">Start Task</button></li>
                                    <li>Task 6: Debug <button className="strtask">Start Task</button></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="part-sec ps-right">
                        {/* Task List */}
                        <section className="sec-compt">
                            <h3 className="sec-title">Completed Tasks</h3>
                            <div className="card-sec">
                                <ul className="compl-tasks">
                                    <div id="progline">
                                    </div>
                                    <li><div className="checkcirc"></div><span>Task 1: Create wireframes</span></li>
                                    <li><div className="checkcirc"></div><span>Task 2: Obtain image and video assets</span></li>
                                    <li><div className="checkcirc"></div><span>Task 3: Create mockup</span></li>
                                    <li><div className="checkcirc"></div><span>Task 4: Code website</span></li>
                                    <li><div className="checkcirc"></div><span>Task 5: Create database</span></li>

                                </ul>
                            </div>
                        </section>
                    </div>

                </div>

            </div>
        </div>

    )

}

export default ProjectNavigation