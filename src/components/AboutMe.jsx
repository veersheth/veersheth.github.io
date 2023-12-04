import React from "react";
import "./styles/AboutMe.scss"
import "./styles/SkillAnimations.scss"

import Skill from "./Skill";

function AboutMe () {
    return(
        <section id="about-me">
            <h1>Who am I?</h1>
                <ul className="skill-list">
                        <Skill 
                            hover="<span class='nerd-emoji'>🤓</span>"
                            className="interactable student"
                            heading="Student"
                            content="I am currently a first year student studying Computer Science at the University of New South Wales. In this constantly changing field, I am confident that this title is a permanent one for me. "
                            />
                        <Skill 
                            hover="<span class='globe-emoji'>🌎</span>"
                            className="interactable webdev"
                            heading="Web Developer"
                            content="I am fluent at HTML, CSS, JavaScript, ReactJS, Bootstrap as well as Git(Hub), Electron and NodeJS. Since the age of 16, I have been designing and developing websites with minimalism at the forefront."
                            />
                        <Skill 
                             hover="<span class='keyboard-emoji'>⌨️</span>"
                            className="interactable programmer"
                            heading="App Developer"
                            content="Alongside web developement, I have also worked with Dart, Flutter and Firebase to create mobile applications that work smoothly and natively on several platforms such as Android and iOS. "
                        />
                        <Skill 
                            hover="<span class='paint-emoji'>🎨</span>"
                            className="interactable artist"
                            heading="Artist"
                            content="Experimenting with GIMP in the 9th grade helped me grow my love for digital art. Combining that with my passion for photography made me start my Instagram page where I upload my work."
                        />
                    </ul>
            </section>

    )
};

export default AboutMe;
