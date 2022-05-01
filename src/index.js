import { getData, arrangeData } from "./modules/api-data.js";
import {
  kelvinToCelsius as kToC,
  showError,
  validateInput,
} from "./modules/utility.js";
import getLocation from "./modules/current-status.js";
import "./style.css";
import locationIcon from "./assets/location.svg";
import searchImg from "./assets/search.svg";

// set location and search icons
document.querySelector(".location-icon").src = locationIcon;
document.querySelector(".search img").src = searchImg;

function showData() {
  document.querySelector(".main").classList.remove("hide");
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
// to get location
let statusBtn = document.querySelector(".status");
statusBtn.addEventListener("click", getLocation);

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
  let cityName = document.querySelector(".cityNameInput").value;
  if (validateInput()) {
    displayWeather(cityName, kToC);
  } else {
    showError("Please enter a city name");
  }
});

// when enter key is pressed
window.addEventListener("keydown", (e) => {
  let city = document.querySelector(".cityNameInput").value;
  if (e.key === "Enter" && validateInput()) {
    e.preventDefault();
    displayWeather(city, kToC);
  }
});

window.onload = () => displayWeather("new york", kToC);

export default displayWeather;
