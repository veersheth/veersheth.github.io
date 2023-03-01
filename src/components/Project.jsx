import React from 'react';
import './styles/Project.css'

const Project = (props) => {

    const mysvg = "<svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'> <path d='M 212.493 128.584 L 356.493 128.584 C 369.793 128.584 380.493 139.284 380.493 152.584 L 380.493 296.584 C 380.493 306.284 374.693 315.084 365.693 318.784 C 356.693 322.484 346.393 320.484 339.493 313.584 L 300.493 274.584 L 213.493 361.584 C 204.093 370.984 188.893 370.984 179.593 361.584 L 147.593 329.584 C 138.193 320.184 138.193 304.984 147.593 295.684 L 234.593 208.684 L 195.493 169.584 C 188.593 162.684 186.593 152.384 190.293 143.384 C 193.993 134.384 202.793 128.584 212.493 128.584 Z'/>  </svg>"

    return (
        <div className='interactable project has-link' data-link={props.link} data-hover={mysvg}>
                <img src={props.image} alt={props.alt} />
                <div className='content'>
                    <h2>{props.header}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
    );
};

export default Project;
