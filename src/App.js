import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Krakow" />
        <footer>
          <span>This project was coded by Maria Siara and is </span>
          <a
            href="https://github.com/Mar-Sia/react-weather-app-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          <span> and hosted on </span>
          <a
            href="https://astonishing-profiterole-b44361.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
