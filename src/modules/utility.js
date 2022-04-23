let kelvinToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;

let celsiusToFahrenheit = (c) => `${Math.round(c * (9 / 5) + 32)}°F`;

let fahrenheitToCelsius = (f) => `${Math.round((f - 32) * (5 / 9))}°C`;

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
  document.querySelector(".main").classList.add("hide");
  let errorContainer = document.querySelector(".error");
  errorContainer.textContent = "";
  errorContainer.textContent = err;
  errorContainer.classList.remove("hide");
}

let getDigits = (str) => {
  let digits = str.match(/\d+/g).join("");
  return Number(digits);
};

function validateInput() {
  let dataInput = document.querySelector(".cityNameInput");
  return dataInput.value !== "" ? true : false;
}

function clearTags() {
  document.querySelector(".icon").src = "";
  document.querySelector(".weather-description").textContent = "";
  document.querySelector(".city-country").textContent = "";
  document.querySelector(".day").textContent = "";
  document.querySelector(".temp").textContent = "";
  document.querySelector(".feels-like").textContent = "";
  document.querySelector(".humidity").textContent = "";
}

export {
  kelvinToCelsius,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  getDayName,
  showError,
  getDigits,
  validateInput,
  clearTags,
};
