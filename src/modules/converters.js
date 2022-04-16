let kelvinToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;

let kelvinToFahrenheit = (kelvin) => `${1.8 * (kelvin - 273) + 32}°F`;

export { kelvinToCelsius, kelvinToFahrenheit };
