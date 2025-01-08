const apiKey = "ORPuGosGs0YnnmpTKLVS23C9Sd5mlE7e";  // Tu API Key
const lat = -35.029795;
const lon = -68.697099;

fetch(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${lon}`)
  .then(response => response.json())
  .then(data => {
    const locationKey = data.Key;
    getWeather(locationKey);
  })
  .catch(error => {
    console.error("Error al obtener el locationKey:", error);
  });

function getWeather(locationKey) {
  fetch(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}&language=es`)  // Agregado language=es
    .then(response => response.json())
    .then(weatherData => {
      const weatherDiv = document.getElementById("weather");
      const temperature = weatherData[0].Temperature.Metric.Value;
      const condition = weatherData[0].WeatherText; // Condición climática

      weatherDiv.innerHTML = `
        <p>${temperature}°C</p>
        <p>${condition}</p>  <!-- Muestra la condición climática en español -->
      `;
    })
    .catch(error => {
      console.error("Error al obtener el clima:", error);
      document.getElementById("weather").innerText = "No se pudo obtener el clima.";
    });
}
