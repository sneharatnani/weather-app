export default function fetchData(city) {
  const response = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9814c6dc9ff4e95b4f19390d2a44256d`,
    { mode: "cors" }
  );
  return response;
}
