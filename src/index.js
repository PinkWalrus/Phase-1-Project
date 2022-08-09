"use strict";
const temp = document.querySelector(".temp");

// create a git ignore file

const renderCity = function (data, className) {
  temp.innerHTML = data.main.temp;
};

const getCityData = function (cityName) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${API_KEY}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderCity(data);
    });
};
getCityData("Sarasota");
