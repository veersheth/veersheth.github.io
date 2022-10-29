import React from "react"
import "./css/HeresWhat.css"

function HeresWhat() {
    return(
        <div className="heres-what">
            <h2>Here's what I can do</h2>
            <div className="down-arrow nue-in cursor-grow" data-cursor-stick="#stick-me" id="stick-me">
                <span className="material-symbols-rounded">arrow_drop_down</span>
            </div>
        </div>
    )
}

export default HeresWhat