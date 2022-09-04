import "./App.css";
import REact from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <span>This project was coded by Maria Siara and is </span>
          <a
            href="https://github.com/Mar-Sia/react-weather-app-1"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
