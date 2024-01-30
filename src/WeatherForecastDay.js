import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getUTCDay()];
  }
  return (
    <div>
      <tr>
        <td className="days"> {day()} </td>
        <td className="weatherIcon">
          <WeatherIcon
            code={props.data.weather[0].icon}
            width={25}
            height={25}
          />
        </td>
        <td className="numbers">
          <span className="dailyMaxTemp">{maxTemperature()}</span> °C{" "}
        </td>
        <td className="numbers">
          <span className="dailyMinTemp">{minTemperature()}</span> °C{" "}
        </td>
      </tr>
    </div>
  );
}
