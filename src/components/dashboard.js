import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

function Dashboard() {

    function clock() {
        let date = new Date()

        let hr = date.getHours();
        let min = date.getMinutes();

        let clock = document.querySelector('.db-clock')
        let clockTime = document.querySelector('.time')

        clockTime.innerHTML = `${hr}:${min}`

        let months = ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December']

        let day = date.getDate()
        let month = date.getMonth()
        let yr = date.getFullYear()



        let clockDate = document.querySelector('.date')

        clockDate.innerHTML = `${months[month]} ${day}, ${yr}`
    }

    useEffect(() => {
        clock()
        setInterval(clock, 1000)
    })


    return (
            <div class='content section-flex section-dashboard'>
                <h2>Dashboard</h2>

                <div className="widgets">
                    
                    <Link to='/tasks' class='db-sec'>
                    <section class='db-tasks'>
                        <h3>Your Tasks</h3>
                        <p>You currently do not have any tasks assigned.</p>
                    </section>
                    </Link>

                    <Link to='/tasks' class='db-sec'>
                    <section class='db-clock'>
                        {/* Time */}
                        <h3>Time</h3>
                        <div>
                            <div className='time'></div>
                            <div className='date'></div>
                        </div>
                    </section>
                    </Link>

                    <Link to='/tasks' class='db-sec'>
                    <section class='db-team'>
                        {/* Time */}
                        <h3>Team</h3>
                        <p>Add some team members!</p>
                    </section>
                    </Link>

                    <Link to='/tasks' class='db-sec'>
                    <section class='db-activities'>
                        {/* Time */}
                        <h3>Activities</h3>
                        <p>Interact with your team through these fun activities.</p>
                    </section>
                    </Link>

                    <Link to='/tasks' class='db-sec'>
                    <section class='db-reminders'>
                        <h3>Reminders</h3>
                        <p>These are your reminders.</p>
                    </section>
                    </Link>

                    <Link to='/projinfo' class='db-sec'>
                    <section class='db-projinfo'>
                        <h3>Project Information</h3>
                        <p>Sunt pariatur dolore fugiat anim. Consequat elit excepteur aute mollit est ipsum velit ipsum minim ipsum do do qui aliqua. Dolor elit pariatur consectetur deserunt amet dolore tempor exercitation dolor in minim. Sint incididunt enim laboris fugiat sit ut mollit irure anim esse sit anim. Enim veniam id irure minim ipsum dolore ea quis culpa ea esse irure dolore incididunt. Esse in magna ex mollit enim ea irure commodo mollit id ut exercitation. Qui ad et id pariatur consectetur est consequat ipsum commodo esse ad nisi nostrud elit.</p>
                    </section>
                    </Link>

                </div>
                {/* <Link to='/'>Tasks</Link>
            <Link to='/projinfo'>Project Information</Link>
            <Link to='/'>Activities</Link> */}
            </div>
    )
}

export default Dashboard