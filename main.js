document.addEventListener('DOMContentLoaded', () => {

    const apiKey = 'b67525a4fc4a76145207eaabbaf78866';
    const location_out = document.getElementById('location')
    const weatherIcon = document.getElementById('weather-icon');
    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('weather-desc');

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
        location_out.textContent = locationInput.textContent;
        weatherIcon.src = weatherData.weather_icons[0];
        temperatureElement.textContent = `${weatherData.temperature}°C`;
        conditionsElement.textContent = weatherData.weather_descriptions[0];
    }

    // Event listener for search button
    searchButton.addEventListener('click', async () => {
        const location = locationInput.value;
        if (location) {
            const weatherData = await fetchWeatherData(location);
            console.log(weatherData);
            updateUI(weatherData);
        }
    });
});