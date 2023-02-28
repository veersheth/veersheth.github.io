import React from 'react';
import './styles/Project.css'

const Project = (props) => {
    return (
        <div className='interactable project' link={props.link} data-hover="<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z'/></svg>">
                <img src={props.image} alt={props.alt} />
                <div className='content'>
                    <h2>{props.header}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
    );
};

export default Project;
