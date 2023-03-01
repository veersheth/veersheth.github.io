import React from "react"
import "./styles/LandingPage.scss"

function LandingPage() {
    return(
        <section id="landing-page">
            <div className="welcome-div interactable" data-hover="👋🏼" data-interactingScale="8">
                <h1>Hi, I'm Veer</h1>
                <p>
                    I'm a Student, Web Developer, Programmer and Digital Artist
                </p>
            </div>
        </section>
    )
}

export default LandingPage