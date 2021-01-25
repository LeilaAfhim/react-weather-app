import React, {useState} from "react";
import axios from "axios";
import './App.css';
import FormattedDate from "./FormattedDate";
import TemperatureConversion from "./TemperatureConversion";
import Forecast from "./Forecast";


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


<h1 className="city">{weather.city}</h1>
<div className="today"><FormattedDate date={weather.date}/></div>
 <TemperatureConversion celsius={Math.round(weather.temperature)}/>
<img src={weather.icon} alt={weather.description} className="icon"/>
<p className="message">{weather.description}</p>
<p className="humidity">Humidity: {weather.humidity}%</p>
<p className="wind">Wind: {Math.round(weather.wind)} km/h</p>

<Forecast city={weather.city}/>

    
    {form}   
</div>

    );
}else{
    return(
    <div>
      <div className="container" >
        <div className="weather-app-wrapper-page">
        
      <h1 className="welcome">Check the weather for today! </h1>
   <form onSubmit={handleSubmit} >
  
    
      <input className="inputPage" type="search" placeholder="Choose a city" onChange={updateCity} />
      
      <button className="searchButtonPage" type="Submit">Search</button>
    
      <br/>
      <p className="orPage">or</p>

      <button className="myLocationPage" type="submit">Use my location</button>
    </form>
    </div>
    </div>
    
    </div>);
}
}