import React from 'react';

const Weather = props => (
    <div id="content">
      {props.city &&
      <div> 
      <p>Location: {props.city}, {props.country}</p>
      <p>{props.weather}</p>
      <p>Temperature: {props.temperature} °C</p>
      <p>Pressure: {props.pressure} hpa</p>
      <p>MAX temperature: {props.temperatureMax} °C</p>
      <p>MIN temperature: {props.temperatureMin} °C</p>
      <p>Sunrise at: {props.sunrise}</p>
      <p>Sunset at: {props.sunset}</p>
      <p>Wind Speed: {props.windSpeed}</p>
      </div>
      }
      <p>{props.error}</p>
    </div>
  )


export default Weather;