import React from "react";
import { CommandBar } from "./CommandBar";
import { AdvancedSearch } from "./AdvancedSearch";
import { CardResultGrid } from "./CardResultGrid";

export const HomeWrapper : React.FC = () => {
    return(
        <div>
            <CommandBar/>
            <AdvancedSearch/>
            <CardResultGrid/>
        </div>
    )
}