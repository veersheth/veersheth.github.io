import React from "react"
import "./styles/LandingPage.scss"

function LandingPage() {
    return(
        <section id="landing-page">
            {/* <h1>Hi, I'm Veer</h1>
            <div className="welcome-div interactable" data-hover="<span class='hi-hand'>✋🏼</span>" data-interactingScale="8">
                <p>
                    Hi! I'm a Student, Web Developer, Programmer and Digital Artist
                </p>
            </div> */}
            <div className="welcome-div interactable" data-hover="<span class='hi-hand'>✋🏼</span>" data-interactingScale="8">
                <h1>
                    Hi, I'm  
                    <span className="strikethrough">
                         a Student, Web Developer, Programmer, Digital Artist
                    </span> 
                    <span className="highlight">Veer</span>
                </h1>
            </div>
        </section>
    )
}

export default LandingPage