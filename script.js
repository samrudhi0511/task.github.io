
async function fetchWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "85a187dad7mshfd0e9a6bcc1fb27p159531jsn90cd32812e85",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json(); // Parse response as JSON
      console.log(data);
  
      // Update HTML elements with data from the response
      //document.getElementById("cloud_pct").innerHTML = data.cloud_pct;
      document.getElementById("temp").innerHTML = data.temp;
      document.getElementById("temp2").innerHTML = data.temp;
      document.getElementById("feels_like").innerHTML = data.feels_like;
      document.getElementById("humidity").innerHTML = data.humidity;
      document.getElementById("humidity2").innerHTML = data.humidity;
      document.getElementById("min_temp").innerHTML = data.min_temp;
      document.getElementById("max_temp").innerHTML = data.max_temp;
      document.getElementById("wind_speed").innerHTML = data.wind_speed;
      document.getElementById("wind_speed2").innerHTML = data.wind_speed;
      document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
      document.getElementById("sunrise").innerHTML = data.sunrise;
      document.getElementById("sunset").innerHTML = data.sunset;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Get DOM elements
  const cityName = document.getElementById("cityName");
  const cityInput = document.getElementById("city");
  const submitButton = document.getElementById("submit");
  
  // Initial call with default city
  fetchWeather("Seattle");
  
  // Add event listener to submit button
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const newCity = cityInput.value;
    if (newCity) {
      cityName.innerHTML = newCity;
      fetchWeather(newCity);
    }
  });