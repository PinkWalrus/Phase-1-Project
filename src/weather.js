function weatherDetails(data) {
  city_temp.innerHTML = Math.round(data.main.temp) + "°";
  city_name.innerHTML = data.name + "&nbsp;";
  description.innerHTML = data.weather[0].description;
  max_temp.innerHTML = Math.round(data.main.temp_max) + "°";
  min_temp.innerHTML = Math.round(data.main.temp_min) + "°";
  feels_like.innerHTML = Math.round(data.main.feels_like) + "°";
  humidity.innerHTML = Math.round(data.main.humidity) + "%";
  wind_speed.innerHTML = `${Math.round(data.wind.speed)} ${
    toggle_state === "imperial" ? "mph" : "kph"
  }`;
  icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
}

function bgImg(icon) {
  document.body.style.backgroundImage = `url('/img/${icon}.png')`;
}
