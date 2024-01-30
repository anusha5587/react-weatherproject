import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    let apiKey = "445905dadb3d2b0c6f1b916c9d0e3860";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="row-col-3 table-container">
          <table>
            <tbody>
              {forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                  return (
                    <div className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </div>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
