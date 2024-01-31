import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherHourlyForecast from "./WeatherHourlyForecast";

export default function WeatherForecastTable(props) {
  let [forecastReady, setForecastReady] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  let [hourOffset, setHourOffset] = useState(0);

  useEffect(() => {
    setForecastReady(false);
    fetchHourlyData();
  }, [props.coordinates]);

  function fetchHourlyData() {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleHourlyResponse);
  }

  function handleHourlyResponse(response) {
    setForecastData(response.data.hourly);
    setForecastReady(true);
    setHourOffset(response.data.timezone_offset / 3600);
  }

  if (forecastReady) {
    return (
      <div className="weather-table">
        <div className="row">
          {forecastData.slice(0, 6).map((hourlyForecast, index) => (
            <div className="col-2 hourlyUpdate" key={index}>
              <WeatherHourlyForecast
                data={hourlyForecast}
                hourOffset={hourOffset}
              />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
