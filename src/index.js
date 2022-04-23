import "animate.css";
// import showData from "./modules/api-data.js";
import { getData, arrangeData } from "./modules/api-data.js";
import {
  kelvinToCelsius as kToC,
  celsiusToFahrenheit as cToF,
  fahrenheitToCelsius as fToC,
  showError,
  getDigits,
  validateInput,
  clearTags,
} from "./modules/utility.js";
import getLocation from "./modules/current-status.js";
import "./style.css";
import locationIcon from "./assets/location.svg";
import searchImg from "./assets/search.svg";

// set location and search icons
document.querySelector(".location-icon").src = locationIcon;
document.querySelector(".search img").src = searchImg;

// toggle degree
function toggleDegree() {
  let temp = document.querySelector(".temp");
  let feelsLike = document.querySelector(".feels-like");
  let toggleBtn = document.querySelector(".toggle");

  if (temp.textContent.includes("C")) {
    toggleBtn.textContent = "°C";
    temp.textContent = cToF(getDigits(temp.textContent));
    feelsLike.textContent = `Feels like ${cToF(
      getDigits(feelsLike.textContent)
    )}`;
  } else {
    toggleBtn.textContent = "°F";
    temp.textContent = fToC(getDigits(temp.textContent));
    feelsLike.textContent = `Feels like ${fToC(
      getDigits(feelsLike.textContent)
    )}`;
  }
}

function displayWeather() {
  document.querySelector(".main").classList.remove("hide");
  document.querySelector(".main").classList.add("visible");
  document.querySelector(".error").classList.add("hide");
}

function showData(city, converter) {
  getData(city)
    .then((data) => {
      arrangeData(data, converter);
      displayWeather();
    })
    .catch(() => {
      showError("City not found please try again");
    });
}

// events
let statusBtn = document.querySelector(".status");
statusBtn.addEventListener("click", getLocation);

let toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", toggleDegree);

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
  let cityName = document.querySelector(".cityNameInput").value;
  if (validateInput()) {
    showData(cityName, kToC);
  } else {
    showError("Please enter a city name");
  }
});

window.onload = () => showData("new york", kToC);

// export default displayWeather;
export default showData;
