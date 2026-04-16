//import { Calendar } from "@/components/ui/calendar"
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import classNames from "react-day-picker/style.module.css";
import "react-day-picker/style.css";
import './Calendar.css';
import axios from "axios";
import { Modal } from "bootstrap";

// today: `border-amber-500`, // Add a border to today's date
//         selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
//         root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
//         chevron: `${defaultClassNames.chevron} fill-amber-500`, // Change the color of the chevron

console.log(classNames); // Output the class names as parsed by CSS modules.


const ReactCalendar = () => {


    const [selected, setSelected] = useState();
    const [isShown, setIsShown] = useState(true)


    const onSelectFunction = (selected) => {
        console.log(selected)
        setSelected()
        selected = selected.toDateString()
        console.log({ selected })
        setIsShown(!isShown)
        console.log({isShown})
    }

    return (
        <div className="container col-md-7">
            <DayPicker
                navLayout="around"
                animate
                mode="single"
                selected={selected}
                onSelect={onSelectFunction}
                className="month"
                footer={
                    selected ? `Selected: ${selected}` : "Pick a day."

                }
            />

            {isShown &&
                <div className="modal" open={isShown}>
                    <div>
                        
                    </div>
                    
                </div>}

        </div>
    );
}

export default ReactCalendar
