import React, {useState} from "react";
import axios from "axios";
import './App.css';
import CurrentBrussels from "./CurrentBrussels";
import FormattedDate from "./FormattedDate";


export default function Weather (props){
const [city, setCity]= useState("");
  const [weather, setWeather] = useState({loaded:false});
    
    function showTemperature(response) {
      
    setWeather ({
      loaded: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }  






    function handleSubmit(event){
        event.preventDefault();
        let units = "metric";
    let apiKey = "b31db64dab4e4a28645ff69183a6142d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(showTemperature);
    }



function updateCity(event){
   
 setCity(event.target.value);
}



let form = 
<form onSubmit={handleSubmit} >
  
    
      <input className="input" type="search" placeholder="Choose a city" onChange={updateCity} />
      
      <button className="searchButton" type="Submit">Search</button>
    
      <br/>
      <p className="or">or</p>

      <button className="myLocation" type="submit">Use my location</button>
    </form>




if (weather.loaded){
    return(    
    <div>
{form}

<h1 className="city">{weather.city}</h1>
<div className="today"><FormattedDate date={weather.date}/></div>
<h6 className="temperature">{Math.round(weather.temperature)} °C</h6>
<img src={weather.icon} alt={weather.description} className="icon"/>
<p className="message">{weather.description}</p>
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
}else{
    return(<div>
    {form}
   <CurrentBrussels/>
    </div>);
}
}