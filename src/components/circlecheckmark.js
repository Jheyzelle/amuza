import { useEffect } from "react"

function CircleCheckMark() {
    
    function setVal(taskNum, taskDesc) {
        let text = `Task ${taskNum}: ${taskDesc}`
        let span = document.querySelector('.inj')
        console.log(span)
        span.innerHTML = text
    }

    useEffect(()=>{
    })

    return (
        <>
            <li><div className="checkcirc"></div><span className="inj"></span></li>
        </>
    )
}

export default CircleCheckMark