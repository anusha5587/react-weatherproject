import React from "react";
import FormatDate from "./FormatDate.js";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row-col-1" id="dailyforecast">
        <h1 id="city">{props.data.city}</h1>
        <ul className="cityupdate">
          <li id="datetime">
            <FormatDate date={props.data.date} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>
      <br />
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-refresh">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              width="80"
              alt=""
              id="icon"
            />
            <div className="temperatureUpdation">
              <strong id="tempNumber">
                {Math.round(props.data.temperature)}
              </strong>
              <span id="units">
                <a href="/" id="celsius-link" class="active">
                  °C{" "}
                </a>
                <span className="unitseperator">|</span>
                <a href="/" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-5" id="container">
          <li className="feels-like">
            Feels like :{" "}
            <span id="feelsLike">{Math.round(props.data.feelslike)}</span>
            °C
          </li>
          <li className="wind-speed">
            Wind : <span id="windSpeed">{Math.round(props.data.wind)}</span> kph
          </li>
          <li className="hi-lo-temp">
            Hi :{" "}
            <span id="maxtemperature">{Math.round(props.data.hightemp)} </span>
            °C | Lo:
            <span id="mintemperature"> {Math.round(props.data.lowtemp)} </span>
            °C
          </li>
        </div>
      </div>
    </div>
  );
}