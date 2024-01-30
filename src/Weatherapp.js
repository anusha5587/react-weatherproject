import React, { useState } from "react";
import axios from "axios";
import "./Weatherapp.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastTable from "./WeatherForecastTable";

export default function Weatherapp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data);
    const offsetMinutes = response.data.timezone;
    const adjustedDate = new Date(response.data.dt * 1000);

    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetMinutesPart = Math.abs(offsetMinutes) % 60;
    const timeZone = `${offsetMinutes >= 0 ? "+" : "-"}${offsetHours
      .toString()
      .padStart(2, "0")}:${offsetMinutesPart.toString().padStart(2, "0")}`;

    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: adjustedDate,
      state: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feelslike: response.data.main.feels_like,
      hightemp: response.data.main.temp_max,
      lowtemp: response.data.main.temp_min,
      timeZone: offsetMinutes,
    });
  }

  function calculateTimeZone(offsetMinutes) {
    const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    const offsetMinutesPart = Math.abs(offsetMinutes) % 60;

    const maxOffsetHours = 12;
    const cappedOffsetHours = Math.min(offsetHours, maxOffsetHours);

    return `${offsetMinutes >= 0 ? "+" : "-"}${cappedOffsetHours
      .toString()
      .padStart(2, "0")}:${offsetMinutesPart.toString().padStart(2, "0")}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        handleResponse(response);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }

  if (weatherData.ready) {
    return (
      <div className="Weatherapp">
        <form onSubmit={handleSubmit} id="search-form" className="mb-3">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                id="cityInput"
                placeholder="Enter city...."
                className="form-control"
                aria-label="Entercity"
                aria-describedby="addon-wrapping"
                autocomplete="off"
                autofocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4 d-flex justify-content-between">
              <input
                type="submit"
                value=" Search "
                placeholder="Search"
                className="btn btn-primary"
                style={{ border: "none" }}
                id="search-icon"
              />
              <span id="current-location">
                <input
                  type="button"
                  value="Current Location"
                  className="btn btn-primary"
                  style={{ border: "none", float: "right" }}
                  id="current-location-btn"
                />
              </span>
            </div>
          </div>
        </form>
        <div id="forecastreport">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <Weatherinfo data={weatherData} />
        <WeatherForecastTable
          coordinates={weatherData.coordinates}
          timeZone={weatherData.timeZone}
        />
      </div>
    );
  } else {
    search();
    return "Loading....";
  }
}
