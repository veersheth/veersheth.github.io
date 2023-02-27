import React from 'react';
import "./styles/Skill.css"

const Skill = (props) => {
    return (
        <li className={`skill ${props.className}`}>
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
        </li>
    );
};

export default Skill;
