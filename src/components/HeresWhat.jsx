import React from "react"
import "./css/HeresWhat.css"

function HeresWhat() {
    return(
        <div className="heres-what" id="heres-what">
            <h2>Here's what I do</h2>
            <div className="neu-in down-arrow cursor-grow" data-cursor-stick="#stick-me" id="stick-me">
                <a href="#heres-what"><span className="material-symbols-rounded">arrow_drop_down</span></a>
            </div>
        </div>
    )
}

export default HeresWhat