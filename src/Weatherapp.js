import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function WeatherSearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [weatherIcon, setWeatherIcon] = useState("");
  let [error, setError] = useState("");

  function showTemperature(response) {
    let { temp } = response.data.main;
    let { description, icon } = response.data.weather[0];
    let { humidity } = response.data.main;
    let { speed } = response.data.wind;

    setTemperature(temp);
    setDescription(description);
    setHumidity(humidity);
    setWind(speed);
    setWeatherIcon(`http://openweathermap.org/img/w/${icon}.png`);
    setError("");
  }

  function handleSearch() {
    if (city.trim() === "") {
      setError("Please enter a city");
      setTemperature("");
      setDescription("");
      setHumidity("");
      setWind("");
      setWeatherIcon("");
      return;
    }

    let apiKey = `4b3503b2f08a729413c4d33ef1186004`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(showTemperature)
      .catch((error) => {
        setError("Failed to fetch weather data");
        setTemperature("");
        setDescription("");
        setHumidity("");
        setWind("");
        setWeatherIcon("");
      });
  }

  return (
    <div className="container-header">
      <input
        type="text"
        className="searchCity"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      <button className="button" onClick={handleSearch}>
        Search
      </button>
      {error && <p className="error">{error}</p>}
      {temperature && (
        <div className="weather-info">
          <br />
          <p className="temperature">{Math.round(temperature)}°C</p>
          <p>{description}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {wind} km/h</p>
          <img src={weatherIcon} alt="Weather Icon" />
        </div>
      )}
    </div>
  );
}

export default WeatherSearchEngine;
