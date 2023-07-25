// let countDown = document.createElement("input['type=text']")
// countDown.setAttribute('id', 'countdown')
// let getEle = document.getElementById("empty")

// let display = getEle.addEventListener("click",counts())

// console.log(display);
// let countDown = document.createElement("input");
// countDown.setAttribute('type', 'text');
// countDown.setAttribute('id', 'countdown');

// let counts = () => {

//     setTimeout(() => {
//         countDown.document.getElementById("countdown").innerText = "10"
//     },10000)
//     setTimeout(() => {
//         countDown.document.getElementById("countdown").innerText = "9"
//     },9000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "8"
//     },8000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "7"
//     },7000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "6"
//     },6000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "5"
//     },5000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "4"
//     },4000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "3"
//     },3000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "2"
//     },2000)
//     setTimeout(() => {
//         document.getElementById("countdown").innerText = "1"
//     },1000)
//     setTimeout(() => {
//         alert("Happy New Year")
//         // document.getElementById("countdown").innerText = 
//     },0)
// }

// Select the input element
let countDown = document.getElementById("countdown");

let counts = () => {
  // Start counting from 10 to 0
  let count = 10;

  // Function to update the input's value with the current count
  let updateCountdown = () => {
    countDown.value = count;
    count--;
    if (count >= 0) {
      setTimeout(updateCountdown, 1000);
    } else {
      // After the countdown reaches 0, display "Happy New Year"
      alert("Happy New Year!");
    }
  };

  // Start the countdown
  setTimeout(updateCountdown, 1000);
};

// Call the counts function to begin the countdown
counts();
