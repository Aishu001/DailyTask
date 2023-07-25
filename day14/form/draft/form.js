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