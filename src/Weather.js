import React, {useState} from "react";
import axios from "axios";
import './App.css';
import CurrentBrussels from "./CurrentBrussels";

export default function Weather (){
      const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});
    
    function showTemperature(response) {
      setCity (response.data.name);
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
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


if (loaded){
    return(    
    <div>
{form}

<h1 className="city">{city}</h1>
<p className="today">Friday 15 Jan</p>
<h6 className="temperature">{Math.round(weather.temperature)} °C</h6>
<img src={weather.icon} alt={weather.description} className="icon"/>
<p className="message">{weather.description}</p>
    <div className="forecast">
        <button class="next-days">
            02/11
            <div class="degree">13°C
            <br/>
                <img src="https://www.flaticon.com/svg/vstatic/svg/1200/1200430.svg?token=exp=1610880276~hmac=722ad0559e4253aa4080d6278f0ccfd3" width= "10px" class="forecastIcon" alt="iconForecast"/>
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