"use strict";

button.addEventListener("click", function () {
  getCityData(search.value);
});

const cf = document.querySelector(".cf");

toggle.addEventListener("click", function () {
  if (toggle.classList.toggle("active")) {
    getCityData(city_name.textContent, "metric");
    cf.textContent = "C";
  } else {
    getCityData(city_name.textContent, "imperial");
    cf.textContent = "F";
  }
});

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
