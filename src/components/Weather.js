import React, {useState, useEffect} from 'react';
import './../styles/Weather.css';


// const API_KEY = "98a592f3a5814040b3b6e8bc6e7f9197";

const Weather = () =>{
  // const [hasError, setErrors] = useState(false);
  // const [weather, setWeather] = useState({});

  // async function fetchData (city) {
  // const res = await fetch (`http://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=${city}`);
  // res.json().then(res => setWeather(res)).catch(err => setErrors (err));
  // }

  // useEffect ( city => {
  //   fetchData (city);
  // }
  //   );


    return(
      <div id = "container">
        <div id = "content">
    {/* <p>{JSON.stringify(weather)}</p> */}
    <hr />
{/* <p>Has Error: {JSON.stringify(hasError)}</p> */}
        </div>
      </div>
      
    );
}; 


export default Weather;