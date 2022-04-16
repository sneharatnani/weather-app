import "animate.css";
import { getData, displayWeather } from "./modules/api-data.js";
import {
  kelvinToCelsius as kToC,
  kelvinToFahrenheit as kToF,
  showError,
} from "./modules/utility.js";
import locationIcon from "./assets/location.svg";
import searchImg from "./assets/search.svg";
import getLocation from "./modules/current-status.js";
import "./style.css";

let locationImg = document.querySelector(".location-icon");
locationImg.src = locationIcon;
let statusBtn = document.querySelector(".status");
statusBtn.addEventListener("click", getLocation);
let searchIcon = document.querySelector(".search img");
searchIcon.src = searchImg;

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
