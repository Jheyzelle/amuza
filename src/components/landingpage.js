import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import TasksPage from "./taskspage";
function LandingPage() {


    function createNewProj() {

    }

    function enterRoomCode() {

    }

    function addNewMember() {
        let lstTeam = document.querySelector('.lst-mmbrs')
        let inpMmbrName = document.querySelector('#inp-mmbrname')

        let lstName = document.createElement('p')
        lstName.innerHTML = inpMmbrName.value
        lstTeam.appendChild(lstName)

        console.log('hello')
    }

    function newProjForm() {
        let projForm = document.querySelector('.new-proj-form')
        projForm.classList.remove('proj-form-hidden')

    }

    function showBtnEnterRoom() {
        let btnEnterRoom = document.createElement('button')
        btnEnterRoom.style.display = 'block'
    }

    function enterRoom() {

    }
    return (
        <div className="section-flex section-landingpage">
            <h1 className="landing-title">MEEP</h1>

            {<Link to="/taskspage">HEre</Link>}
            <div id="landing-action">

                {/* new project form */}
                <div className="new-proj-form proj-form-hidden">

                    <label id='lbl-projtitle' for="newproj-title">Project Title</label>
                    <input type="text" id="newproj-title" name="newproj-title" />

                    <label id='lbl-projdesc' for="newproj-desc">Description</label>
                    <textarea type="text" id="newproj-desc" name="newproj-desc" />

                    <div className="proj-dates">
                        <label for="newproj-desc">Start</label>
                        <input type="date" name="proj-date-start" id="proj-date-start" ></input>

                        <label for="newproj-desc">End</label>
                        <input type="date" name="proj-date-end" id="proj-date-end" ></input>
                    </div>

                    <div>
                        <p>Members</p>
                        <ul className="lst-mmbrs">
                        </ul>
                        <input type="text" name="mmbr-name" id="inp-mmbrname" placeholder="Add member name" />
                        <button id="btn-add-mmbr" onClick={addNewMember}>Add</button>
                    </div>

                </div>
                {/* ^^^ new project form ^^^ */}

                <button id="btn-show-new-proj-form" onClick={newProjForm} >Create new project</button>

                Have a room code?
                <input id='inp-code' onClick={showBtnEnterRoom} />
                
            </div>

        </div>
    )
}

export default LandingPage