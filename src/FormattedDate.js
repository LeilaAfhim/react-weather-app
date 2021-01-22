import { func } from "prop-types";
import React from "react";

export default function FormattedDate(props) {

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day= days[props.date.getDay()];

let date = props.date.getDate();

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[props.date.getMonth()];
    
    return (<div>{day} {date} {month}</div>

    );

    
}
