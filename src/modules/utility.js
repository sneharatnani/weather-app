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
  let errorContainer = document.querySelector(".error");
  errorContainer.textContent = "";
  errorContainer.textContent = err;
}

export {
  kelvinToCelsius,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  getDayName,
  showError,
};
