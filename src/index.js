import "animate.css";
import { getData, displayWeather } from "./modules/api-data.js";
import {
  kelvinToCelsius as kToC,
  celsiusToFahrenheit as cToF,
  fahrenheitToCelsius as fToC,
  showError,
} from "./modules/utility.js";
import getLocation from "./modules/current-status.js";
import "./style.css";
import locationIcon from "./assets/location.svg";
import searchImg from "./assets/search.svg";

let locationImg = document.querySelector(".location-icon");
locationImg.src = locationIcon;
let statusBtn = document.querySelector(".status");
statusBtn.addEventListener("click", getLocation);
let searchIcon = document.querySelector(".search img");
searchIcon.src = searchImg;

function toggleDegree() {
  let temp = document.querySelector(".temp");
  let feelsLike = document.querySelector(".feels-like");
  let toggleBtn = document.querySelector(".toggle");
  if (temp.textContent.includes("C")) {
    toggleBtn.textContent = "°C";
    temp.textContent = cToF(getDegree(temp.textContent));
    feelsLike.textContent = `Feels like ${cToF(
      getDegree(feelsLike.textContent)
    )}`;
  } else {
    toggleBtn.textContent = "°F";
    temp.textContent = fToC(getDegree(temp.textContent));
    feelsLike.textContent = `Feels like ${fToC(
      getDegree(feelsLike.textContent)
    )}`;
  }
}

let getDegree = (str) => {
  let degree = str.match(/\d+/g).join("");
  return Number(degree);
};

let toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", toggleDegree);

function showData(city, converter) {
  getData(city)
    .then((data) => {
      displayWeather(data, converter);
    })
    .catch(() => {
      showError("Not found please try again");
    });
}

function getCityName() {
  let dataInput = document.querySelector(".cityNameInput");
  if (dataInput.value !== "") {
    showData(dataInput.value, kToC);
  } else {
    showError("Please enter a city name");
  }
}

let searchBtn = document.querySelector(".search");
searchBtn.addEventListener("click", () => {
  getCityName();
  document.querySelector(".search-bar").classList.add("hide");
  document.querySelector(".main").classList.remove("hide");
  document.querySelector(".main").classList.add("visible");
});

export { showData };
