import React, { useEffect } from "react";


function TasksPage() {

    function addTask() {
        // get values typed into input areas
        let inpTitle = document.querySelector('#inp-task-title')
        let inpDesc = document.querySelector('#inp-task-desc')
        let inpStat = document.querySelector('#dropdown-status')
        let inpOwner = document.querySelector('#dropdown-task-owner')

        // which column the new task belongs to


        let tbCol = document.querySelector('.' + inpStat.value)

        let taskCard = document.createElement('div')
        taskCard.classList.add('task-card')
        taskCard.setAttribute('draggable', true)

        let taskTitle = document.createElement('h5')
        let taskDesc = document.createElement('p')
        let taskOwner = document.createElement('p')

        taskTitle.innerHTML = inpTitle.value
        taskDesc.innerHTML = inpDesc.value
        taskOwner.innerHTML = inpOwner.value

        taskCard.appendChild(taskTitle)
        taskCard.appendChild(taskOwner)
        taskCard.appendChild(taskDesc)

        tbCol.appendChild(taskCard)

        inpTitle.value = ''
        inpDesc.value = ''

    }
    return (
        <div className='section-flex section-taskspage'>
            <h1>Project Tasks</h1>

            <div className="div-add-task">
                <input id='inp-task-title' placeholder="Add new task" />
                <textarea id='inp-task-desc' placeholder="Task description"></textarea>

                <div>
                    <label htmlFor="drop-status">Status</label>
                    <select name='drop-status' id="dropdown-status">
                        <option value='tb-todo'>To Do</option>
                        <option value='tb-ipr'>In Progress</option>
                        <option value='tb-done'>Done</option>
                    </select>
                    <label htmlFor="drop-task-owner">Owner</label>
                    <select name='drop-task-owner' id="dropdown-task-owner">
                        <option value='Daniel'>Daniel</option>
                        <option value='Harsh'>Harsh</option>
                        <option value='Jazelle'>Jazelle</option>
                        <option value='Gerolle'>Gerolle</option>
                    </select>
                </div>

                <button id="btn-addtask" onClick={addTask}>Add Task</button>
            </div>

            <div className="task-board">
                <div className="tb-col tb-todo">
                    <h3>To Do</h3>
                </div>
                <div className="tb-col tb-ipr">
                    <h3>In Progress</h3>
                </div>
                <div className="tb-col tb-done">
                    <h3>Done</h3>
                </div>
            </div>
            {/* 
            <form onSubmit={sendMsg}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message bonfire' />
                <button className='btn-submit' type='submit' >Add task</button>
            </form> */}


            <div className='tasks-list'></div>

        </div>
    )
}

// add task - click btn - type task - add task elm to list

export default TasksPage


// task
//     task has name, description

// color marker not started, 