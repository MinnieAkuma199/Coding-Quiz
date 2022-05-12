//When user hits start button want the timer to begin and the next section to be unhidden-- an event listener needed "click"
//Event listener to start the quiz
document.querySelector(".startButton").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#questionSection").setAttribute("class", "")
    startTimer() //load timer function when button is clicked
    document.querySelector("#startSection").setAttribute("class", "hide")
})


//1.making questions visible -- we want to reassign the class it already has to a new class that should be unhidden 


//2.Timer: 
var timerEl = document.querySelector(".timerDiv")
var timer;
var timerCount= 10;

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endQuiz()
    }
  }, 1000); //1000 ms = 1second, this is calling this one per second 
}

//want this to run if user runs out of time
function endQuiz(){}



// //want to create an array of questions and dynamically present them on the page rather then putting it within the html. so have one questions tag and 4 answer tag 
// //going to make one giant array for questions, possible answers and correct 
// the keys are "question", "choice1",etc
// Array [
// {question: “q1”,
// choice1: “c1”,
// choice2: “c2”,
// correct: “actual correct answer for q1”,
// },
//     {question: “q2”,
// choice1: “c1”, "c2"
// choice2: “”
// correct: “”
// }
// ]