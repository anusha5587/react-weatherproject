import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherHourlyForecast from "./WeatherHourlyForecast";

export default function WeatherForecastTable(props) {
  const [forecastReady, setForecastReady] = useState(false);
  const [forecastData, setForecastData] = useState(null);
  const [hourOffset, setHourOffset] = useState(0);

  useEffect(() => {
    setForecastReady(false);
    fetchHourlyData();
  }, [props.coordinates]);

  function fetchHourlyData() {
    const apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    const longitude = props.coordinates.lon;
    const latitude = props.coordinates.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleHourlyResponse);
  }

  function handleHourlyResponse(response) {
    setForecastData(response.data.hourly);
    setForecastReady(true);
    setHourOffset(response.data.timezone_offset / 3600); // Convert seconds to hours
  }

  if (forecastReady) {
    return (
      <div className="weather-table">
        <div className="row">
          {forecastData.slice(0, 6).map((hourlyForecast, index) => (
            <div className="col-2" key={index}>
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
