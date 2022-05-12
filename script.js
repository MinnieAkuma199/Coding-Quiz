//Variables
var timerEl = document.querySelector(".timerDiv");
var timer;
var timerCount = 100;
// ARRAY for Question and for choices
const questions = ['What is the best pet?', 'What is the best fruit?', 'What is the best smell?'];

const choices = ['a)cat', 'b)dog', 'c)fish', 'a)pear', 'b)apple', 'c)peach', 'a)fresh grass', 'b)gasoline', 'c)new leather'];

// const correctAnswers = [];
//would i want to make an array with correct answers to check against?

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

//Q1 is displayed, i have buttons, when the wrong choice is selected then i want an alert, when the right one is selected i want an alert-- how do i capture the selected button and how do i check if it was the correct answer?

function startGame() {
  var displayQ1 = document.querySelector(".displayQuestions");
  console.log(questions[0]);
  console.log(choices[1]);
  var button1 = document.createElement("button")
  var button2 = document.createElement("button")
  var button3 = document.createElement("button")
  displayQ1.textContent = (questions[0]); 
  displayQ1.appendChild(button1).textContent = (choices[0]); 
  displayQ1.appendChild(button2).textContent = (choices[1]);
  displayQ1.appendChild(button3).textContent = (choices[2]);
  //i am trying to call to all button elements i created above*****
  // document.getElementsByTagName("button")
  //   .addEventListener("click", function (event) {
  //   alert("Button has been clicked!");
  //   event.preventDefault(); maybe click moves them on to the next function and alert will tell you if you got it wrong, and then figure out how to subtract time
  // })

}
// --have them call to each other--
// function startGame2() { this is for q2 
// }

// function startGame3() { this is for q3

// }

//EVENT LISTENERS
document.querySelector(".startButton").addEventListener("click", function (event) {
  event.preventDefault();
  startGame()
  //1.making questions visible -- we want to reassign the class it already has to a new class that should be unhidden 
  document.querySelector("#questionSection").setAttribute("class", "");
  startTimer(); //load timer function when button is clicked
  document.querySelector("#startSection").setAttribute("class", "hide");
});

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