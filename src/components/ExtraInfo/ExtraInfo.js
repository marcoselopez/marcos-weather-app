import React from 'react'
import './extraInfo.css'

const ExtraInfo = ({ weather }) => {

  const { loaded, result } = weather;

  if (loaded) {
    return (
      <div className="extra-info">
      <div className="extra-info-wind">
        <div className="wind">
           <p>Wind Degrees</p>
           <p>{result.wind.deg}º</p>
        </div>
        <div className="wind">
          <p>Wind Speed</p>
          <p>{result.wind.speed} Km/H</p>
        </div>
      </div>      
      <div className="extra-info-common">
        <div className="common">
          <p>Humidity</p>
          <p>{result.main.humidity} %</p>
        </div>
        <div className="common">
          <p>Pressure</p>
          <p>{result.main.pressure} hPa</p>
        </div>
        <div className="common">
          <p>Visibility</p>
          <p>{result.visibility} Mts</p>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div></div>
    )
  }



  return (
    <div className="extra-info">
      <div className="extra-info-wind">
        <div className="wind">
          { weather.wind === undefined ? null : <p>Wind Degrees</p> }
          { weather.wind === undefined ? null : <p>{weather.wind.deg}º</p> }
        </div>
        <div className="wind">
          { weather.wind === undefined ? null : <p>Wind Speed</p> }
          { weather.wind === undefined ? null : <p>{weather.wind.speed} Km/H</p> }
        </div>
      </div>
      
      <div className="extra-info-common">
        <div className="common">
          { weather.main === undefined ? null : <p>Humidity</p> }
          { weather.main === undefined ? null : <p>{weather.main.humidity} %</p> }
        </div>
        <div className="common">
          { weather.main === undefined ? null : <p>Pressure</p> }
          { weather.main === undefined ? null : <p>{weather.main.pressure} hPa</p> }
        </div>
        <div className="common">
          { weather.main === undefined ? null : <p>Visibility</p> }
          { weather.main === undefined ? null : <p>{weather.visibility} Mts</p> }
        </div>
      </div>
    </div>
  )
}

export default ExtraInfo