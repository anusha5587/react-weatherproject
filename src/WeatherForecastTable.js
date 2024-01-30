import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherHourlyForecast from "./WeatherHourlyForecast";

export default function WeatherForecastTable(props) {
  let [forecastready, setForecastready] = useState(false);
  let [forecastdata, setForecastdata] = useState(null);

  useEffect(() => {
    setForecastready(false);
  }, [props.coordinates]);

  function handleHourlyResponse(response) {
    setForecastdata(response.data.hourly);
    setForecastready(true);
  }

  if (forecastready) {
    console.log(forecastdata);
    return (
      <div className="weather-table">
        <div className="row">
          {forecastdata.map(function (hourlyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2" key={index}>
                  <WeatherHourlyForecast data={hourlyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${longitude}&lon=${latitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleHourlyResponse);

    return null;
  }
}
