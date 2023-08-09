
// 2
function createCard(countryData, weatherData) {
    const card = document.createElement("div");
    card.setAttribute("id","card")
    card.classList.add("card", "mb-4"); // Use "mb-4" for margin at the bottom
  
    const cardBody = document.createElement("div");
    cardBody.setAttribute("id","cardbody")
    cardBody.classList.add("card-body");
  
    const name = document.createElement("h5");
    name.setAttribute("id","namee")
    name.textContent = countryData.name.common;
  
    const flagImg = document.createElement("img");
    flagImg.setAttribute("id","image")
    flagImg.src = countryData.flags.svg;
    flagImg.classList.add("img-fluid", "mb-3");
  
    const capital = document.createElement("p");
    capital.setAttribute("id","cptl")
    capital.textContent = "Capital: " + countryData.capital;
  
    const region = document.createElement("p");
    region.setAttribute("id","regn")
    region.textContent = "Region: " + countryData.region;
  
  
    const countryCodes = document.createElement("p");
    countryCodes.setAttribute("id","ccode")
    countryCodes.textContent = "Country Codes: " + countryData.cca3;
  
    const weather = document.createElement("a");
    weather.setAttribute("id","btnn")
    weather.classList.add("btn", "btn-primary");
    weather.target = "_blank"
    weather.href = weatherData;
    weather.textContent = "Click For Weather";
  
    cardBody.appendChild(name);
    cardBody.appendChild(flagImg);
    cardBody.appendChild(capital);
    cardBody.appendChild(region);
    cardBody.appendChild(countryCodes);
    cardBody.appendChild(weather);
  
    card.appendChild(cardBody);
    return card;
  }
  
  const apiUrl = "https://restcountries.com/v3.1/all";
  
  fetch(apiUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((countries) => {
      const filteredCountries = countries.filter(
        (country) =>
          country.name.common === "Afghanistan" ||
          country.name.common === "Albania" ||
          country.name.common ===  "Åland Islands" 
      );
  
      const weatherList = filteredCountries.map(async (country) => {
        const lat = country.latlng[0];
        const long = country.latlng[1];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
        // const weatherResponse =  fetch(weatherUrl);
        const weatherData = weatherUrl;
        return { countryData: country, weatherData };
      });
  
      Promise.all(weatherList).then((results) => {
        const cardsContainer = document.getElementById("cardsContainer");
        results.forEach((result) => {
          const card = createCard(result.countryData, result.weatherData);
          cardsContainer.appendChild(card);
        });
      });
    })
    .catch((error) => {
      console.log("Oops, something went wrong:", error);
    });
  




  