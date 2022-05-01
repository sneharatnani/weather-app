let kelvinToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;

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
  errorContainer.classList.remove("hide");
}

function validateInput() {
  let dataInput = document.querySelector(".cityNameInput");
  return dataInput.value !== "" ? true : false;
}

function changeBackground(code) {
  let container = document.querySelector("#container");
  switch (true) {
    case code === "03d" || code === "03n" || code === "04d" || code === "04n":
      container.removeAttribute("class");
      container.classList.add("cloud");
      break;

    case code === "09d" || code === "09n" || code === "10d" || code === "10n":
      container.removeAttribute("class");
      container.classList.add("rain");
      break;

    case code === "11d" || code === "11n" || code === "50d" || code === "50n":
      container.removeAttribute("class");
      container.classList.add("mist");
      break;

    case code === "13d" || code === "13n":
      container.removeAttribute("class");
      container.classList.add("snow");
      break;

    default:
      container.removeAttribute("class");
      container.classList.add("clear-sky");
  }
}

export {
  kelvinToCelsius,
  getDayName,
  showError,
  validateInput,
  changeBackground,
};
