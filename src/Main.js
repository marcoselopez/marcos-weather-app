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
        {!loaded ? <h2 className="title">The Weather App</h2> : null}
        {!loaded ? <h2 className="welcome">Please type a city name and press Enter</h2> : null}
        <form onSubmit={ handleSubmit }>
          <input type="text" name="city" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        </form>
        {!loaded && result === 'city not found' ? <h2 className="error">City not found, please try another</h2> : null}
      </div>
      <WeatherInfo weather={ weather } />
      <ExtraInfo weather={ weather } />
      <div className="credits">Developed by Marcos López for Recursiva</div>
    </div>
  )
}

export default Main