import './weatherInfo.css'

const WeatherInfo = ({ weather }) => {

  const { loaded, result } = weather;

  if (loaded) {
    return (
      <div className="weather-info">
        <h1 className="temperature">{Math.floor(result.main.temp)}º<span>C</span></h1>
        <p className="city">{result.name}, {result.sys.country}</p>
        <p className="weather">{result.weather[0].main}</p>
        <img src={`http://openweathermap.org/img/wn/${result.weather[0].icon}@4x.png`} alt="" />
      </div>
    )
  }
  if (!loaded && result === 'city not found') {
    return (
      <div>
        <h1 className="error">City not found, please try another</h1>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default WeatherInfo