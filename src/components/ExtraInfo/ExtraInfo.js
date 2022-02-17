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
           <p className="value">{result.wind.deg}º</p>
        </div>
        <div className="wind">
          <p>Wind Speed</p>
          <p className="value">{result.wind.speed} Km/H</p>
        </div>
      </div>      
      <div className="extra-info-common">
        <div className="common">
          <p>Humidity</p>
          <p className="value">{result.main.humidity} %</p>
        </div>
        <div className="common">
          <p>Pressure</p>
          <p className="value">{result.main.pressure} hPa</p>
        </div>
        <div className="common">
          <p>Visibility</p>
          <p className="value">{result.visibility} Mts</p>
        </div>
      </div>
    </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ExtraInfo