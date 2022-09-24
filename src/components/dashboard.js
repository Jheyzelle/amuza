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

        let day =date.getDate()
        let month =date.getMonth()
        let yr =date.getYear()

        let clockDate = document.querySelector('.date')

    }

    useEffect(() => {
        clock()
        setInterval(clock, 1000)
    })


    return (
        <div>
            <div class='content section-flex'>
                <h2>Dashboard</h2>

                <section class='db-sec db-tasks'>
                    <h3>Your Tasks</h3>
                    <p>You currently do not have any tasks assigned.</p>
                </section>

                <section class='db-sec db-clock'>
                    {/* Time */}
                    <h3>Time</h3>
                    <div>
                        <div className='time'>00:00 A.M.</div>
                        <div className='date'>Friday, September 23, 2022</div>
                    </div>
                </section>

                <section>
                    {/* Time */}
                    <h3>Time</h3>
                    <p>You currently do not have any tasks assigned.</p>
                </section>

                {/* <Link to='/'>Tasks</Link>
            <Link to='/projinfo'>Project Information</Link>
            <Link to='/'>Activities</Link> */}
            </div>
        </div>


    )
}

export default Dashboard