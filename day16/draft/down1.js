
// let countDown = document.getElementById("countdown");
// let timerBox = document.getElementById("timer-txt-box")
// timerBox.innerHTML = countDown

// countDown.addEventListener("click",coutndown ())

// function coutndown (){
//   console.log("countdown")
//   ten()
  
// }
// function ten(){
 
//   setTimeout(() =>{
//       console.log("10")
//   },0)
//    nine()
// }
// function nine(){
 
//   setTimeout(() =>{
//       console.log("9")
//   },1000)
//   eight()
// }
// function eight(){
 
//   setTimeout(() =>{
//       console.log("8")
//   },2000)
//   seven()
// }
// function seven(){
 
//   setTimeout(() =>{
//       console.log("7")
//   },3000)
//   six()
// }
// function six(){
 
//   setTimeout(() =>{
//       console.log("6")
//   },4000)
//   five()
// }
// function five(){
 
//   setTimeout(() =>{
//       console.log("5")
//   },5000)
//   four()
// }
// function four(){
 
//   setTimeout(() =>{
//       console.log("4")
//   },6000)
//   three()
// }
// function three(){
 
//   setTimeout(() =>{
//       console.log("3")
//   },7000)
//   two()
// }
// function two(){
 
//   setTimeout(() =>{
//       console.log("2")
//   },8000)
//    one()
// }
// function one(){
 
//   setTimeout(() =>{
//       console.log("1")
//   },9000)
//   wish()
// }
// function wish(){
 
//   setTimeout(() =>{
//       console.log("Happy New Year!!!")
//   },10000)
// }
// // coutndown ()


// //////////////////////////////////////


// // let counts = () => {
// //   // Start counting from 10 to 0
// //   let count = 10;

// //   // Function to update the input's value with the current count
// //   let updateCountdown = () => {
// //     countDown.value = count;
// //     count--;
// //     if (count >= 0) {
// //       setTimeout(updateCountdown, 1000);
// //     } else {
// //       // After the countdown reaches 0, display "Happy New Year"
// //       alert("Happy New Year!");
// //     }
// //   };

// //   // Start the countdown
// //   setTimeout(updateCountdown, 1000);
// // };

// // // Call the counts function to begin the countdown
// // counts();
  // Function to update the timer text
  let countDown = document.getElementById("countdown");
  let timerBox = document.getElementById("timer-txt-box");
  
  countDown.addEventListener("click", countdown);
  
  function countdown() {
    let count = 10;
  
    // Function to update the timer text
    function updateTimer() {
      if (count === 0) {
        timerBox.innerHTML = "Happy New Year!!!";
      } else {
        timerBox.innerHTML = count;
        count--;
        setTimeout(updateTimer, 1000);
      }
    }
  
    updateTimer();
  }
  