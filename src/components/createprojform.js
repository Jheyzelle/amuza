function CreateProjectForm() {
    function addNewMember() {
        let lstTeam = document.querySelector('.lst-mmbrs')
        let inpMmbrName = document.querySelector('#inp-mmbrname')

        let lstName = document.createElement('li')
        lstName.innerHTML = inpMmbrName.value
        lstName.addEventListener('click',deleteElm)

        lstTeam.appendChild(lstName)
        inpMmbrName.value = ''
    }

    function deleteElm() {
        this.remove()
        console.log('removed name from member list')
    }
    
    return (
        < div className="new-proj-form proj-form-hidden" >
            {/* new project form */}
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
            {/* ^^^ new project form ^^^ */}
        </div>

    )
}

export default CreateProjectForm