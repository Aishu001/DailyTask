const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl).then(response =>{
    if(response.status === 200){

        //return the data in json format
        return response.json();
    }
})
.then((val) =>{
    console.log( val);

    for( i = 0 ; i < val.length ; i ++) {
        // finding the flag
        if(val[i].name.common == "Afghanistan"){
            // const country =  ;
            document.getElementById("country").innerText =val[i].name.common;
            const flagUrl = val[i].flags.png;
            document.getElementById("img").src = flagUrl;
            // const capitall = ;
            document.getElementById("capital").innerText = `capital:${val[i].capital}`;
            // const reg = ;
            document.getElementById("region").innerText =`region:${val[i].region}`; 
            // const code = val[i].cioc;
            document.getElementById("Code").innerText =`CountryCode:${val[i].cioc}`; 
            const lat = val[i].latlng[0];
        const long = val[i].latlng[1];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
        document.getElementById("afn").href = weatherUrl;
        document.getElementById("afn").target  = "_blank";

        document.getElementById("afn").addEventListener("click", function () {
          window.open(weatherUrl);
        });

        break;     
        } 
}

for( i = 0 ; i < val.length ; i ++) {
    // finding the flag
    if(val[i].name.common ==  "Åland Islands"){
        // const country =  ;
        document.getElementById("countryisl").innerText =val[i].name.common;
        const flagUrl = val[i].flags.png;
        document.getElementById("imgisl").src = flagUrl;
        // const capitall = ;
        document.getElementById("capitalisl").innerText = `capital:${val[i].capital}`;
        // const reg = ;
        document.getElementById("regionisl").innerText =`region:${val[i].region}`; 
        // const code = val[i].cioc;
        document.getElementById("Codeisl").innerText =`CountryCode:${val[i].cca3}`; 
        const lat = val[i].latlng[0];
        const long = val[i].latlng[1];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
        document.getElementById("ala").href = weatherUrl;
        document.getElementById("ala").target  = "_blank";

        document.getElementById("ala").addEventListener("click", function () {
          window.open(weatherUrl);
        });

        break;       
    } 
}

for( i = 0 ; i < val.length ; i ++) {
    // finding the flag
    if(val[i].name.common == "Albania"){
        // const country =  ;
        document.getElementById("countryalb").innerText =val[i].name.common;
        const flagUrl = val[i].flags.png;
        document.getElementById("imgalb").src = flagUrl;
        // const capitall = ;
        document.getElementById("capitalalb").innerText = `capital:${val[i].capital}`;
        // const reg = ;
        document.getElementById("regionalb").innerText =`region:${val[i].region}`; 
        // const code = val[i].cioc;
        document.getElementById("Codealb").innerText =`CountryCode:${val[i].cca3}`; 
        const lat = val[i].latlng[0];
        const long = val[i].latlng[1];
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=37ba9824a231c697643e4a57ef092cf6`;
        document.getElementById("alb").href = weatherUrl;
        document.getElementById("alb").target  = "_blank";

        document.getElementById("alb").addEventListener("click", function () {
          window.open(weatherUrl);
        });

        break;         
    } 
}


})


.catch((err) =>{
    console.log("Error fetching countries", err);
})


// ///////////////////////// HTML\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
// </head>
// <body>
//     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
   
// <script src = "index.js"></script>

// Afgansitan -->
// <!-- <div class="card-deck container input-group">
//   <div class="card">
//     <h1 class="card-title" id ="country"></h1>
//     <img class="card-img-top " id = "img" src="..." alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title" id = "capital">Card title</h5>

//       <h5 class="card-title" id = "region">Card title</h5>

//       <h5 class="card-title" id = "Code" > Card title</h5>

//       <a href="#" class="btn btn-primary" id = "afn">Click For Whether</a>
//     </div>
//   </div> -->

//   <!-- Aland Island -->
  
//   <!-- <div class="card">
//     <h1 class="card-title" id ="countryisl"></h1>
//     <img class="card-img-top container" id = "imgisl" src="..." alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title" id = "capitalisl">Card title</h5>

//       <h5 class="card-title" id = "regionisl">Card title</h5>

//       <h5 class="card-title" id = "Codeisl" > Card title</h5>

//       <a href="#" class="btn btn-primary" id = "ala">Click For Whether</a>
//     </div>
//   </div> -->

//   <!-- Albania -->
//   <!-- <div class="card">
//     <h1 class="card-title" id ="countryalb"></h1>
//     <img class="card-img-top " id = "imgalb" src="..." alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title" id = "capitalalb">Card title</h5>

//       <h5 class="card-title" id = "regionalb">Card title</h5>

//       <h5 class="card-title" id = "Codealb" > Card title</h5>

//       <a href="#" class="btn btn-primary" id = "alb">Click For Whether</a>
//     </div>
//   </div>
// </div>

// </body>
// </html>  --></meta>

















