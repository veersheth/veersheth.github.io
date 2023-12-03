import React from 'react';
import "./styles/Skill.scss"

const Skill = (props) => {
    return (
        <div className={`skill ${props.className}`} data-hover={props.hover}>
            <h2>{props.heading}</h2>
            <p>{props.content}</p>
        </div>
    );
};

export default Skill;
