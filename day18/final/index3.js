const imageUrl1 = "https://api.catboys.com/img";
const imageUrl2 = "https://api.thecatapi.com/v1/images/search";
const quoteUrl = "https://api.seriesquotes.10cyrilc.me/quote/";

//  I created the three variable named as imageure1, imageurl2, guoteurl

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

    fetch(imageUrl1)
        .then((response) => response.json())
        .then((data) => {
            const imageUrl = data.url; // Assuming the API provides an image URL
            document.querySelector(".image1").src = imageUrl;
        });

    fetch(imageUrl2)
        .then((response) => response.json())
        .then((data) => {
            const imageUrl = data[0].url; // Assuming the API provides an array of images
            document.querySelector(".image2").src = imageUrl;
            document.querySelector("#title").innerText = "Hello!!! Call Me Meow";
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