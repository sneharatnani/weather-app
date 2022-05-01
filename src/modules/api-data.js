import { showError, getDayName, changeBackground } from "./utility.js";

async function getData(city) {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9814c6dc9ff4e95b4f19390d2a44256d`,
      { mode: "cors" }
    );
    // check for error from response
    if (!response.ok) {
      showError("City not found please try again");
    }
    let jsonData = await response.json();
    /* return the required data */
    return {
      city: jsonData.name,
      country: jsonData.sys.country,
      temp: jsonData.main.temp,
      feelsLike: jsonData.main.feels_like,
      description: jsonData.weather[0].description,
      iconCode: jsonData.weather[0].icon,
      humidity: jsonData.main.humidity,
    };
  } catch (err) {
    throw new Error(err);
  }
}

// display api data
function arrangeData(obj, converter) {
  changeBackground(obj.iconCode);

  let description = document.querySelector(".desc");
  description.textContent = obj.description;

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

export { getData, arrangeData };
