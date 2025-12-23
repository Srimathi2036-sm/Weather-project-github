import "./WeatherCard.css";

function WeatherCard({ data }) {
  const { location, current } = data;

  return (
    <div className="card">
      <h2>{location.name}, {location.country}</h2>
      <img src={current.condition.icon} alt="weather-icon" />

      <h3>{current.condition.text}</h3>

      <p><strong>Temperature:</strong> {current.temp_c}°C</p>
      <p><strong>Humidity:</strong> {current.humidity}%</p>
      <p><strong>Wind:</strong> {current.wind_kph} km/h</p>
      <p><strong>Feels Like:</strong> {current.feelslike_c}°C</p>
      <p><strong>Visibility:</strong> {current.vis_km} km</p>
      <p><strong>UV Index:</strong> {current.uv}</p>
    </div>
  );
}

export default WeatherCard;
