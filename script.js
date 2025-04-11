const apiKey = 'a54a5a0c60f12e022b9b476c5f001f4c';

function getWeather() {
  const city = document.getElementById('cityInput').value || 'London';
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.success === false) {
        document.getElementById('output').innerText = "❌ Error: " + data.error.info;
        return;
      }
      const temp = data.current.temperature;
      const desc = data.current.weather_descriptions[0];
      const location = `${data.location.name}, ${data.location.country}`;
      document.getElementById('output').innerText =
        `🌡️ ${temp}°C, ${desc} in ${location}`;
    })
    .catch(error => {
      console.error(error);
      document.getElementById('output').innerText = "⚠️ Failed to fetch weather.";
    });
}
