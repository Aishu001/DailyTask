function cardCreation(qutUrl){
 const card = document.createElement("div")
 card.setAttribute("id","card")
    card.classList.add("card", "mb-4"); // Use "mb-4" for margin at the bottom
  
    const cardBody = document.createElement("div");
    cardBody.setAttribute("id","cardbody")
    cardBody.classList.add("card-body");

    const name1 = document.createElement("h5");
    name1.setAttribute("id","name1")
    name1.textContent = author;

    const name2 = document.createElement("h5");
    name2.setAttribute("id","name2")
    name2.textContent = series;



    const capital = document.createElement("p");
    capital.setAttribute("id","cptl")
    capital.textContent = Quotes;

    const weather = document.createElement("input");
    weather.setAttribute("id","btnn")
    weather.setAttribute("type","Submit")
    weather.setAttribute("value","Refresh")
    weather.classList.add("btn", "btn-primary");

    cardBody.appendChild(name1);
    cardBody.appendChild(name2);
  
    cardBody.appendChild(capital);
 
    cardBody.appendChild(weather);
  
    card.appendChild(cardBody);
    return card;
  }
  
}



let quoteUrl = "https://api.seriesquotes.10cyrilc.me/quote/"



fetch(quoteUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    }) .then((quotes) =>{
        const Quotesgt = quotes.forEach((loop) =>
         id = loop.id,
         author = loop.author,
        series = loop.series,
         Quotes = loop.quote
        
        )
       
    })
    

    /* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */


    let anmiUrl = " https://api.catboys.com/img"

    let catUr = "https://api.thecatapi.com/v1/images/search"
  // https://api.catboys.com/img