import React, { useEffect, useRef } from "react";
import "./styles/LandingPage.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
    const strikethroughRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            strikethroughRef.current.classList.add('animate');
        }, 1000); // Start the animation after 1 second
    }, []);

    return(
        <section id="landing-page">
            <div className="welcome-div ">
                <h1 className="interactable" data-hover="<span class='hi-hand'>✋🏼</span>" data-interactingScale="8">
                    Hi, I'm  
                    <span className="strikethrough" ref={strikethroughRef}>
                        a Student, Web Developer, Programmer, Digital Artist
                    </span> 
                    <span className="highlight">Veer</span>
                </h1>
                <div className="chip"><FontAwesomeIcon icon={faLocationDot} className="fa"/>  Sydney</div>
            </div>
        </section>
    )
}

export default LandingPage;