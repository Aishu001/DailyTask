// Function to create a Bootstrap card
function createCard(countryData, weatherData) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-4");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const flagImg = document.createElement("img");
    flagImg.src = countryData.flags.svg;
    flagImg.classList.add("img-fluid", "mb-3");
  
    const name = document.createElement("h5");
    name.textContent = countryData.name.common;
  
    const capital = document.createElement("p");
    capital.textContent = "Capital: " + countryData.capital;
  
    const region = document.createElement("p");
    region.textContent = "Region: " + countryData.region;
  
    const latlng = document.createElement("p");
    latlng.textContent = "Latlng: " + countryData.latlng.join(", ");
  
    const countryCodes = document.createElement("p");
    countryCodes.textContent = "Country Codes: " + Object.keys(countryData.cca2).join(", ");
  
    const weather = document.createElement("p");
    weather.textContent = "Weather: " + weatherData.weather[0].description;
  
    cardBody.appendChild(flagImg);
    cardBody.appendChild(name);
    cardBody.appendChild(capital);
    cardBody.appendChild(region);
    cardBody.appendChild(latlng);
    cardBody.appendChild(countryCodes);
    cardBody.appendChild(weather);
  
    card.appendChild(cardBody);
    return card;
  }
  
  // Fetch data from Restcountries API
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      // Filter countries Afganistan, Albania, and Aland Islands
      const countries = data.filter(
        (country) =>
          country.name.common === "Afghanistan" ||
          country.name.common === "Albania" ||
          country.name.common === "Aland Islands"
      );
  
      // Fetch weather data for each country
      const weatherPromises = countries.map(async (country) => {
        const lat = country.latlng[0];
        const lon = country.latlng[1];
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=37ba9824a231c697643e4a57ef092cf6`);
        const weatherData = await response.json();
        return ({ countryData: country, weatherData });
      });
  
      Promise.all(weatherPromises).then((results) => {
        const cardsContainer = document.getElementById("cardsContainer");
        results.forEach((result) => {
          const card = createCard(result.countryData, result.weatherData);
          cardsContainer.appendChild(card);
        });
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
  