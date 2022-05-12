//Variables
var timerEl = document.querySelector(".timerDiv");
var timer;
var timerCount = 100;
// ARRAY for Question and for choices
const questions = ['What is the best pet?', 'What is the best fruit?', 'What is the best smell?'];

const choices = ['a)cat', 'b)dog', 'c)fish', 'a)pear', 'b)apple', 'c)peach', 'a)fresh grass', 'b)gasoline', 'c)new leather'];

// let Q1 = {};
// Q1['question'] = [""];
// Q1['choices'] = ['a) cat', 'b) dog', 'c) turtle',];
// Q1['correct'] = ['a'];
// console.log(Q1)

// let Q2 = {};
// Q2['question'] = ['This is a question'];
// Q2['choices'] = ['a', 'b', 'c',];
// Q2['correct'] = ['b'];
// console.log(Q2)

// let Q3 = {};
// Q3['question'] = ['This is a question'];
// Q3['choices'] = ['a', 'b', 'c',];
// Q3['correct'] = ['c'];
// console.log(Q3)

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      alert("Your time is 🆙 ")
      return;
    }
  }, 1000); //1000 ms = 1second, this is calling this one per second 
}

//So i have 3 questions, first i want Q1 to present in #questionSection, when user chooses an answer, i want an alert to pop up if they were correct or not, then i want it to move onto q2...

function startGame() {
  var displayQ1 = document.querySelector(".displayQuestions");
  var liEl1 = document.createElement("li")
  var liEl2 = document.createElement("li")
  var liEl3 = document.createElement("li")
  var textChoice = displayQ1.textContent = (choices[]);
  displayQ1.textContent = (questions[0]);
  liEl1.textContent = (textChoice);
  displayQ1.appendChild(liEl1); 
  displayQ1.appendChild(liEl2);
  displayQ1.appendChild(liEl3);
  console.log(questions[0]);
  console.log(choices[1]);
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