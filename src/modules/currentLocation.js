import displayWeather from "../index.js";
import { showError } from "./view.js";
import kToC from "./utils/kelvinToCelsius.js";

function getCurrentLocation() {
  if (!navigator.geolocation) {
    /* geolocation not supported */
    showError("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, () =>
      showError("Unable to retrieve your location")
    );
  }
}

async function success(position) {
  const { latitude, longitude } = position.coords;
  let response = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=9814c6dc9ff4e95b4f19390d2a44256d`,
    { mode: "cors" }
  );

  let data = await response.json();
  displayWeather(data[0].name, kToC);
}

export default getCurrentLocation;
