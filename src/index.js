function refreshWeather(response) {
    console.log(response.data);
}
function searchCity(city) {
    let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
   let cityElement = document.querySelector("#city");
   cityElement.innerHTML = searchInput.value; 
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);