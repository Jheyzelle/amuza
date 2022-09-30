import React, { useEffect } from "react";


function Timer() {

    // ========== ========== ========== ========== ==========
    // timer function ref
    // https://jsfiddle.net/wr1ua0db/17/

    let t = null
    let pageLoaded = true;

    function timer(duration) {

        var timer = duration, minutes, seconds;
        t = setInterval(function () {
            let display = document.querySelector('.countdown');

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // console.log(minutes + ":" + seconds);
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                // timer = duration;
                stopInt();
                // clearInterval(this)
                display.textContent = 'yay';
            }
        }, 1000);

    }

    function stopInt() {
        clearInterval(t)
    }

    function startTimer(tMin) {
        let time = convertMinToSec(tMin)
        timer(time);
    };

    // ========== ========== ========== ========== ==========

    function convertMinToSec(min) {
        let sec = 0
        sec = min * 60
        return sec
    }

    function convertSecToMin(sec) {
        let min = 0
        min = sec / 60
        return sec
    }

    function setOfTimers() {

    }
    
    useEffect(() => {
        if (t && pageLoaded) {
            console.log('hello')
            stopInt()
            pageLoaded = false
        }
    }, [])

    return (
        <>
            <div className="section-timer section-flex">
                <h2>Task 5 : Connect to db </h2>
                <div className="progress-step">
                    <div className="p-step"></div>
                    <div className="p-step"></div>
                    <div className="p-step"></div>
                    <div className="p-step"></div>
                    <div className="p-step"></div>
                </div>
                <div className="progress-circle">

                    <div className="circle-inner">
                        <div className="inner-text">
                            <p className="countdown">00:00</p>
                            <p className="focus">Focus</p>
                        </div>
                    </div>

                </div>

                <div className="session-text">
                    <p className="session-number">1 of 5</p>
                    <p>Session</p>
                </div>
                <button id="btn-timer" onClick={startTimer(0.2)}>Start</button>

            </div>
        </>
    )
}

export default Timer