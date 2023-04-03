// Declaring DOM elements

var questionsEL = document.querySelector("#questions")
var timerEL = document.querySelector("#timer")
var choicesEL = document.querySelector("#choices")
var submitBTN = document.querySelector("#submit")
var initialsEL = document.querySelector("#initials")
var feedbackEL = document.querySelector("#feedback")
var highscoreEL = document.querySelector("#highscore")

// Timer should be at 75 seconds, 5 questions in quiz
var currentQuestionIndex = 0;
var time = questions.length * 5;
var timerId; 

function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    getQuestion();
  }
  