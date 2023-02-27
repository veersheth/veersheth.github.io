import React from "react";
import "./styles/AboutMe.css"

import Skill from "./Skill";

function AboutMe () {
    return(
        <section id="about-me">
                <h1>About me</h1>
                <ul className="skill-list">
                    <Skill 
                        className="student"
                        heading="Student"
                        content="I am a first year student at the ^University^, currently studying for my Bachelor's Degree in Computer Science. Computers have fascinated me from an early age, and I doubt said fascination will ever stop. This makes me confident in the fact that the title of student is a permanent one for me. "
                    />
                    <Skill 
                        className="webdev"
                        heading="Web Developer"
                        content="I am fluent at HTML, CSS, JavaScript, React, Bootstrap as well as Git(Hub), Electron and NodeJS. I started learning web dev at the age of 16, and have kept up my passion for designing websites with minimalism at the forefront. I design websites with easy-to-use and straightforward user interfaces."
                    />
                    <Skill 
                        className="programmer"
                        heading="Programmer"
                        content="Being a Computer Science student, of course I'm a programmer. I often write snippets of code that I believe can smoothen my computing experience. I'm experienced at Python, JavaScript, Markdown and Git."
                    />
                    <Skill 
                        className="artist"
                        heading="Artist"
                        content="Experimenting with GIMP in the 9th grade helped me grow my love for digital art. Combining that with my passion for photography made me start my Instagram page where I upload my work."
                    />
                                        
                    
                </ul>
        </section>
    )
};

export default AboutMe;
