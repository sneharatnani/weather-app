let kelvinToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;

let kelvinToFahrenheit = (kelvin) => `${1.8 * (kelvin - 273) + 32}°F`;

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

export { kelvinToCelsius, kelvinToFahrenheit, getDayName, showError };
