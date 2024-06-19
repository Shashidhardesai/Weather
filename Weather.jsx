import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      
      return alert('Please enter a city name');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?search=${city}&appid=b14425a6554d189a2d7dc18a8e7d7263`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="div1">
      <h1>Weather Data</h1>
      <div className="div2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {weatherData && (
        <div className="div3">
          <div>Temperature: {weatherData.main.temp} K</div>
          <div>Weather: {weatherData.weather.description}</div>
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Wind Speed: {weatherData.wind.speed} m/s</div>
        </div>
      )}
    </div>
  );
};

export default Weather;
