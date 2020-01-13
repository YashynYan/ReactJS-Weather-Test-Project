import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './../styles/Weather.css';
import { connect } from 'react-redux';
import './../icons/weather-icons-master/css/weather-icons.min.css'
import convertTime from "./../convertTime"

const mapStateToProps = state => {
  console.log(state);
  return{
    city: state.city
  }
};

const API_KEY = '98a592f3a5814040b3b6e8bc6e7f9197';




function Weather(props) { 
  const [hasError, setErrors] = useState("");
  const [weather, setWeather] = useState();
  const [index, setIndex] = useState(0);
  // const [city, setCity] = useState(props.city.city);

useEffect(() => {
  axios.get(`http://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=${props.city.city}`)
  .then(res => setWeather(res.data.data))
    .catch(err => setErrors (err));
}, [props.city.city])

function handleChange (event)  {
  setIndex(event.target.value);
}

    console.log(hasError);
    return(
      <div className = "weather-block">
        {weather === undefined ?(
          <p></p>
        ) : 
        (
          <div className="content">
          <ul className="tabs" onClick = {handleChange}>
            {weather.map((weatherDetails, id) => 
              <li value={id}>
                {weatherDetails.valid_date}
              </li>
            // <button id={index} onClick={handleChange} value={index}>{weatherDetails.valid_date}</button>
              )}
          </ul>
          <br></br>
            <p>Temperature: {JSON.stringify(weather[index].temp)} ℃</p>
            <p>{JSON.stringify(weather[index].weather.description)}</p>
            <hr />
            <div className="content-section">
            <p>MAX t:<br />{JSON.stringify(weather[index].high_temp)} ℃</p>
            <p>MIN t:<br />{JSON.stringify(weather[index].low_temp)} ℃</p>
            </div>
            <hr />
            <div className="content-section">
            <p>Sunrise:<br />{convertTime(JSON.stringify(weather[index].sunrise_ts))}</p>
            <p>Sunset:<br />{convertTime(JSON.stringify(weather[index].sunset_ts))}</p>
            </div>
            <hr />
            <div className="content-section">
            <p>Humidity:<br />{JSON.stringify(weather[index].rh)} %</p>
            <p>Pressure:<br />{parseFloat(JSON.stringify(weather[index].pres)/33.864).toFixed(2)} inHg</p>
            </div>
            <hr />
            <div className="content-section">
            <p>Wind Speed:<br />{parseFloat(JSON.stringify(weather[index].wind_spd)).toFixed(2)} m/s</p>
            <p>Wind Direction:<br />{JSON.stringify(weather[index].wind_cdir)}</p>
            </div>
            <hr />
            <div className="content-section">
            <p>Visibility:<br />{JSON.stringify(weather[index].vis)} KM</p>
            <p>UV Index:<br />{JSON.stringify(weather[index].uv)}</p>
            </div>
          </div>
        )}
      </div>
    )
  };


export default connect(mapStateToProps)(Weather);