import React from "react";
import { CommandBar } from "./CommandBar";
import { AdvancedSearch } from "./AdvancedSearch";
import { CardResultGrid } from "./CardResultGrid";
import './HomeWrapper.css';

export const HomeWrapper : React.FC = () => {
    return(
        <div className="home-grid-container">
            <div>
                <CommandBar/>
            </div>
            <div>
                <AdvancedSearch/>
            </div>
            <div>
                <CardResultGrid/>
            </div>
        </div>
    )
}