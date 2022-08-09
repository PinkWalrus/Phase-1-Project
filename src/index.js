"use strict";

const city_temp = document.querySelector(".city_temp");
const city_name = document.querySelector(".city_name");
const description = document.querySelector(".description");
const max_temp = document.querySelector(".max_temp");
const min_temp = document.querySelector(".min_temp");
const feels_like = document.querySelector(".feels_like");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind_speed");

const renderCity = function (data, className) {
  city_temp.innerHTML = Math.round(data.main.temp) + "°F";
  city_name.innerHTML = data.name;
  description.innerHTML = data.weather[0].description;
  max_temp.innerHTML = Math.round(data.main.temp_max) + "°F";
  min_temp.innerHTML = Math.round(data.main.temp_min) + "°F";
  feels_like.innerHTML = Math.round(data.main.feels_like) + "°F";
  humidity.innerHTML = Math.round(data.main.humidity) + "%";
  wind_speed.innerHTML = Math.round(data.wind.speed) + " mph";
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
