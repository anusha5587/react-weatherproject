import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row-col-1" id="dailyforecast">
        <h1 id="city">{props.data.city}</h1>
        <ul className="cityupdate">
          <li id="datetime">
            <FormatDate date={props.data.date} timeZone={props.data.timeZone} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-2">
          <div className="weather-refresh float-left">
            <WeatherIcon code={props.data.state} width={50} height={50} />
          </div>
        </div>
        <div className="col-3 temperatureUpdation">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-5" id="container">
          <ul className="weather-details-list">
            <li className="feels-like">
              Feels like :{" "}
              <span id="feelsLike">{Math.round(props.data.feelslike)}</span> °C
            </li>
            <li className="wind-speed">
              Wind : <span id="windSpeed">{Math.round(props.data.wind)}</span>{" "}
              kph
            </li>
            <li className="hi-lo-temp">
              Hi :{" "}
              <span id="maxtemperature">
                {Math.round(props.data.hightemp)}{" "}
              </span>
              °C | Lo:
              <span id="mintemperature">
                {" "}
                {Math.round(props.data.lowtemp)}{" "}
              </span>
              °C
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
