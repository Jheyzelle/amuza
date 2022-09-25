import { useEffect } from "react"
import { Link } from 'react-router-dom'
import HeaderNav from "./navbar"

function ProjectNavigation() {
    let componentTitle = 'ProjectNavigation'

    let listProjData = ['Hack & Wellness', 'September 25, 2022', 'Daniel Watchon', 'Learn new technologies', 'University students', '$1']

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

    useEffect(()=> {
        setProjOv(listProjData)
    })

    return (
        <div>
            <HeaderNav></HeaderNav>
            <div className="proverview">
                <div>
                    {/* Project timeline */}
                    <section>

                        <div className="progressbar">
                            <div className="percent">

                            </div>
                        </div>

                        <div>
                            Milestone 1
                        </div>
                        <div>
                            Milestone 2
                        </div>
                        <div>
                            Milestone 3
                        </div>
                        <div>
                            Milestone 4
                        </div>
                        <div>
                            Milestone 5
                        </div>

                    </section>

                </div>
                <div>
                    <div>
                        <section className="sec-projov">
                            {/* Project Overview */}

                            <h3 className="sec-title">Project Overview</h3>
                            <div>
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
                            <div>
                                <label htmlFor="addtask" className="hlbl">Add task</label>
                                <input name="addtask"/>
                                <label htmlFor="adddesc" className="hlbl">Task description</label>
                                <textarea name="adddesc"/>
                            </div>
                        </section>
                    </div>
                    <div>
                        {/* Task List */}
                        <section>
                            <h3 className="sec-title">Completed Tasks</h3>
                        </section>
                    </div>

                </div>

            </div>
        </div>

    )

}

export default ProjectNavigation