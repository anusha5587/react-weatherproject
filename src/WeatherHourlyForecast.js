import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherHourlyForecast(props) {
  let [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentHour = currentTime.getHours();
  const nextHour = (currentHour + 1) % 24;

  function hourlyTemperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}`;
  }

  function feelslike() {
    let feelsliketemp = Math.round(props.data.feels_like);
    return `${feelsliketemp}`;
  }

  return (
    <div>
      <div className="weather-table-time">{nextHour}:00</div>
      <div className="weather-table-img">
        <WeatherIcon code={props.data.weather[0].icon} width={25} height={25} />
      </div>
      <div className="weather-table-temp">{hourlyTemperature()}°C</div>
      <div className="weather-table-feelslike">Feels like {feelslike()}°C</div>
    </div>
  );
}
