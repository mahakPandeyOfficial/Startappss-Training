const apiKey = "ea1cb91f2cf9786724e45e9ea2311a21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city name!!");
    return;
  }

  const currentWeatherUrl = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch current weather
  fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(err => {
      console.error("Error fetching weather data:", err);
      alert("Failed to fetch weather data. Please try again.");
    });

  // Fetch forecast data
  fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
      displayHourlyForecast(data);
    })
    .catch(err => {
      console.error("Error fetching forecast data:", err);
      alert("Failed to fetch hourly forecast data!! Please try again.");
    });
}

function displayWeather(data) {
  const tempDivInfo = document.getElementById("temp-div");
  const weatherInfoDiv = document.getElementById("weather-info");
  const weatherIcon = document.getElementById("weather-icon");
  const hourlyForecastDiv = document.getElementById("hourly-forecast");

  // Clear previous data
  tempDivInfo.innerHTML = "";
  weatherInfoDiv.innerHTML = "";
  hourlyForecastDiv.innerHTML = "";

  // Check data
  if (data.cod == '404') {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    const temperatureHTML = `<h2>${temperature}°C</h2>`;
    const weatherHTML = `
      <p>${cityName}</p>
      <p>${description}</p>`;

    tempDivInfo.innerHTML = temperatureHTML;
    weatherInfoDiv.innerHTML = weatherHTML;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;

    showImage();
  }
}

function displayHourlyForecast(data) {
  const hourlyForecastDiv = document.getElementById('hourly-forecast');
  const hourlyData = data.list; // Corrected

  const next24Hours = hourlyData.slice(0, 8); // Next 8 data points (~24 hours)

  next24Hours.forEach(item => {
    const dateTime = new Date(item.dt * 1000);
    const hours = dateTime.getHours();
    const temperature = Math.round(item.main.temp);
    const icon = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    const hourlyHTML = `
      <div class="hourly-item">
        <p>${hours}:00</p>
        <img src="${iconUrl}" alt="Hourly Weather icon">
        <span>${temperature}°C</span>
      </div>
    `;

    hourlyForecastDiv.innerHTML += hourlyHTML;
  });
}

function showImage() {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.style.display = 'block';
}
