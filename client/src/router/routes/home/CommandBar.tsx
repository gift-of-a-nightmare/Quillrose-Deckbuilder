import React from "react";
import './CommandBar.css'

export const CommandBar : React.FC = () => {
    return(
        <div className="commandbar-body">
            <div className="commandbar-grid-container">
                <div></div>

                <div className="commandbar-grid-item">
                    <div className="commandbar-options">
                        <input></input>
                        <button>GO</button>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    )
}