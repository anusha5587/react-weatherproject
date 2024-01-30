import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherHourlyForecast(props) {
  const apiTimestamp = props.data.dt;
  const timeZoneOffset = props.data.timezone_offset || 0; // Default to 0 if offset is not available
  const forecastDate = new Date((apiTimestamp + timeZoneOffset) * 1000);
  const forecastTime = forecastDate.getUTCHours();

  function hourlyTemperature() {
    return Math.round(props.data.temp);
  }

  function feelslike() {
    return Math.round(props.data.feels_like);
  }

  return (
    <div>
      <div className="weather-table-time">
        {forecastTime >= 0 ? forecastTime.toString().padStart(2, "0") : "00"}:00
      </div>
      <div className="weather-table-img">
        <WeatherIcon code={props.data.weather[0].icon} width={25} height={25} />
      </div>
      <div className="weather-table-temp">{hourlyTemperature()}°C</div>
      <div className="weather-table-feelslike">Feels like {feelslike()}°C</div>
    </div>
  );
}
