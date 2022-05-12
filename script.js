//Variables
var timerEl = document.querySelector(".timerDiv");
var timer;
var timerCount = 100;
// ARRAY for each question
let Q1 = {};
Q1['question'] = ["Can you answer this?"];
Q1['choices'] = ['a', 'b', 'c',];
Q1['correct'] = ['a'];
console.log(Q1)

let Q2 = {};
Q2['question'] = ['This is a question'];
Q2['choices'] = ['a', 'b', 'c',];
Q2['correct'] = ['b'];
console.log(Q2)

let Q3 = {};
Q3['question'] = ['This is a question'];
Q3['choices'] = ['a', 'b', 'c',];
Q3['correct'] = ['c'];
console.log(Q3)

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      alert("Your time is up!")
      return;
    }
  }, 1000); //1000 ms = 1second, this is calling this one per second 
}

//So i have 3 questions, first i want Q1 to present in #questionSection, when user chooses an answer, i want an alert to pop up if they were correct or not, then i want it to move onto q2...

function startGame() {
  let displayQ1 = document.querySelector(".displayQuestions");
  displayQ1.textContent = (Q1['question']);
  displayQ1.textContent = (Q1['choices[0]']);
  console.log(Q1['question']);
  // return displayQ1;
}

//When user hits start button want the timer to begin and the next section to be unhidden--
//EVENT LISTENERS
document.querySelector(".startButton").addEventListener("click", function (event) {
  event.preventDefault();
  startGame()
  //1.making questions visible -- we want to reassign the class it already has to a new class that should be unhidden 
  document.querySelector("#questionSection").setAttribute("class", "");
  startTimer(); //load timer function when button is clicked
  document.querySelector("#startSection").setAttribute("class", "hide");
});