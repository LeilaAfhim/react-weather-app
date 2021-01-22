import { func } from "prop-types";
import React, {useState} from "react";

export default function TemperatureConversion(props) {
const [unit, setUnit]=useState("celcius");


function showFahrenheit (event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function fahrenheit(){
   return setUnit(props.celsius*9)/5+32;
}

function showCelsius (event){
    event.preventDefault();
setUnit("celsius");
    }



 if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}



