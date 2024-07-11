"use-strict";
document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "1d3f38ca478e1bdb2d22a2b0ab67730d";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial";

  checkWeather("alaska");
  async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    console.log(data.main);
    console.log(data.weather);

    weatherContainer.style.display = 100;
    cityName.textContent = data.name;
    temp.textContent = `${Math.trunc(data.main.temp)}\u00B0F`;
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${Math.round(data.wind.speed)} mph`;

    // const icon = data.weather[0].icon;
    icon.src = `icons/${data.weather[0].icon}.png`;
    console.log(icon);
  }

  //   checkWeather("dublin");
  const searchInput = document.querySelector(".city-input");
  const searchBtn = document.querySelector(".btn-search");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const cityName = document.querySelector(".city-display");

  const temp = document.querySelector(".temperature");
  const icon = document.querySelector(".weather-icon");
  const weatherContainer = document.querySelector(".weather-container");
  //   const humidity = document.querySelector(".humidity");

  searchBtn.addEventListener("click", function () {
    const city = searchInput.value;
    searchInput.value = "";
    if (city) {
      checkWeather(String(city));
    }
  });
});
