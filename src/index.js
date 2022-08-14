"use strict";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getCityData(search.value, toggle_state);
  form.reset();
});

toggle.addEventListener("click", function () {
  if (toggle.classList.toggle("active")) {
    toggle_state = "metric";
    celsiusFahrenheit.textContent = "C";
  } else {
    toggle_state = "imperial";
    celsiusFahrenheit.textContent = "F";
  }
  getCityData(city_name.textContent, toggle_state);
});

function getCityData(city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=" +
      toggle_state +
      "&appid=" +
      API_KEY
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      weatherDetails(data);
      bgImg(data.weather[0].icon);
    })

    .catch(() => {
      alert("Not a valid city name");
    });
}

getCityData("Tampa");
