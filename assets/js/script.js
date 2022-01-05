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
var questionEL = document.getElementById("question-title-1");
var answerList = document.querySelector(".questions")
var questionCounter = 0;

// array of questions and answers
var questionsArr = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Tag Markup Language", "Hyper Text Markup Language", "Hyperlinks Text Mark Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What symbol indicates a tag?",
        options: ["Angle brackets", "Curved brackets", "Commas"],
        answer: "Angle brackets"
    },
    {
        question: "Which of these is a genuine tag keyword?",
        options: ["Header", "Bold", "Body"],
        answer: "Header"
    },
    {
        question: "What is the correct tag for a line break?",
        options: ["brk /", "line /", "br/"],
        answer: "br/"
    },
    {
        question: "What does CSS stand for?",
        options: ["Computing Style Sheet", "Creative Style System", "Cascading Style Sheet"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        options: ["Before any HTML code", "After all HTML code", "Inside the head section"],
        answer: "Inside the head section"
    },
];
console.log(questionsArr);

// for loop to present question one at a time
//for (let i = 0; i < questionsArr.length; i++) {
 //   question += questionsArr[i] + "question";
 // };

var highScoresWrapper = document.getElementById("high-scores-wrapper");

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
  
startBtn.addEventListener("click", startQuiz);
    
function startQuiz() {
    console.log(startBtn);
    setInterval(function(){
        timerEl.innerHTML = "Timer: " + totalSeconds;
        totalSeconds --;
    }, 1000);

    populateQuestions();

    questionWrapper.style.display = "block";
    startDiv.style.display = "none";
    submitIntials.style.display = "none";
};

function populateQuestions() {
    questionEL.innerHTML = questionsArr[0].question;

    answerList.innerHTML=`
    <li><button class = "answer">${questionsArr[0].options[0]}</button></li>
    <br/>
    <li><button class = "answer">${questionsArr[0].options[1]}</button></li>
    <br/>
    <li><button class = "answer">${questionsArr[0].options[2]}</button></li>
    <br/>
    `
    document.querySelectorAll('.answer').forEach(el => el.addEventListener("click", checkAnswer));
};

function checkAnswer () {
    var userAnswer = this.innerHTML;
    var answer = questionsArr[questionCounter].answer;
    console.log(userAnswer, answer);
    if (userAnswer == answer) {
        console.log('correct');
    } else {
        console.log('wrong');
    };

};


