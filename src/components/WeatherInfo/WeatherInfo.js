import moment from 'moment';
import { useEffect } from 'react';
import getDate from '../../helpers/getDate';
import getTime from '../../helpers/getTime';
import './weatherInfo.css'

const WeatherInfo = ({ weather }) => {

  const { loaded, result } = weather;

  
  useEffect( () => {
    console.log(result)
  }, [result])
  

  if (loaded) {
    return (
      <div className="weather-info">
        <h1 className="temperature">{Math.floor(result.main.temp)}º<span>C</span></h1>
        <p className="city">{result.name}, {result.sys.country}</p>
        <p className="date">{getDate(result.timezone)}</p>
        <p className="time">{getTime(result.timezone)}</p>
        <p className="weather">{result.weather[0].main}</p>
        <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`} alt="" />
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default WeatherInfo