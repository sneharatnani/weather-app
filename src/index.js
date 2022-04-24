import "animate.css";
import { getData, arrangeData } from "./modules/api-data.js";
import {
  kelvinToCelsius as kToC,
  celsiusToFahrenheit as cToF,
  fahrenheitToCelsius as fToC,
  showError,
  getDigits,
  validateInput,
} from "./modules/utility.js";
import getLocation from "./modules/current-status.js";
import "./style.css";
import locationIcon from "./assets/location.svg";
import searchImg from "./assets/search.svg";

// set location and search icons
document.querySelector(".location-icon").src = locationIcon;
document.querySelector(".search img").src = searchImg;

// toggle degree
function toggleDegree(e) {
  let temp = document.querySelector(".temp");
  let feelsLike = document.querySelector(".feels-like");
  let fahrenheit = document.querySelector(".fahrenheit");
  let celsius = document.querySelector(".celsius");

  if (!e.target.checked) {
    temp.textContent = cToF(getDigits(temp.textContent));
    feelsLike.textContent = `Feels like ${cToF(
      getDigits(feelsLike.textContent)
    )}`;
    celsius.classList.remove("slide-right");
    fahrenheit.classList.add("slide-left");
  } else {
    temp.textContent = fToC(getDigits(temp.textContent));
    feelsLike.textContent = `Feels like ${fToC(
      getDigits(feelsLike.textContent)
    )}`;
    celsius.classList.add("slide-right");
    fahrenheit.classList.remove("slide-left");
  }
}

function showData() {
  document.querySelector(".main").classList.remove("hide");
  document.querySelector(".main").classList.add("animate");
  document.querySelector(".error").classList.add("hide");
}

function displayWeather(city, converter) {
  getData(city)
    .then((data) => {
      arrangeData(data, converter);
      showData();
    })
    .catch(() => {
      showError("City not found please try again");
    });
}

// events
let statusBtn = document.querySelector(".status");
statusBtn.addEventListener("click", getLocation);

let toggler = document.querySelector("#toggle");
toggler.addEventListener("click", toggleDegree);

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
  let cityName = document.querySelector(".cityNameInput").value;
  if (validateInput()) {
    displayWeather(cityName, kToC);
  } else {
    showError("Please enter a city name");
  }
});

window.onload = () => displayWeather("new york", kToC);

export default displayWeather;
