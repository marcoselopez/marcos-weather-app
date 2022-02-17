import React, { useState } from 'react'
import ExtraInfo from './components/ExtraInfo/ExtraInfo';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';

const Main = () => {
  const apiKey = '&appid=aa924dd23a8fa95c9ed1eabb4afccb5a';

  const [city, setCity] = useState('');  
  const [country, setCountry] = useState('')
  const [weather, setWeather] = useState({loaded: false, result:{}});

  const handleSubmit = async(e) => {
    e.preventDefault()

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric${apiKey}`)
      .then(response => {
        const status = response.status;
        if (status === 404) {
          response.json().then(data => setWeather({loaded: false, result: data.message}))
        } else {
          response.json().then(data => setWeather({loaded: true, result: data}))
        }
      })    
    
    setCity('')
  }
  
  const {loaded, result} = weather;

  return (
    <div
      className={`main-container ${ !loaded ? "" : result.weather[0].icon.includes('d') ? "day-background" : "night-background"}`}
    >
      <div className="main">
        <form onSubmit={ handleSubmit }>
          <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </form>
      </div>
      <WeatherInfo weather={ weather } />
      <ExtraInfo weather={ weather } />
    </div>
  )
}

export default Main