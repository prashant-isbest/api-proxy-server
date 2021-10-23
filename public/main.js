const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=787e66a44766865fcf7a5bd22b867ad9&units=metric`
  );

  if (response.status == 404) {
    alert("Please enter a vaild city");
  }

  if ((response.status = 200)) {
    const result = await response.json();

    const data = {
      city: result.name,
      temp: result.main.temp,
    };
    addWeatherToDom(data);
  }
};

const weatherDisplay = document.querySelector("#weather");
const addWeatherToDom = (data) => {
  weatherDisplay.innerHTML = `
        <h2>Weather in ${data.city}</h2>
        <h1>${data.temp}</h1>
    `;
};

const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cityInput.value === "") {
    alert("Please enter a city");
  } else {
    fetchWeather(cityInput.value);
  }
});

fetchWeather("Delhi");
