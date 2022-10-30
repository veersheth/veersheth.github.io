import React from "react"
import "./css/Skill.css"

function Skill(props){
    return (
        <div className="skill">
            <div className="skill-header ">
                <h1>{props.header}</h1>
            </div>
            <div className="skill-content">
                <p className="">{props.content}</p>
            </div>
        </div>
    )
}

export default Skill