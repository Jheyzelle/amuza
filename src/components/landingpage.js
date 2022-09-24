import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import TasksPage from "./taskspage";
import CreateProjectForm from "./createprojform";

function LandingPage() {

    let visibleJoinRoom = false;
    let visibleNewProj = false;


    function enterRoomCode() {

    }

    function newProjForm() {
        let projForm = document.querySelector('.new-proj-form')
        projForm.classList.remove('proj-form-hidden')

    }

    function createNewProj() {

    }

    function showBtnJoinRoom() {
        if (!visibleJoinRoom) {

            // create join room button
            let btnJoinRoom = document.createElement('button')

            btnJoinRoom.innerHTML = 'Join Room'
            btnJoinRoom.setAttribute('id', 'btn-joinroom')
            btnJoinRoom.classList.add('btn-joinroom')
            btnJoinRoom.addEventListener('click', joinRoom)

            let landAct = document.querySelector('.landing-action')
            landAct.appendChild(btnJoinRoom)

            visibleJoinRoom = true
        }
    }

    function joinRoom() {

        // TODO: Validate ROOM CODE
        window.location.assign("/timer")
    }

    return (
        <div className="section-flex section-landingpage">
            <section className="land-left">
                <h1 className="landing-title">MEEP</h1>
                <div className="landing-action">
                    <CreateProjectForm></CreateProjectForm>
                    <button id="btn-newprojform" onClick={newProjForm} >Create new project</button>

                    Have a room code?
                    <input id='inp-code' onClick={showBtnJoinRoom} placeholder='Enter valid room code'/>
                </div>
            </section>
            <section className="land-right">
                <h2>What is Meep?</h2>
                <p>Meep is a web app that aids development teams with task management tools and promotes self care and wellness to developers.</p>

            </section>
        </div>
    )
}

export default LandingPage