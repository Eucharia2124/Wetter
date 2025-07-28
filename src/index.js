
function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

}

function searchCity(city) {
    let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value); // Call searchCity function to fetch weather data
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);



 