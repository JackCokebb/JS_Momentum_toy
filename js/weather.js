function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const apiKey = "e9e91b315135ca1c0bd38cf10a669d95";
  const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  fetch(weather_url)
    .then((response) => response.json())
    .then((data) => {
      const cityContainer = document.querySelector("#weather span:last-child");
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      cityContainer.innerText = `@${data.name}`;
      weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    }); //promise func
}
function onGeoErr(err) {
  alert("cat'find you" + err);
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
