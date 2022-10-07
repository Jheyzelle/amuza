import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import TasksPage from "./taskspage";
import CreateProjectForm from "./createprojform";

import { root } from "../index"

function LandingPage() {

    let visibleJoinRoom = false;
    let visibleNewProj = false;

    let visibleJoinErr = false;

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
            btnJoinRoom.classList.add('btn-joinroom')
            btnJoinRoom.addEventListener('click', checkRoomCode)

            let landAct = document.querySelector('.landing-action')
            landAct.appendChild(btnJoinRoom)

            visibleJoinRoom = true
        }
    }

    function joinRoom() {
        // #TODO rewrite into proper redirect statement for ReactJS ??
        window.location.assign("/projectinfo")
    }

    function testClientSideLogin(code) {
        // This is a fake room code match only to test navigation flow
        const fMatch = "G315F"
        console.log(`Matching user inputted code ${code}.`)

        if (code.toUpperCase() === fMatch) {
            console.log("Code has been found. You're in!")
            joinRoom()
        } else {
            if (!visibleJoinErr) {
                alertJoinCodeError();
            }
            let errText = document.querySelector("#err-roomcode")
            errText.innerHTML = 'This code was not found.'
            console.log("Code not found. Try again.")
        }
    }

    function checkRoomCode() {
        // Get the room code the user types in
        let inpCode = document.querySelector("#inp-code").value

        // console.log(inpCode)
    
        // Code reqs: 5 characters length
        // numbers and letters only
        // Regex for alphanum and length of 5: ^[A-Za-z0-9]{5}$

        let req = "^[A-Za-z0-9]{5}$"
        if (inpCode.match(req)) {
            console.log("#TODO Checking if code exists in db...")
            // send this code to server to check if exists in db
            // if yes redirect this user to the existing project room page
            // if code not exist prompt to create new project or alert user code does not exist
            testClientSideLogin(inpCode)
            
        } else {
            if (!visibleJoinErr) {
                alertJoinCodeError();
            }
            let errText = document.querySelector("#err-roomcode")
            errText.innerHTML = 'Please enter a valid room code.'
            console.log("Invalid room code.")
        }
    }

    function alertJoinCodeError() {
        let errText = document.createElement('p')
        errText.innerHTML = ''
        errText.setAttribute("id", "err-roomcode")

        let par = document.querySelector('.landing-action')
        par.appendChild(errText)

        visibleJoinErr = true;
    }

    useEffect(() => {

    })

    return (
        <div className="section-flex section-landingpage">
            <section className="land-left">
                <h1 className="landing-title">Amuza</h1>
                <div className="landing-action">
                    <CreateProjectForm></CreateProjectForm>
                    <button id="btn-newprojform" onClick={newProjForm} >Create new project</button>
                    Have a room code?
                    <input id='inp-code' onClick={showBtnJoinRoom} placeholder='Enter valid room code' maxLength={5} required />
                    <p id="err-roomcode"></p>
                </div>
            </section>
            <section className="land-right">
                <h2>What is Amuza?</h2>
                <p>Amuza is a web app that aids development teams with task management tools and promotes self care and wellness to developers.</p>
            </section>
        </div>
    )
}

export default LandingPage