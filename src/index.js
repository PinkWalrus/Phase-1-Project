"use strict";

const body = document.querySelector("body");
const city_temp = document.querySelector(".city_temp");
const city_name = document.querySelector(".city_name");
const description = document.querySelector(".description");
const max_temp = document.querySelector(".max_temp");
const min_temp = document.querySelector(".min_temp");
const feels_like = document.querySelector(".feels_like");
const humidity = document.querySelector(".humidity");
const wind_speed = document.querySelector(".wind_speed");
const icon = document.querySelector(".city_icon");
const button = document.querySelector(".submit_button");
const search = document.querySelector(".search");

button.addEventListener("click", function (e) {
  e.preventDefault();

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      search.value +
      "&units=imperial&appid=" +
      API_KEY
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      city_temp.innerHTML = Math.round(data.main.temp) + "°F";
      city_name.innerHTML = data.name;
      description.innerHTML = data.weather[0].description;
      max_temp.innerHTML = Math.round(data.main.temp_max) + "°F";
      min_temp.innerHTML = Math.round(data.main.temp_min) + "°F";
      feels_like.innerHTML = Math.round(data.main.feels_like) + "°F";
      humidity.innerHTML = Math.round(data.main.humidity) + "%";
      wind_speed.innerHTML = Math.round(data.wind.speed) + " mph";
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;

      switch (data.weather[0].icon) {
        // clear sky (day)
        case "01d":
          document.body.style.backgroundImage = "url('/img/d_clear.jpeg')";
          break;
        // clear sky (night)
        case "01n":
          document.body.style.backgroundImage = "url('/img/n_clear.jpeg')";
          break;
        // few clouds (day)
        case "02d":
          document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
          break;
        // few clouds (night)
        case "02n":
          document.body.style.backgroundImage =
            "url('/img/n_thunderstorm.jpeg')";
          break;
        // scattered clouds (day)
        case "03d":
          document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
          break;
        // scattered clouds (night)
        case "03n":
          document.body.style.backgroundImage =
            "url('/img/n_thunderstorm.jpeg')";
          break;
        // broken clouds (day)
        case "04d":
          document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
          break;
        // broken clouds (night)
        case "04n":
          document.body.style.backgroundImage =
            "url('/img/n_thunderstorm.jpeg')";
          break;
        // shower rain / rain (day)
        case "09d":
        case "10d":
          document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
          break;
        // shower rain / rain (night)
        case "09n":
        case "10n":
          document.body.style.backgroundImage = "url('/img/n_clear.jpeg')";
          break;
        // thunderstorm (day)
        case "11d":
          document.body.style.backgroundImage = "url('/img/d_snow.jpeg')";
          break;
        // thunderstorm (night)
        case "11n":
          document.body.style.backgroundImage =
            "url('/img/n_thunderstorm.jpeg')";
          break;
        case "13d":
          document.body.style.backgroundImage = "url('/img/d_snow.jpeg')";
          break;
        // snow (night)
        case "13n":
          document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
          break;
        // mist (day)
        case "50d":
          document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
          break;
        // mist (night)
        case "50n":
          document.body.style.backgroundImage = "url('/img/n_mist.jpeg')";
          break;
      }
    })

    .catch(() => {
      alert("Not a valid city name");
    });
});
