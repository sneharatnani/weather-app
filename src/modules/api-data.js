import { showError, getDayName } from "../index.js";

async function getData(city) {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9814c6dc9ff4e95b4f19390d2a44256d`,
      { mode: "cors" }
    );
    // check for error from response
    if (!response.ok) {
      showError("Not found please try again");
    }
    let jsonData = await response.json();
    /* return the required data */
    return {
      city: jsonData.name,
      country: jsonData.sys.country,
      temp: jsonData.main.temp,
      feelsLike: jsonData.main.feels_like,
      description: jsonData.weather[0].main,
      iconCode: jsonData.weather[0].icon,
      humidity: jsonData.main.humidity,
    };
  } catch (err) {
    throw new Error(err);
  }
}

// display api data
function displayWeather(obj, converter) {
  let icon = document.querySelector(".icon");
  icon.src = `http://openweathermap.org/img/wn/${obj.iconCode}@2x.png`;

  let city = document.querySelector(".city-country");
  city.textContent = `${obj.city}, ${obj.country}`;

  let today = document.querySelector(".day");
  today.textContent = getDayName();

  let temp = document.querySelector(".temp");
  temp.textContent = converter(obj.temp);

  let feelsLike = document.querySelector(".feels-like");
  feelsLike.textContent = `feels like ${converter(obj.feelsLike)}`;

  let humidity = document.querySelector(".humidity");
  humidity.textContent = `humidity ${obj.humidity}%`;
}
export { getData, displayWeather };
