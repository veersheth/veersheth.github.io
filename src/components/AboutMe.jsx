import React from "react";
import "./styles/AboutMe.scss"

import Skill from "./Skill";

function AboutMe () {
    return(
        <section id="about-me">
                <h1>About me</h1>
                    <ul className="skill-list">
                        <Skill 
                            hover="🤓"
                            className="interactable student"
                            heading="Student"
                            content="I am a recent highschool graduate with a keen interest in technology. Currently, I am awaiting for my University applications to pursue a Bachelor's Degree in Computer Science. In this ever-changing field, I am confident that the title of 'student' is a permanent one for me."
                        />
                        <Skill 
                            hover="🌐"
                            className="interactable webdev"
                            heading="Web Developer"
                            content="I am fluent at HTML, CSS, JavaScript, React, Bootstrap as well as Git(Hub), Electron and NodeJS. I started learning web dev at the age of 16, and have kept up my passion for designing websites with minimalism at the forefront. I design websites with easy-to-use and straightforward user interfaces."
                        />
                        <Skill 
                             hover="⌨️"
                            className="interactable programmer"
                            heading="Programmer"
                            content="Being a Computer Science student, of course I'm a programmer. I often write snippets of code that I believe can smoothen my computing experience. I'm experienced at Python, JavaScript, Markdown and Git."
                        />
                        <Skill 
                            hover="🎨"
                            className="interactable artist"
                            heading="Artist"
                            content="Experimenting with GIMP in the 9th grade helped me grow my love for digital art. Combining that with my passion for photography made me start my Instagram page where I upload my work."
                        />
                    </ul>
            </section>

    )
};

export default AboutMe;
