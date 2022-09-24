import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import TasksPage from "./taskspage";
function LandingPage() {

    let visibleJoinRoom = false;
    let visibleNewProj = false;

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

    function showBtnJoinRoom() {
        if (!visibleJoinRoom) {

            // create join room button
            let btnJoinRoom = document.createElement('button')

            btnJoinRoom.innerHTML = 'Join Room'
            btnJoinRoom.setAttribute('id', 'btn-joinroom')
            btnJoinRoom.classList.add('oks')
            btnJoinRoom.addEventListener('click', joinRoom)

            let landAct = document.querySelector('.landing-action')
            landAct.appendChild(btnJoinRoom)

            visibleJoinRoom = true
        }
    }

    function joinRoom() {

        // TODO: Validate ROOM CODE
        window.location.assign("/dashboard")
    }

    return (
        <div className="section-flex section-landingpage">
            <h1 className="landing-title">MEEP</h1>

            <div className="landing-action">

                {/* new project form */}
                <div className="new-proj-form proj-form-hidden">

                    <label id='lbl-projtitle' htmlFor="newproj-title">Project Title</label>
                    <input type="text" id="newproj-title" name="newproj-title" />

                    <label id='lbl-projdesc' htmlFor="newproj-desc">Description</label>
                    <textarea type="text" id="newproj-desc" name="newproj-desc" />

                    <div className="proj-dates">
                        <label htmlFor="proj-date-start">Start</label>
                        <input type="date" name="proj-date-start" id="proj-date-start" ></input>

                        <label htmlFor="proj-date-end">End</label>
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

                <button id="btn-newprojform" onClick={newProjForm} >Create new project</button>

                Have a room code?
                <input id='inp-code' onClick={showBtnJoinRoom} />
                

            
            </div>

        </div>
    )
}

export default LandingPage