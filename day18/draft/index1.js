//  only the quotesUrl
document.addEventListener("DOMContentLoaded", () => {
  let quoteUrl = "https://api.seriesquotes.10cyrilc.me/quote/";

  // Function to create a Bootstrap card with quote details
  function cardCreation(author, series, quote) {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4"); // Use Bootstrap classes for grid layout
  
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
  
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    const name1 = document.createElement("h5");
    name1.classList.add("card-title");
    name1.textContent = author;
  
    const name2 = document.createElement("h6");
    name2.classList.add("card-subtitle", "mb-2", "text-muted");
    name2.textContent = series;
  
    const capital = document.createElement("p");
    capital.classList.add("card-text");
    capital.textContent = quote;
  
    const weather = document.createElement("button");
    weather.setAttribute("type", "button");
    weather.classList.add("btn", "btn-primary");
    weather.textContent = "Refresh";
  
    // Add click event listener to the "Refresh" button
    weather.addEventListener("click", () => {
      fetchNewQuote(capital);
    });
  
    cardBody.appendChild(name1);
    cardBody.appendChild(name2);
    cardBody.appendChild(capital);
    cardBody.appendChild(weather);
  
    cardContainer.appendChild(cardBody);
    card.appendChild(cardContainer);
    return card;
  }
  
  // Function to fetch a new quote and update the card
  function fetchNewQuote(capitalElement) {
    fetch(quoteUrl)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((quotes) => {
        if (quotes.length > 0) {
          const newQuote = quotes[0]; // Assuming you want the first quote from the response
          const quote = newQuote.quote;
  
          // Update the content of the card
          capitalElement.textContent = quote;
        }
      });
  }
  
  fetch(quoteUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((quotes) => {
      const cardContainer = document.getElementById("card-container");
  
      quotes.forEach((loop) => {
        const author = loop.author;
        const series = loop.series;
        const quote = loop.quote;
  
        const card = cardCreation(author, series, quote);
        cardContainer.appendChild(card);
      });
    });
});
