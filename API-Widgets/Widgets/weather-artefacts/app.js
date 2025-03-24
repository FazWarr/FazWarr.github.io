https://medium.com/@ravipatel.it/a-comprehensive-guide-to-fetching-weather-data-using-javascript-fetch-api-13133d0bc2e6
const API_KEY = '/weather';
const BASE_URL = 'https://api.weather.gc.ca/collections.weather.gc.ca/';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    try {
        // Fetch current weather
        const weatherResponse = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = await weatherResponse.json();
        displayCurrentWeather(weatherData);

        // Fetch 5-day forecast
        const forecastResponse = await fetch(`${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`);
        const forecastData = await forecastResponse.json();
        displayForecast(forecastData);

    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch weather data.');
    }
}

function displayCurrentWeather(data) {
    const weatherBody = document.getElementById('weatherBody');
    weatherBody.innerHTML = `
        <tr>
            <td>${data.name}</td>
            <td>${data.main.temp}°C</td>
            <td>${data.weather[0].description}</td>
        </tr>
    `;
}

function displayForecast(data) {
    const forecastBody = document.getElementById('forecastBody');
    forecastBody.innerHTML = '';

    // Forecast data comes in 3-hour intervals, so we'll filter to get daily forecasts
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    dailyForecasts.forEach(forecast => {
        const date = new Date(forecast.dt_txt).toLocaleDateString();
        forecastBody.innerHTML += `
            <tr>
                <td>${date}</td>
                <td>${forecast.main.temp}°C</td>
                <td>${forecast.weather[0].description}</td>
            </tr>
        `;
    });
}