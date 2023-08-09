require('dotenv').config();

const apiKey = process.env.WEATHERSTACK_API_KEY;
const location = document.getElementsByClassName('location')
const weatherIcon = document.getElementsByClassName('weather-icon');
const temperatureElement = document.getElementByIdgetElementsByClassName('temperature');
const conditionsElement = document.getElementsByClassName('weather-desc');
const locationInput = document.getElementById('location-inp');
const searchButton = document.getElementById('fetch-btn');

// Function to fetch weather data from API
async function fetchWeatherData(location) {
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.current;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to update UI with weather data
function updateUI(weatherData) {
    location.textContent = weatherData.location[name];
    weatherIcon.src = weatherData.weather_icons[0];
    temperatureElement.textContent = `${weatherData.temperature}°C`;
    conditionsElement.textContent = weatherData.weather_descriptions[0];
}

// Event listener for search button
searchButton.addEventListener('click', async () => {
    const location = locationInput.value;
    if (location) {
        const weatherData = await fetchWeatherData(location);
        updateUI(weatherData);
    }
});
