import React, { useState } from "react";
import axios from "axios";
import "./Weatherapp.css";

export default function Weatherapp() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "27 Jan, Saturday 16:00",
      description: response.data.weather[0].description,
      feelslike: response.data.main.feels_like,
      hightemp: response.data.main.temp_max,
      lowtemp: response.data.main.temp_min,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weatherapp">
        <form id="search-form" className="mb-3">
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
          <div className="row-col-1">
            <table className="dailytable">
              <tbody>
                <tr>
                  <td id="days">Sat</td>
                  <td>
                    <img
                      src="https://openweathermap.org/img/wn/04d@2x.png"
                      width="30px"
                      alt="sunny"
                    />
                  </td>
                  <td className="numbers">
                    <span className="dailyMinTemp">9</span> °C{" "}
                  </td>

                  <td className="numbers">
                    <span className="dailyMaxTemp">9</span> °C{" "}
                  </td>
                </tr>
                <tr>
                  <td id="days">Sun</td>
                  <td>
                    <img
                      src="https://openweathermap.org/img/wn/04d@2x.png"
                      width="30px"
                      alt=" "
                    />
                  </td>
                  <td className="numbers">
                    <span className="dailyMinTemp">10</span> °C{" "}
                  </td>

                  <td className="numbers">
                    <span className="dailyMaxTemp">10</span> °C{" "}
                  </td>
                </tr>
                <tr>
                  <td id="days">Mon</td>
                  <td>
                    <img
                      src="https://openweathermap.org/img/wn/04d@2x.png"
                      width="30px"
                      alt=" "
                    />
                  </td>
                  <td className="numbers">
                    <span className="dailyMinTemp">13</span> °C{" "}
                  </td>

                  <td className="numbers">
                    <span className="dailyMaxTemp">13</span> °C{" "}
                  </td>
                </tr>
                <tr>
                  <td id="days">Tue</td>
                  <td>
                    <img
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      width="30px"
                    />
                  </td>
                  <td className="numbers">
                    <span className="dailyMinTemp">12</span> °C{" "}
                  </td>

                  <td className="numbers">
                    <span className="dailyMaxTemp">12</span> °C{" "}
                  </td>
                </tr>
                <tr>
                  <td id="days">Wed</td>
                  <td>
                    <img
                      src="https://openweathermap.org/img/wn/04d@2x.png"
                      width="30px"
                    />
                  </td>
                  <td className="numbers">
                    <span className="dailyMinTemp">8</span> °C{" "}
                  </td>

                  <td className="numbers">
                    <span className="dailyMaxTemp">8</span> °C{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row-col-1" id="dailyforecast">
          <h1 id="city">{weatherData.city}</h1>
          <ul className="cityupdate">
            <li id="datetime">{weatherData.date}</li>
            <li id="description">{weatherData.description}</li>
          </ul>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-refresh">
              <img
                src="https://openweathermap.org/img/wn/04d@2x.png"
                width="80"
                alt=""
                id="icon"
              />
              <div className="temperatureUpdation">
                <strong id="tempNumber">
                  {Math.round(weatherData.temperature)}
                </strong>
                <span id="units">
                  <a href="/" id="celsius-link" class="active">
                    °C{" "}
                  </a>
                  <span className="unitseperator">|</span>
                  <a href="/" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-5" id="container">
            <li className="feels-like">
              Feels like :{" "}
              <span id="feelsLike">{Math.round(weatherData.feelslike)}</span>
              °C
            </li>
            <li className="wind-speed">
              Wind : <span id="windSpeed">{Math.round(weatherData.wind)}</span>{" "}
              kph
            </li>
            <li className="hi-lo-temp">
              Hi :{" "}
              <span id="maxtemperature">
                {Math.round(weatherData.hightemp)}{" "}
              </span>
              °C | Lo:
              <span id="mintemperature">
                {" "}
                {Math.round(weatherData.lowtemp)}{" "}
              </span>
              °C
            </li>
          </div>
        </div>
        <div className="weather-table">
          <div className="row">
            <div className="col-2">
              <div className="weather-table-time">18:00</div>
              <img
                src="https://openweathermap.org/img/wn/02n@2x.png"
                width="30px"
                alt=""
              />
              <div className="weather-table-temp">5°C</div>
              <div className="weather-table-feelslike">Feels like 2°C</div>
            </div>
            <div className="col-2">
              <div className="weather-table-time">19:00</div>
              <img
                src="https://openweathermap.org/img/wn/01n@2x.png"
                width="30px"
                alt=""
              />
              <div className="weather-table-temp">5°C</div>
              <div className="weather-table-feelslike">Feels like 2°C</div>
            </div>
            <div className="col-2">
              <div className="weather-table-time">20:00</div>
              <img
                src="https://openweathermap.org/img/wn/02n@2x.png"
                width="30px"
                alt=""
              />
              <div className="weather-table-temp">5°C</div>
              <div className="weather-table-feelslike">Feels like 2°C</div>
            </div>
            <div className="col-2">
              <div className="weather-table-time">21:00</div>
              <img
                src="https://openweathermap.org/img/wn/03n@2x.png"
                width="30px"
                alt=""
              />
              <div className="weather-table-temp">5°C</div>
              <div className="weather-table-feelslike">Feels like 2°C</div>
            </div>
            <div className="col-2">
              <div className="weather-table-time">22:00</div>
              <img
                src="https://openweathermap.org/img/wn/04n@2x.png"
                width="30px"
                alt=""
              />
              <div className="weather-table-temp">5°C</div>
              <div className="weather-table-feelslike">Feels like 2°C</div>
            </div>
            <div className="col-2">
              <div className="weather-table-time">23:00</div>
              <img
                src="https://openweathermap.org/img/wn/04n@2x.png"
                width="30px"
                alt=""
              />
              <div className="weather-table-temp">5°C</div>
              <div className="weather-table-feelslike">Feels like 2°C</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "701f06352d61835bc4fc894e7b084629";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
