import React from 'react';
import "./styles/Project.css"

const Project = (props) => {
    return (
        <div className='project' link={props.link}>
                <img src={props.image} alt={props.alt} />
                <div className="content">
                    <h2>{props.header}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
    );
};

export default Project;
