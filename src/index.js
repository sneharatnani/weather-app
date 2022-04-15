// async function showApi(url) {
//   try {
//     let response = await fetch(url, { mode: "cors" });
//     if (!response.ok) {
//       return new Error("data not found");
//     }
//     let data = await response.json();
//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// }

// showApi(
//   "http://api.openweathermap.org/data/2.5/weather?q=mahuva&APPID=9814c6dc9ff4e95b4f19390d2a44256d"
// )
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// image.src = "http://openweathermap.org/img/w/01d.png";

import getData from "./modules/api-data.js";
import "./style.css";
let image = document.querySelector(".icon");
let para = document.querySelector("p");
function showImg(code) {
  image.src = `http://openweathermap.org/img/wn/${code}@2x.png`;
}

getData("amazon")
  .then((data) => data.weather[0].icon)
  .then((icon) => {
    showImg(icon);
  })
  .catch((err) => (para.textContent = err));
