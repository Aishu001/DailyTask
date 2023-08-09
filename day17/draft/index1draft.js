// 1
//   function createCard(countryData,weatherData){
//     const card  = document.createElement("div")
//     card.classList.add("card","md-4")

//     const name = document.createElement("h5");
//     name.textContent = countryData.name.common;

//     const flagImg = document.createElement("img");
//     flagImg.src = countryData.flags.svg;
//     flagImg.classList.add("img-fluid", "mb-3");
  
    
//     const capital = document.createElement("p");
//     capital.textContent = "Capital: " + countryData.capital;
  
//     const region = document.createElement("p");
//     region.textContent = "Region: " + countryData.region;
  
//     const latlng = document.createElement("p");
//     latlng.textContent = "Latlng: " + countryData.latlng.join(", ");
  
//     const countryCodes = document.createElement("p");
//     countryCodes.textContent = "Country Codes: ";
//     // <a href="#" class="btn btn-primary" id = "afn"></a>
//     const weather = document.createElement("a");
//     weather.classList.add("btn","btn-primary")
//     weather.href = weatherData ;
//     weather.innerText = "Click For Whether ";
  
//     cardBody.appendChild(name);
//     cardBody.appendChild(flagImg);
//     cardBody.appendChild(capital);
//     cardBody.appendChild(region);
//     cardBody.appendChild(latlng);
//     cardBody.appendChild(countryCodes);
//     cardBody.appendChild(weather);
  
//     card.appendChild(cardBody);
//     return card;
//   }
    

    
// const apiUrl = "https://restcountries.com/v3.1/all";

// fetch(apiUrl).then(response =>{
//     if(response.status === 200){
//         //return the data in json format
//         return response.json();
//     }
// })
// .then((val) => {

//     const countries = val.filter((filterCountry)=>{
//         filterCountry.name.common === "Afganistan" ||
//         filterCountry.name.common === "Albania"||
//         filterCountry.name.common === "Aland Islands"
//     })

//     // const weatherList = countries.map(async(country)=>{
//     //     const lat = val[i].latlng[0];
//     //     const long = val[i].latlng[1];
//     //     const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
//     //     const weatherData = await weatherUrl.json();
//     //     return ({ countryData: country, weatherData })
//     // })
//     const weatherList = countries.map(async (country) => {
//         const lat = country.latlng[0]; // Use country instead of val[i]
//         const long = country.latlng[1];
//         const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
//         const weatherResponse = await fetch(weatherUrl); // Fetch the weather data
//         const weatherData = await weatherResponse.json(); // Parse JSON data
//         return { countryData: country, weatherData };
//     });
//     Promise.all(weatherList).then((result) =>{
//         const htmlcardConti = document.getElementById("cardsContainer");
//         result.forEach((results) =>{
//             const card = createCard(results.country,results.weatherData)
//             htmlcardConti.appendChild(card)
//         })
//     })

// })
// .catch ((error)=>{
//     console.log("OOPs Something wrong",error);
// })

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
  


// 3

// function createCard(countryData, weatherData) {
//     const card = document.createElement("div");
//     card.classList.add("card", "mb-4");
  
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
  
//     const name = document.createElement("h5");
//     name.textContent = countryData.name.common;
  
//     const flagImg = document.createElement("img");
//     flagImg.src = countryData.flags.svg;
//     flagImg.classList.add("img-fluid", "mb-3");
  
//     const capital = document.createElement("p");
//     capital.textContent = "Capital: " + countryData.capital;
  
//     const region = document.createElement("p");
//     region.textContent = "Region: " + countryData.region;
  
//     const countryCodes = document.createElement("p");
//     countryCodes.textContent = "Country Codes: " + countryData.cioc;
  
//     const weatherIcon = document.createElement("img");
//     weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//     weatherIcon.alt = "Weather Icon";
//     weatherIcon.classList.add("weather-icon");
  
//     const weather = document.createElement("a");
//     weather.classList.add("btn", "btn-primary");
//     weather.target = "_blank";
//     weather.href = `https://openweathermap.org/city/${weatherData.id}`;
//     weather.textContent = "Click For Weather";
//     weather.appendChild(weatherIcon);
  
//     cardBody.appendChild(name);
//     cardBody.appendChild(flagImg);
//     cardBody.appendChild(capital);
//     cardBody.appendChild(region);
//     cardBody.appendChild(countryCodes);
//     cardBody.appendChild(weather);
  
//     card.appendChild(cardBody);
//     return card;
//   }
  
//   const apiUrl = "https://restcountries.com/v3.1/all";
  
//   fetch(apiUrl)
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     })
//     .then((countries) => {
//       const filteredCountries = countries.filter(
//         (country) =>
//           country.name.common === "Afghanistan" ||
//           country.name.common === "Albania" ||
//           country.name.common === "Åland Islands"
//       );
  
//       const weatherList = filteredCountries.map(async (country) => {
//         const lat = country.latlng[0];
//         const long = country.latlng[1];
//         const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
//         const weatherResponse = await fetch(weatherUrl);
//         const weatherData = await weatherResponse.json();
//         return { countryData: country, weatherData };
//       });
  
//       Promise.all(weatherList).then((results) => {
//         const cardsContainer = document.getElementById("cardsContainer");
//         results.forEach((result) => {
//           const card = createCard(result.countryData, result.weatherData);
//           cardsContainer.appendChild(card);
//         });
//       });
//     })
//     .catch((error) => {
//       console.log("Oops, something went wrong:", error);
//     });


// 4
// function createCard(countryData) {
//   const card = document.createElement("div");
//   card.classList.add("card", "mb-4");

//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

//   const name = document.createElement("h5");
//   name.textContent = countryData.name.common;

//   const flagImg = document.createElement("img");
//   flagImg.src = countryData.flags.svg;
//   flagImg.classList.add("img-fluid", "mb-3");

//   const capital = document.createElement("p");
//   capital.textContent = "Capital: " + countryData.capital;

//   const region = document.createElement("p");
//   region.textContent = "Region: " + countryData.region;

//   const countryCodes = document.createElement("p");
//   countryCodes.textContent = "Country Codes: " + countryData.cioc;

//   const latlng = document.createElement("p");
//   latlng.textContent = "Latlng: " + countryData.latlng.join(", ");

//   const weather = document.createElement("a");
//   weather.classList.add("btn", "btn-primary");
//   weather.href = "#"; // Link to a new page

//   // Event listener for the anchor button
//   weather.addEventListener("click", () => {
//     // Open a new page with latlng values
//     window.open(`latlng.html?lat=${countryData.latlng[0]}&lng=${countryData.latlng[1]}`);
//   });

//   weather.textContent = "Click For Lat and Long";

//   cardBody.appendChild(name);
//   cardBody.appendChild(flagImg);
//   cardBody.appendChild(capital);
//   cardBody.appendChild(region);
//   cardBody.appendChild(countryCodes);
//   cardBody.appendChild(latlng);
//   cardBody.appendChild(weather);

//   card.appendChild(cardBody);
//   return card;
// }

// const apiUrl = "https://restcountries.com/v3.1/all";

// fetch(apiUrl)
//   .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     }
//   })
//   .then((countries) => {
//     const filteredCountries = countries.filter(
//       (country) =>
//         country.name.common === "Afghanistan" ||
//         country.name.common === "Albania" ||
//         country.name.common === "Åland Islands"
//     );

//     const cardsContainer = document.getElementById("cardsContainer");
//     filteredCountries.forEach((country) => {
//       const card = createCard(country);
//       cardsContainer.appendChild(card);
//     });
//   })
//   .catch((error) => {
//     console.log("Oops, something went")
//   })

  