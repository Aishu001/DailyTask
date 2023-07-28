

let countDown = document.getElementById("countdown");
let timerBox = document.getElementById("timer-txt-box");
let image = document.getElementById("image");

countDown.addEventListener("click", countdown);

function countdown() {
  let count = 10;

  // Function to update the timer text
  function updateTimer() {
    if (count === 0) {
      timerBox.innerHTML = "Cheers to another year!";
      image.style.display = "block"; // Display the image when countdown reaches 0
    } else {
      timerBox.innerHTML = count;
      count--;
      setTimeout(updateTimer, 1000);
    }
  }

  updateTimer();
}

