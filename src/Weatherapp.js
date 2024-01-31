import React, { useState } from "react";
import axios from "axios";
import "./Weatherapp.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import WeatherForecastTable from "./WeatherForecastTable";
import CurrentLocationButton from "./CurrentLocationButton";

export default function Weatherapp(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    let offsetMinutes = response.data.timezone;
    let adjustedDate = new Date(response.data.dt * 1000);

    let offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
    let offsetMinutesPart = Math.abs(offsetMinutes) % 60;
    let timeZone = `${offsetMinutes >= 0 ? "+" : "-"}${offsetHours
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

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setCity("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
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

  let handleCurrentLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherDataByCoordinates(latitude, longitude);
      },
      (error) => {
        console.error("Error fetching current location:", error);
      }
    );
  };

  let fetchWeatherDataByCoordinates = (latitude, longitude) => {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        handleResponse(response);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

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
                value={city}
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
              <CurrentLocationButton onClick={handleCurrentLocationClick} />
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
