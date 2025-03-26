document.getElementById("search-button").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
  
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
  
    // Get latitude and longitude for the city
    fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json`)
      .then(response => response.json())
      .then(geoData => {
        if (geoData.length === 0) {
          alert("City not found. Please try another one.");
          return;
        }

        // Extract city and country
        const cityName = geoData[0].display_name.split(",")[0];
        const countryName = geoData[0].display_name.split(",").pop();

        document.getElementById("city-country").textContent = `Location: ${cityName}, ${countryName}`;
  
        const lat = geoData[0].lat;
        const lon = geoData[0].lon;
  
        // Fetch weather data using Open-Meteo API
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_min,temperature_2m_max&current_weather=true&hourly=relative_humidity_2m&timezone=auto`;
  
        fetch(weatherUrl)
          .then(response => response.json())
          .then(weatherData => {

            // Safely access forecast dates
            const forecastDates = weatherData.daily?.time?.slice(0, 7) || [];
            if (forecastDates.length === 0) {
                console.error("No forecast dates available in the API response.");
              return;
            }

            // Current weather
            const currentTemp = weatherData.current_weather.temperature;
            const humidity = weatherData.hourly.relative_humidity_2m[0];
            const weatherCode = weatherData.current_weather.weathercode;
            // const weatherType = weatherData.current_weather.weathercode; // Map codes to weather types
            const weatherType = getWeatherTypeClass(weatherData.current_weather.weathercode);
            

  
            // Format date and time
            const now = new Date(weatherData.current_weather.time);
            const day = now.toLocaleString('en-US', { weekday: 'long' });
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString();
  
            // Update the HTML elements
            document.getElementById("current-weather").textContent = `Current Weather: ${currentTemp}°C`;
            document.getElementById("current-day").textContent = `Day: ${day}`;
            document.getElementById("current-date").textContent = `Date: ${date}`;
            document.getElementById("current-time").textContent = `Time: ${time}`;
            document.getElementById("humidity-level").textContent = `Humidity: ${humidity}%`;
            document.getElementById("weather-type").textContent = `Weather Type: ${weatherType}`;
            
            // Apply background class
            const weatherClass = getWeatherTypeClass(weatherCode);
            document.body.className = weatherClass;

            // Display 7-day forecast
            const forecastList = document.getElementById("forecast-list");
            forecastList.innerHTML = ""; // Clear previous forecast
  
            const dailyForecast = weatherData.daily.temperature_2m_max.slice(0, 7); // Get next 5 days
            dailyForecast.forEach((temp, index) => {
              // Convert forecast date to day name
              const forecastDate = new Date(forecastDates[index]);
              const forecastDay = forecastDate.toLocaleString("en-US", { weekday: "long" }); // Extract day name

              // Create list item
              const listItem = document.createElement("li");
              listItem.style.listStyleType = "none"; // Remove bullet styling
              listItem.textContent = `${forecastDay}: Max Temp ${temp}°C`;
              forecastList.appendChild(listItem);
            });
          })
          .catch(error => {
            console.error("Error fetching weather data:", error);
          });
      })
      .catch(error => {
        console.error("Error fetching city data:", error);
      });
  });

  function getWeatherType(code) {
    const weatherTypes = {
      0: "Clear Sky",
      1: "Mainly Clear",
      2: "Partly Cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing Rime Fog",
      // Add other weather codes here
    };
    return weatherTypes[code] || "Unknown";
  }

  function getWeatherTypeClass(code) {
    const weatherClasses = {
      0: "weather-clear", // Clear Sky
      1: "weather-clear", // Mainly Clear
      2: "weather-cloudy", // Partly Cloudy
      3: "weather-cloudy", // Overcast
      45: "weather-foggy", // Fog
      48: "weather-foggy", // Depositing Rime Fog
      61: "weather-rainy", // Rain
      71: "weather-snowy", // Snow
      // Add more mappings as needed
    };
    return weatherClasses[code] || "weather-clear"; // Default to clear weather
  }
  
  






// https://medium.com/@ravipatel.it/a-comprehensive-guide-to-fetching-weather-data-using-javascript-fetch-api-13133d0bc2e6
// const API_KEY = 'forecast';
// const BASE_URL = 'https://api.open-meteo.com/v1/';

// async function getWeather() {
//     const city = document.getElementById('cityInput').value;
//     if (!city) {
//         alert('Please enter a city name.');
//         return;
//     }

//     try {
//         // Fetch current weather
//         const weatherResponse = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
//         const weatherData = await weatherResponse.json();
//         displayCurrentWeather(weatherData);

//         // Fetch 5-day forecast
//         const forecastResponse = await fetch(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
//         const forecastData = await forecastResponse.json();
//         displayForecast(forecastData);

//     } catch (error) {
//         console.error('Error fetching data:', error);
//         alert('Failed to fetch weather data.');
//     }
// }

// function displayCurrentWeather(data) {
//     const weatherBody = document.getElementById('weatherBody');
//     weatherBody.innerHTML = `
//         <tr>
//             <td>${data.name}</td>
//             <td>${data.main.temp}°C</td>
//             <td>${data.weather[0].description}</td>
//         </tr>
//     `;
// }

// function displayForecast(data) {
//     const forecastBody = document.getElementById('forecastBody');
//     forecastBody.innerHTML = '';

//     // Forecast data comes in 3-hour intervals, so we'll filter to get daily forecasts
//     const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));
//     dailyForecasts.forEach(forecast => {
//         const date = new Date(forecast.dt_txt).toLocaleDateString();
//         forecastBody.innerHTML += `
//             <tr>
//                 <td>${date}</td>
//                 <td>${forecast.main.temp}°C</td>
//                 <td>${forecast.weather[0].description}</td>
//             </tr>
//         `;
//     });
// }