"use strict";

button.addEventListener("click", function () {
  getCityData(search.value);
});

// toggle.addEventListener("click", function () {
//   getCityData(city_name.textContent, "metric");
// });

function getCityData(city, unit = "imperial") {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=" +
      unit +
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
