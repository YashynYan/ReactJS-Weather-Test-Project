import React from 'react';
import './App.css';
import Header from './components/Header'
import Search from './components/Search';
import Weather from './components/Weather';
import convertTime from './convertTime';

const API_KEY = "daf89555e850ffa48b0635b08269c72a"

class App extends React.Component {
    constructor () {
      super();
      this.state = {
        weatherState: {
          temperature: undefined,
          city: undefined,
          country: undefined,
          pressure: undefined,
          temperatureMax: undefined,
          temperatureMin: undefined,
          sunrise: undefined,
          sunset: undefined,
          weather: undefined,
          windSpeed: undefined,
          error: undefined
        }
      }
    }


  gettingWeather = async (e) =>{
    e.preventDefault();
    let city = e.target.elements.searchCity.value;
    const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
    console.log(city);
    
    
    this.setState ({weatherState:{
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      temperatureMax: data.main.temp_max,
      temperatureMin: data.main.temp_min,
      sunrise: convertTime(data.sys.sunrise),
      sunset: convertTime(data.sys.sunset),
      weather: data.weather[0].main,
      windSpeed: data.wind.speed,
      error: ""
    }});  
}

render(){
  const {weatherState} = this.state;
  return (
     <div> 
      <Header />
      <Search weatherMethod = {this.gettingWeather} />
      <Weather 
      temperature = {weatherState.temperature}
      city = {weatherState.city}
      country = {weatherState.country}
      pressure = {weatherState.pressure}
      temperatureMax = {weatherState.temperatureMax}
      temperatureMin = {weatherState.temperatureMin}
      sunrise = {weatherState.sunrise}
      sunset = {weatherState.sunset}
      weather = {weatherState.weather}
      windSpeed = {weatherState.windSpeed}   
      />
      </div>
  );
}
}

export default App;
