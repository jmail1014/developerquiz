var questionWrapper = document.getElementById("question-wrapper");
var totalSeconds = 75;
var questionsArr = [
    {
        question: "question 1",
        options: ["answer 1", "answer 2"],
        answer: "answer 1"
    },
    {
        question: "question 2",
        options: ["answer 1", "answer 2"],
        answer: "answer 2"
    }
];
console.log(questionsArr);
var startDiv = document.getElementById("start");
// on startQuiz "button click" start timer and reveal first question
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("startQuiz");
  startBtn.addEventListener("click", function(){
    console.log(startBtn);
    setInterval(function(){
        timerEl.innerHTML = "Timer: " + totalSeconds;
        totalSeconds --;
    }, 1000);
    questionWrapper.style.display = "block";
    startDiv.style.display = "none";
});
// hide title, description and start button once the button is clicked



// make an array of questions and answers

// on button click of first question reveal second question

// if the answer is right then proceed to the next question
// if answer is wrong then deduct 5 seconds

//if timer is 0 stop the timer or questions are all answered then end the game 