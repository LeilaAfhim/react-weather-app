import React, {useState} from "react";
import axios from "axios";


export default function Forecast(props) {
const [loaded, setLoaded]= useState(false);
const [forecast, setForecast]= useState(null);

function hours(response) {
    let date = new Date(response.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
 


function handleForecast(response){

setForecast ({


    temperature: response.data.list[0].main.temp,
    icon: `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`,
 
});

setLoaded (true);


}

if (loaded){
   

    return (
        <div className="forecast">
<button className="next-hours">


{hours()}
<br/>
        {Math.round(forecast.temperature)}°C
        <br/>
<img src={forecast.icon} alt="icon" width="35px"/>
    
        </button>
    </div>
    );





}else{
    let units = "metric";
    let apiKey = "b31db64dab4e4a28645ff69183a6142d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleForecast);
return null;


}    
}