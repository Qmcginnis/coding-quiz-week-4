// Declaring DOM elements

var questionsEL = document.querySelector("#questions")
var timerEL = document.querySelector("#timer")
var choicesEL = document.querySelector("#choices")
var submitBTN = document.querySelector("#submit")
var initialsEL = document.querySelector("#initials")
var feedbackEL = document.querySelector("#feedback")
var highscoreEL = document.querySelector("#highscore")


var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;