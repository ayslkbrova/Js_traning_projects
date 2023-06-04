const searchButton = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");
const APiKey = "8323b8146e044e378b6d5f75a488fbc5";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon")
function checkData(city) {

    fetch(ApiUrl + city + `&appid=${APiKey}`).then((response) => response.json()).then((data) => {
        console.log(data);
        if (data.cod == 404) {
            document.querySelector(".error-message").style.display="block"
            document.querySelector('.weather').style.display = "none";
        }
        else {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector('.temp').innerHTML =`${Math.round(data.main.temp)}°c`;
            document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
            if (data.weather[0].main = "Clouds") {
                weatherIcon.src = "images/clouds.png"
            }
            else if (data.weather[0].main = "Clear") {
                weatherIcon.src = "images/clear.png"
            }
            else if (data.weather[0].main = "Rain") {
                weatherIcon.src = "images/rain.png"
            }
            else if (data.weather[0].main = "Drizzle") {
                weatherIcon.src = "images/drizzle.png"
            }
            else if (data.weather[0].main = "Mist") {
                weatherIcon.src = "images/mist.png";
            }
            else if (data.weather[0].main = "Snow") {
                weatherIcon.src = "images/snow.png";
            }
            document.querySelector('.weather').style.display = "block";
            document.querySelector(".error-message").style.display = "none";
        }
    });


}
checkData();

searchButton.addEventListener("click", () => {
    checkData(searchInput.value)
})
