import React from "react";
import "./Weatherapp.css";

export default function Weatherapp() {
  return (
    <div className="Weatherapp">
      <form id="search-form" className="mb-3">
        <div className="row">
          <div className="col-7">
            <input
              type="search"
              id="cityInput"
              placeholder="Enter city"
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
              value="  Search  "
              placeholder="Search"
              className="btn btn-primary"
              styles="border: none"
              id="search-icon"
            />
            <span id="current-location">
              <input
                type="button"
                value="Current Location"
                className="btn btn-primary"
                styles="border: none; float: right"
                id="current-location-btn"
              />
            </span>
          </div>
        </div>
      </form>

      <br />

      <div className="row">
        <div className="col-5">
          <div className="clearfix weather-refresh">
            <img
              src="https://openweathermap.org/img/wn/04d@2x.png"
              width="80"
              alt=""
              id="icon"
            />
            <div className="temperatureUpdation">
              <strong id="tempNumber">15</strong>
              <span id="units">
                <a href="#" id="celsius-link" class="active">
                  °C{" "}
                </a>
                <span className="unitseperator">|</span>
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-5" id="container">
          <li className="feels-like">
            Feels like : <span id="feelsLike">-1 </span>°C
          </li>
          <li className="wind-speed">
            Wind : <span id="windSpeed">4</span> kph
          </li>
          <li className="hi-lo-temp">
            Hi : <span id="maxtemperature">15 </span>°C | Lo:
            <span id="mintemperature"> 1 </span>°C
          </li>
        </div>
      </div>
      <div class="weather-table">
        <div class="row">
          <div class="col-2">
            <div class="weather-table-time">18:00</div>
            <img
              src="https://openweathermap.org/img/wn/02n@2x.png"
              width="30px"
            />
            <div class="weather-table-temp">5°C</div>
            <div class="weather-table-feelslike">Feels like 2°C</div>
          </div>
          <div class="col-2">
            <div class="weather-table-time">19:00</div>
            <img
              src="https://openweathermap.org/img/wn/01n@2x.png"
              width="30px"
            />
            <div class="weather-table-temp">5°C</div>
            <div class="weather-table-feelslike">Feels like 2°C</div>
          </div>
          <div class="col-2">
            <div class="weather-table-time">20:00</div>
            <img
              src="https://openweathermap.org/img/wn/02n@2x.png"
              width="30px"
            />
            <div class="weather-table-temp">5°C</div>
            <div class="weather-table-feelslike">Feels like 2°C</div>
          </div>
          <div class="col-2">
            <div class="weather-table-time">21:00</div>
            <img
              src="https://openweathermap.org/img/wn/03n@2x.png"
              width="30px"
            />
            <div class="weather-table-temp">5°C</div>
            <div class="weather-table-feelslike">Feels like 2°C</div>
          </div>
          <div class="col-2">
            <div class="weather-table-time">22:00</div>
            <img
              src="https://openweathermap.org/img/wn/04n@2x.png"
              width="30px"
            />
            <div class="weather-table-temp">5°C</div>
            <div class="weather-table-feelslike">Feels like 2°C</div>
          </div>
          <div class="col-2">
            <div class="weather-table-time">23:00</div>
            <img
              src="https://openweathermap.org/img/wn/04n@2x.png"
              width="30px"
            />
            <div class="weather-table-temp">5°C</div>
            <div class="weather-table-feelslike">Feels like 2°C</div>
          </div>
        </div>
      </div>
    </div>
  );
}
