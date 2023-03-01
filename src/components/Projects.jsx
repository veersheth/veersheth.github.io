import React from 'react';
import "./styles/Projects.scss"

import Project from "./Project.jsx"

import imgKeeper from "../images/projects/keeper.png"
import imgPysswordManager from "../images/projects/pyssword-manager.png"
import imgPythonAppLauncher from "../images/projects/python-app-launcher.png"
import imgTheBrownFox from "../images/projects/the-brown-fox.png"

const ProjectList = [
    {
        id: 1,
        header: "Keeper App",
        imageSrc: imgKeeper,
        imageAlt: "Keeper App",
        content: "Google Keep Clone App",
        link: "https://github.com/veer258/keeper-app"
    },
    {
        id: 2,
        header: "Pyssword Manager",
        imageSrc: imgPysswordManager,
        imageAlt: "Python Password Manager",
        content: "Commandline Python Password Manager",
        link: "https://github.com/veer258/pyssword-manager-cli"
    },
    {
        id: 3,
        header: "The Brown Fox",
        imageSrc: imgTheBrownFox,
        imageAlt: "The Brown Fox Website",
        content: "Clean and simple typing game",
        link: "https://veer258.github.io/The-Brown-Fox/"
    },
    {
        id: 4,
        header: "Python App Launcher",
        imageSrc: imgPythonAppLauncher,
        imageAlt: "Python App Launcher",
        content: "Brutally minimal app launcher based on tKinter, Python",
        link: "https://github.com/veer258/python-app-launcher"
    },
    {
        id: 5,
        header: "Python App Launcher",
        imageSrc: imgPythonAppLauncher,
        imageAlt: "Python App Launcher",
        content: "Brutally minimal app launcher based on tKinter, Python",
        link: "https://github.com/veer258/python-app-launcher"
    },
    {
        id: 6,
        header: "Python App Launcher",
        imageSrc: imgPythonAppLauncher,
        imageAlt: "Python App Launcher",
        content: "Brutally minimal app launcher based on tKinter, Python",
        link: "https://github.com/veer258/python-app-launcher"
    },
    {
        id: 7,
        header: "Python App Launcher",
        imageSrc: imgPythonAppLauncher,
        imageAlt: "Python App Launcher",
        content: "Brutally minimal app launcher based on tKinter, Python",
        link: "https://github.com/veer258/python-app-launcher"
    },
    {
        id: 8,
        header: "Python App Launcher",
        imageSrc: imgPythonAppLauncher,
        imageAlt: "Python App Launcher",
        content: "Brutally minimal app launcher based on tKinter, Python",
        link: "https://github.com/veer258/python-app-launcher"
    }
];

const Projects = () => {
    return (
        <section id='projects'>
            <h1>Notable Projects</h1>
            <div className="project-list-container">
                <ul className="project-list snaps-inline">
                    {ProjectList.map((item) => (
                        <li>
                            <Project 
                            header={item.header}
                            link={item.link}
                            content={item.content}
                            image={item.imageSrc}
                            alt={item.imageAlt}
                            />
                        </li>
                    ))}
                </ul>
            </div>
          
        </section>
    );
};

export default Projects;
