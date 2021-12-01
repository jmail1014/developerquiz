// if the answer is right on answer button click add 14.28 points then proceed to the next question
// also if answer is right display 'you got it right!' under answers
// if answer is wrong then deduct 5 seconds
// also if wrong display 'wrong answer' under the answers
// if timer is 0 stop the timer or questions are all answered then end the game 
// hide #finalScore section until timer runs out or all questions are answered
// once timer runs out or all questions are answered, display tallyed score with initials form
// when initials are submitted in the score form save score with inials and take user to high scores page with list of saved scores 
// get the clear scores button to clear score history

var questionWrapper = document.getElementById("question-wrapper");
var totalSeconds = 75;
var question = ''
// array of questions and answers
var questionsArr = [
    {
        question: "question 1",
        options: ["answer 1", "answer 2", "answer 3"],
        answer: "answer 2"
    },
    {
        question: "question 2",
        options: ["answer 1", "answer 2", "answer 3"],
        answer: "answer 1"
    },
    {
        question: "question 3",
        options: ["answer 1", "answer 2", "answer 3"],
        answer: "answer 1"
    },
    {
        question: "question 4",
        options: ["answer 1", "answer 2"],
        answer: "answer 1"
    },
    {
        question: "question 5",
        options: ["answer 1", "answer 2", "answer 3"],
        answer: "answer 3"
    },
    {
        question: "question 6",
        options: ["answer 1", "answer 2", "answer 3"],
        answer: "answer 3"
    },
    {
        question: "question 7",
        options: ["answer 1", "answer 2", "answer 3"],
        answer: "answer 3"
    },
];
console.log(questionsArr);

// for loop 
for (let i = 0; i < questionsArr.length; i++) {
    question += questionsArr[i] + "question";
  };

// store user initals and high score 
localStorage.setItem('','');

// back button on high scores page
function goBack() {
    window.history.back();
  };

var startDiv = document.getElementById("start");
var submitIntials = document.getElementById("all-done");
var timerEl = document.getElementById("timer");
// on startQuiz "button click" start timer & hide title, description and start button
var startBtn = document.getElementById("startQuiz");
  startBtn.addEventListener("click", function(){
    console.log(startBtn);
    setInterval(function(){
        timerEl.innerHTML = "Timer: " + totalSeconds;
        totalSeconds --;
    }, 1000);
    questionWrapper.style.display = "block";
    startDiv.style.display = "none";
    submitIntials.style.display = "none";
});
