async function getData(city) {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9814c6dc9ff4e95b4f19390d2a44256d`
    );

    // check for error from response
    if (!response.ok) {
      return new Error(response.status);
    }
    let jsonData = await response.json();
    /* return the required data */
    return jsonData; /*  {
      city: jsonData.name,
      country: jsonData.sys.country,
      temp: jsonData.main.temp,
      feelsLike: jsonData.main.feels_like,
      description: jsonData.weather[0].main,
      iconCode: jsonData.weather[0].icon,
      humidity: jsonData.main.humidity,
    }; */
  } catch (err) {
    throw new Error(err);
  }
}

export default getData;
