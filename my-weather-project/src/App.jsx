import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API_KEY = "a9d3ae5b433249ab97282845251212";

  const fetchWeather = async () => {
    if (city === "") {
      alert("Please enter a location!");
      return;
    }

    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.error) {
        alert("Invalid location!");
        setWeather(null);
      } else {
        setWeather(data);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">🌦️ Weather Forecast </h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
