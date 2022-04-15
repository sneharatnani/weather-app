let kelvinToCelsius = (kelvin) => `${Math.round(kelvin - 273.15)}°C`;

let cToF = (celsius) => `${celsius * (9 / 5) + 32}°F`;

let fToC = (f) => `${((f - 32) * 5) / 9}°C`;

export { kelvinToCelsius, cToF, fToC };
