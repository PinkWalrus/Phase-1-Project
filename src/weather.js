function weatherDetails(data) {
  city_temp.innerHTML = Math.round(data.main.temp) + "°";
  city_name.innerHTML = data.name + "&nbsp;";
  description.innerHTML = data.weather[0].description;
  max_temp.innerHTML = Math.round(data.main.temp_max) + "°";
  min_temp.innerHTML = Math.round(data.main.temp_min) + "°";
  feels_like.innerHTML = Math.round(data.main.feels_like) + "°";
  humidity.innerHTML = Math.round(data.main.humidity) + "%";
  wind_speed.innerHTML = Math.round(data.wind.speed) + " mph";
  icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
}

function bgImg(icon) {
  switch (icon) {
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
      document.body.style.backgroundImage = "url('/img/d_fewClouds.jpeg')";
      break;
    // few clouds (night) ////////////////////
    case "02n":
      document.body.style.backgroundImage = "url('/img/d_fewClouds.jpeg')";
      break;
    // scattered clouds (day) ////////////////////
    case "03d":
      document.body.style.backgroundImage = "url('/img/d_fewClouds.jpeg')";
      break;
    // scattered clouds (night) ////////////////////
    case "03n":
      document.body.style.backgroundImage = "url('/img/d_fewClouds.jpeg')";
      break;
    // broken clouds (day) //////////////////// **
    case "04d":
      document.body.style.backgroundImage = "url('/img/d_brokenClouds.jpeg')";
      break;
    // broken clouds (night) ////////////////////
    case "04n":
      document.body.style.backgroundImage = "url('/img/d_brokenClouds.jpeg')";
      break;
    // shower rain / rain (day)
    case "09d":
    case "10d":
      document.body.style.backgroundImage = "url('/img/d_rain.jpeg')";
      break;
    // shower rain / rain (night) ////////////////////
    case "09n":
    case "10n":
      document.body.style.backgroundImage = "url('/img/d_rain.jpeg')";
      break;
    // thunderstorm (day) ////////////////////
    case "11d":
      document.body.style.backgroundImage = "url('/img/n_thunderstorm.jpeg')";
      break;
    // thunderstorm (night) //////////////////// **
    case "11n":
      document.body.style.backgroundImage = "url('/img/n_thunderstorm.jpeg')";
      break;
    //snow (day)
    case "13d":
      document.body.style.backgroundImage = "url('/img/d_snow.jpeg')";
      break;
    // snow (night)
    case "13n":
      document.body.style.backgroundImage = "url('/img/n_snow.jpeg')";
      break;
    // mist (day) ////////////////////
    case "50d":
      document.body.style.backgroundImage = "url('/img/d_mist.jpeg')";
      break;
    // mist (night)
    case "50n":
      document.body.style.backgroundImage = "url('/img/d_mist.jpeg')";
      break;
  }
}
