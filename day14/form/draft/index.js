// document.addEventListener("DOMContentLoaded", function () {
// const form = document.getElementById("form");
// const tableCon =  document.getElementById("dataTable");
// debugger;

// form.addEventListener("submit", function (event)  {
//      event.preventDefault();

     

  
//     const firstName = document.querySelector(".first").value;
//   const LastName = document.querySelector(".last").value;
//   const Email = document.getElementById("inputEmail4").value;
//   const address = document.getElementById("inputAddress").value;
//   const country = document.getElementById("inputCity").value;
//   const state = document.querySelector(".state").value;
//   const zip = document.getElementById("inputZip").value;

//     const gender = document.querySelector('input[name="inlineRadioOptions gender"]:checked');


//     const foodBox = document.querySelectorAll('input[name="food"]:checked');

//     const foodList = Array.from(foodBox).map((checkbox) => checkbox.value
//     );



//     if(foodList.length < 2) {
//         alert ("Please select atleast two options for Food")
//         return;
//     } 

//     const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];

//     const addNewRow = tableBody.insertRow();
//     const firstNameCol = addNewRow.insertCell();
//     const LastNameCol = addNewRow.insertCell();
//     const emailCol = addNewRow.insertCell();
//     const addressCol = addNewRow.insertCell();
//     const countryCol = addNewRow.insertCell();
//     const stateCol = addNewRow.insertCell();
//     const zipCol = addNewRow.insertCell();
//     const genderCol = addNewRow.insertCell();
//     const foodListCol = addNewRow.insertCell();


//     firstNameCol.text = firstName;
//     LastNameCol.textContent = LastName;
//     genderCol.textContent = gender;
//     emailCol.textContent = Email;
//     addressCol.textContent = address;
//     countryCol.textContent = country;
//     stateCol.textContent = state;
//     zipCol.textContent = zip;
    
//     foodListCol.textContent = foodList.join(",")

//     form.reset();

// })
// });




  // const firstName = document.getElementsByClassName("first").value;
    // const LastName = document.getElementsByClassName("last").value;
    // const Email= document.getElementsByClassName("email").value;
    // const address = document.getElementsByClassName("address").value;
    // const country = document.getElementsByClassName("country").value;
    // const state = document.getElementsByClassName("state").value;
    // const zip = document.getElementsByClassName("zip").value;


    // const addNewRow = table.insertRow();
    // const firstNameCol = addNewRow.insertCell();
    // const LastNameCol = addNewRow.insertCell();
    // const emailCol = addNewRow.insertCell();
    // const addressCol = addNewRow.insertCell();
    // const countryCol = addNewRow.insertCell();
    // const stateCol = addNewRow.insertCell();
    // const zipCol = addNewRow.insertCell();
    // const genderCol = addNewRow.insertCell();
    // const foodListCol = addNewRow.insertCell();



    // document.addEventListener("DOMContentLoaded", function () {
    //   const form = document.getElementById("form");
    
    //   form.addEventListener("submit", function (event) {
    //     event.preventDefault();

    //     const firstName = document.getElementById("firstName").value;
    //     const lastName = document.getElementById("lastName").value;
    
    //     // const firstName = document.querySelector(".first").value;
    //     // const LastName = document.querySelector(".last").value;
    //     const Email = document.getElementById("inputEmail4").value;
    //     const address = document.getElementById("inputAddress").value;
    //     const country = document.getElementById("inputCity").value;
    //     const state = document.getElementById("inputState").value;
    //     const zip = document.getElementById("inputZip").value;
    
    //     const gender = document.querySelector('input[name="inlineRadioOptions gender"]:checked');
    
    //     const foodBox = document.querySelectorAll('input[name="food"]:checked');
    //     const foodList = Array.from(foodBox).map((checkbox) => checkbox.value);
    
    //     if (foodList.length < 2) {
    //       alert("Please select at least two options for Food");
    //       return;
    //     }


    //     const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];


    //     const addNewRow = tableBody.insertRow();
    // const firstNameCol = addNewRow.insertCell(0);
    // const lastNameCol = addNewRow.insertCell(1);
    // const genderCol = addNewRow.insertCell(2);
    // const emailCol = addNewRow.insertCell(3);
    // const addressCol = addNewRow.insertCell(4);
    // const countryCol = addNewRow.insertCell(5);
    // const stateCol = addNewRow.insertCell(6);
    // const zipCol = addNewRow.insertCell(7);
    // const foodListCol = addNewRow.insertCell(8);
    
    //     firstNameCol.textContent = firstName;
    //     lastNameCol.textContent = lastName;
    //     genderCol.textContent = gender.value;
    //     emailCol.textContent = Email;
    //     addressCol.textContent = address;
    //     countryCol.textContent = country;
    //     stateCol.textContent = state;
    //     zipCol.textContent = zip;
    //     foodListCol.textContent = foodList.join(",");
    //     console.log(foodList);
    
    //     form.reset();
    //   });
    // });
    


        
        // const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
        // const addNewRow = tableBody.insertRow();
        // const firstNameCol = addNewRow.insertCell();
        // const LastNameCol = addNewRow.insertCell();
        // const emailCol = addNewRow.insertCell();
        // const addressCol = addNewRow.insertCell();
        // const countryCol = addNewRow.insertCell();
        // const stateCol = addNewRow.insertCell();
        // const zipCol = addNewRow.insertCell();
        // const genderCol = addNewRow.insertCell();
        // const foodListCol = addNewRow.insertCell();



        document.addEventListener("DOMContentLoaded", function () {
          const form = document.getElementById("form");
    
          form.addEventListener("submit", function (event) {
            event.preventDefault();
    
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const Email = document.getElementById("inputEmail4").value;
            const address = document.getElementById("inputAddress").value;
            const country = document.getElementById("inputCity").value;
            const state = document.querySelector(".state").value;
            const zip = document.getElementById("inputZip").value;
    
            const gender = document.querySelector('input[name="inlineRadioOptions gender"]:checked');
    
            const foodBox = document.querySelectorAll('input[name="food"]:checked');
            const foodList = Array.from(foodBox).map((checkbox) => checkbox.value);
    
            if (foodList.length < 2) {
              alert("Please select at least two options for Food");
              return;
            }
    
            const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    
            const addNewRow = tableBody.insertRow();
            const firstNameCol = addNewRow.insertCell(0);
            const lastNameCol = addNewRow.insertCell(1);
            const genderCol = addNewRow.insertCell(2);
            const emailCol = addNewRow.insertCell(3);
            const addressCol = addNewRow.insertCell(4);
            const countryCol = addNewRow.insertCell(5);
            const stateCol = addNewRow.insertCell(6);
            const zipCol = addNewRow.insertCell(7);
            const foodListCol = addNewRow.insertCell(8);
    
            firstNameCol.textContent = firstName;
            lastNameCol.textContent = lastName;
            genderCol.textContent = gender.value;
            emailCol.textContent = Email;
            addressCol.textContent = address;
            countryCol.textContent = country;
            stateCol.textContent = state;
            zipCol.textContent = zip;
            foodListCol.textContent = foodList.join(",");
    
            form.reset();
          });
        });
