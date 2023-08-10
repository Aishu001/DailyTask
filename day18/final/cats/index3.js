const imageUrl1 = "https://api.catboys.com/img";
const imageUrl2 = "https://api.thecatapi.com/v1/images/search";
const quoteUrl = "https://api.seriesquotes.10cyrilc.me/quote/";

//  I created the three variable named as imageure1, imageurl2, guoteurl

// function created
function fetchApis() {
    
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