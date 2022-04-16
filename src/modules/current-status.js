import { showData } from "../index.js";
import { kelvinToCelsius as kToC, showError } from "./utility.js";

function getCurrentLocation() {
  if (!navigator.geolocation) {
    /* geolocation not supported */
    showError("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// function to execute for success
async function success(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let myLocation = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=9814c6dc9ff4e95b4f19390d2a44256d`,
    { mode: "cors" }
  );

  let data = await myLocation.json();
  showData(data[0].name, kToC);
}

// for errors
function error() {
  showError("Unable to retrieve your location");
}

export default getCurrentLocation;
