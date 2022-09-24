import { useEffect } from "react"
import { Link } from 'react-router-dom'
import HeaderNav from "./navbar"

function ProjectNavigation() {
    let componentTitle = 'ProjectNavigation'

    useEffect(() => {
        let pTitle = document.querySelector('.project-title')
        pTitle.innerHTML = 'The Amuza Project'
    })

    return (
        <div>
            {/* <p className="component-check">Hey, if you see this, the {componentTitle} component has loaded.</p> */}

            <HeaderNav></HeaderNav>
            <div></div>
            <p>

            </p>
        </div>

    )

}

export default ProjectNavigation