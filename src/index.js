import getData from "./modules/api-data.js";
import { cToF } from "./modules/converters.js";
import { fToC } from "./modules/converters.js";
import { kelvinToCelsius } from "./modules/converters.js";
import "./style.css";

let showDay = () => {
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

function showError() {
  let errorContainer = document.querySelector(".error");
  errorContainer.textContent = "Not found please try again";
}

async function showData(obj) {
  let icon = document.querySelector(".icon");
  icon.src = `http://openweathermap.org/img/wn/${obj.iconCode}@2x.png`;

  let city = document.querySelector(".city-country");
  city.textContent = `${obj.city}, ${obj.country}`;

  let today = document.querySelector(".day");
  today.textContent = showDay();

  let temp = document.querySelector(".temp");
  temp.textContent = kelvinToCelsius(obj.temp);

  let feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = `feels like ${kelvinToCelsius(obj.feelsLike)}`;

  let humidity = document.querySelector(".humidity");
  humidity.textContent = `humidity ${obj.humidity}%`;
}

// showData();
getData("mahuva")
  .then((d) => {
    showData(d);
  })
  .catch(() => {
    let errorContainer = document.querySelector(".error");
    errorContainer.textContent = "Not found please try again";
  });
