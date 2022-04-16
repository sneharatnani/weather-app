import { getData, displayWeather } from "./modules/api-data.js";
import {
  kelvinToCelsius as kToC,
  kelvinToFahrenheit as kToF,
} from "./modules/converters.js";
import locationIcon from "./assets/location.svg";
import getLocation from "./modules/current-status.js";
import "./style.css";

let locationImg = document.querySelector(".location-icon");
locationImg.src = locationIcon;
let statusBtn = document.querySelector(".status");
statusBtn.addEventListener("click", getLocation);

let getDayName = () => {
  let dayList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let today = dayList[new Date().getDay()];
  return today;
};

function showError(err) {
  let errorContainer = document.querySelector(".error");
  errorContainer.textContent = "";
  errorContainer.textContent = err;
}

function showData(city, converter) {
  getData(city)
    .then((data) => {
      displayWeather(data, converter);
    })
    .catch(() => {
      showError("Not found please try again");
    });
}

window.onload = () => showData("mahuva", kToC);

export { showError, showData, getDayName };
