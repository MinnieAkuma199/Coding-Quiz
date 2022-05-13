//Variables
var timerEl = document.querySelector(".timerDiv");
var timer;
var timerCount = 10;

var questionTracker = 0;
// ARRAY for each question

const quizQuestions = [
  {
    title: "What is the best pet?",
    choices: ["cat", "dog", "fish"],
    answer: "dog",
  },
  {
    title: "What is the best fruit?",
    choices: ["pear", "apple", "peach"],
    answer: "pear",
  },
  {
    title: "What is the best smell?",
    choices: ["fresh grass", "gasoline", "new leather"],
    answer: "gasoline",
  },
];

function checkAnswer(userChoice) {
  if (userChoice === quizQuestions[questionTracker].answer) {
    alert("you got the answer right!");
  } else {
    alert("You messed up!");
    timerCount -= 5;
  }
}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // alert("Your time is 🆙 ");put endGame function in here 
      return;
    }
  }, 1000); //1000 ms = 1second, this is calling this one per second
}

function startGame() {
  var displayQ1 = document.querySelector(".displayQuestions");
  //innerHTML needed or else buttons and p tags would not be removed instead of using .innertext
  displayQ1.innerHTML = "";
  console.log(quizQuestions[0]);
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");
  var currentQuestion = document.createElement("p");
  button1.textContent = quizQuestions[questionTracker].choices[0];
  button2.textContent = quizQuestions[questionTracker].choices[1];
  button3.textContent = quizQuestions[questionTracker].choices[2];
  currentQuestion.textContent = quizQuestions[questionTracker].title;
  displayQ1.append(currentQuestion, button1, button2, button3);

  button1.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
    checkAnswer(event.target.textContent);
    questionTracker++;
    console.log(questionTracker);
    startGame();
  });
  button2.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
    checkAnswer(event.target.textContent);
    questionTracker++;
    console.log(questionTracker);
    startGame();
  });
  button3.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target);
    checkAnswer(event.target.textContent);
    questionTracker++;
    console.log(questionTracker);
    startGame();
  });
}

// so below this should give this section the class hide again and we want it to remove it from the next section 
// endQuiz() {
//   if questionTracker =>5 then end the quiz 
// }

//need a form for the initials and when they hit submit then we grab and save their initials and score as an array 
//creating an empty array for highscore
// highscoreArray = []
//   < form > <input id="initials-input"/>
// <button>Submit</button>
// </form>
//then we want an even listener for the submit button on form
//when clicked grab the initials user put in
  //create an object
  //var hischsc..look on screenshot!


//EVENT LISTENERS
document
  .querySelector(".startButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    startGame();
    //1.making questions visible -- we want to reassign the class it already has to a new class that should be unhidden
    document.querySelector("#questionSection").setAttribute("class", "");
    startTimer(); //load timer function when button is clicked
    document.querySelector("#startSection").setAttribute("class", "hide");
  });
