import React from "react";

export default function CurrentBrussels () {
    
    return(
        <div>
       <h1 className="city">Brussels</h1>
<p className="today">Friday 15 Jan</p>
<h6 className="temperature">3°C °F</h6>
<img src="https://www.flaticon.com/svg/vstatic/svg/1200/1200430.svg?token=exp=1610880276~hmac=722ad0559e4253aa4080d6278f0ccfd3" width= "50px" alt="icon" className="iconCurrent"/>
<p className="message">It's snowing</p>

      <div className="forecast">
        <button className="next-days">
            02/11
            <div className="degree">13°C
            <br/>
                <img src="https://www.flaticon.com/svg/vstatic/svg/1200/1200430.svg?token=exp=1610880276~hmac=722ad0559e4253aa4080d6278f0ccfd3" width= "10px" className="forecastIcon" alt="iconForecast"/>
        </div>
        </button>
       </div>
       </div>
    );
}