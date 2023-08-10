document.addEventListener("DOMContentLoaded", () => {
    const imageUrl1 = "https://api.catboys.com/img";
    const imageUrl2 = "https://api.thecatapi.com/v1/images/search";
    const quoteUrl = "https://api.seriesquotes.10cyrilc.me/quote/";
  
    // Function to create an image card
    function createImageCard(imageUrl) {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
    
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");
    
      const image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = imageUrl;
    
      cardContainer.appendChild(image);
      card.appendChild(cardContainer);
      return card;
    }
  
    // Function to create a quote card
    function createQuoteCard(quote) {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");
    
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");
    
      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
    
      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = "Quote";
    
      const cardContent = document.createElement("p");
      cardContent.classList.add("card-text");
      cardContent.textContent = quote;
    
      const refreshButton = document.createElement("button");
      refreshButton.setAttribute("type", "button");
      refreshButton.classList.add("btn", "btn-primary");
      refreshButton.textContent = "Refresh";
    
      // Add click event listener to the "Refresh" button
      refreshButton.addEventListener("click", () => {
        fetchNewQuote(cardContent);
      });
    
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardContent);
      cardBody.appendChild(refreshButton);
      cardContainer.appendChild(cardBody);
      card.appendChild(cardContainer);
      return card;
    }
    
    // Function to fetch new quotes
    function fetchNewQuote(cardContentElement) {
      fetch(quoteUrl)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((quotes) => {
          if (quotes.length > 0) {
            const newQuote = quotes[0];
            const quote = newQuote.quote;
            cardContentElement.textContent = quote;
          }
        });
    }
    
    fetch(imageUrl1)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.url; // Assuming the API provides an image URL
        const imageCard = createImageCard(imageUrl);
        const cardContainer = document.getElementById("card-container");
        cardContainer.appendChild(imageCard);
      });
  
    fetch(imageUrl2)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data[0].url; // Assuming the API provides an array of images
        const imageCard = createImageCard(imageUrl);
        const cardContainer = document.getElementById("card-container");
        cardContainer.appendChild(imageCard);
      });
  
    fetch(quoteUrl)
      .then((response) => response.json())
      .then((quotes) => {
        const quote = quotes[0].quote; // Assuming the API provides an array of quotes
        const quoteCard = createQuoteCard(quote);
        const cardContainer = document.getElementById("card-container");
        cardContainer.appendChild(quoteCard);
      });
  });
  