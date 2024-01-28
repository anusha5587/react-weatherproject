import React from "react";
import "./App.css";
import "./Weatherapp.css";
import Weatherapp from "./Weatherapp";

export default function App() {
  return (
    <div className="App">
      <div className="container-header">
        <h1 className="headingText">Let's check the weather!</h1>
        <Weatherapp defaultCity="London" />
        <br />
      </div>
      <br />
      <footer>
        This project was coded by Anoosha Anand and is open-soursed on{" "}
        <a
          href="https://github.com/anusha5587/react-weatherproject"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
