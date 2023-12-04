import React from "react"
import "./styles/LandingPage.scss"


function LandingPage() {

    return(
        <section id="landing-page">
                <h1>Hi, I'm Veer</h1>
            <div className="welcome-div interactable" data-hover="<span class='hi-hand'>✋🏼</span>" data-interactingScale="8">
                <p>
                    Student, Web Developer, Programmer, Digital Artist
                </p>
            </div>
        </section>
    )
}

export default LandingPage