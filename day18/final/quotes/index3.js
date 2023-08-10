
const quoteUrl = "https://api.seriesquotes.10cyrilc.me/quote/";

//  I created the three variable named as guoteurl

// function created
function fetchApis() {
    fetch(quoteUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((quotes) => {
            if (quotes.length > 0) {
                // apply the to generate the new quotes and author , series details
                const newQuote = quotes[0];
                const quote = newQuote.quote;
                const author = newQuote.author;
                const series = newQuote.series;

                // here, using dom assgin those varibles to the tages with class selector seperatly
                document.querySelector(".quotes").textContent = quote;
                document.querySelector(".author").textContent = author;
                document.querySelector(".series").textContent = series;
            }
        });

        // write a reload() function whenever i click the button the pages has be reloaded...
    document.querySelector(".button").addEventListener('click', () => {
        setTimeout(() => {
            location.reload();
        });
    });
}

// invoke the function 
fetchApis();







////////////////////////////////// DRAFT////////////////////////////////////////////////////////////

    
 //   document.getElementById("quote") = quote;
//   document.getElementById("author") = author;
//   document.getElementById("series") = series;


// setTimeout(() => { document.getElementById("btn").reload(); }, 3000); 

//   fetch(quoteUrl)
//     .then((response) => response.json())
//     .then((quotes) => {
//       const quote = quotes[0].quote; // Assuming the API provides an array of quotes
//       const quoteCard = createQuoteCard(quote);
//       const cardContainer = document.getElementById("quote");
//       cardContainer.appendChild(quoteCard);
//     });