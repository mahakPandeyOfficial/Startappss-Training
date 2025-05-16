import React, { useState, useEffect } from 'react';

const API_KEY = "ea1cb91f2cf9786724e45e9ea2311a21";

function WeatherApp() {
  const [location, setLocation] = useState('New Delhi');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        
        //openweatherapi
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        if (!res.ok) throw new Error('Location not found');
        const data = await res.json();
        setWeatherData(data);
        setError('');
      } catch (err) {
        setWeatherData(null);
        setError(err.message);
      }
    };

    fetchWeather();
  }, [location]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: '8px', width: '200px' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div style={{ marginTop: '20px' }}>
          <h3>{weatherData.name}</h3>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
