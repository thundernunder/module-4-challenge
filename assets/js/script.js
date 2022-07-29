var startButton = document.querySelector("#start");
var startContainer = document.querySelector('#start-container');
var firstQuestion = document.querySelector("#question-one");
var firstParagraph = document.querySelector("#q-1-p");
var q1ChoiceA = document.querySelector('#q1-a-label');
var q1ChoiceB = document.querySelector('#q1-b-label');
var q1ChoiceC = document.querySelector('#q1-c-label');
var q1CheckA = document.querySelector('#q-1-a');
var q1CheckB = document.querySelector('#q-1-b');
var q1CheckC = document.querySelector('#q-1-c');
// var q1Log = document.querySelector('q-1-log');
var q1Submit = document.querySelector('#q-1-submit');

var rightAnswer = 0;
var wrongAnswer = 0;
var score = document.querySelector('#view-score');
var timer;



var q1 = {
    question: "What are the three foundational languages of web development?",
    choices: {
        a: "A) Python, C++, Javascript", 
        b: "B) HTML, CSS, Javascript", 
        c: "C) HTML, CSS, Python"
    },  
    answer: "B. html, css, javascript"
}

var q2 = {
    question: "Which language is primarily used to style webpage elements?", 
    choices: ["A. javascript", "B. python", "C. css"], 
    answer: "C. css"
}

var q3 = {
    question: "What is the best coding language?", 
    choices: ["A. python", "B. css", "C. not sure"], 
    answer: "C. not sure"
}
    

startButton.addEventListener('click', function start() {
    if (startContainer.dataset.state === 'visible') {
        startContainer.style.display = 'none';
    }
    questionOne();
}) 

function questionOne () {
    
    // timer start will go here
    firstQuestion.style.display = 'block';

    firstParagraph.textContent = q1.question;
    q1ChoiceA.textContent = q1.choices.a;
    q1ChoiceB.textContent = q1.choices.b;
    q1ChoiceC.textContent = q1.choices.c;

    checkOne();
}



function checkOne() {
    var q1Answer = "";

    q1Submit.addEventListener('click', function() {

        var q1Answer = "";

        if (q1CheckA.checked && q1CheckB.checked && q1CheckC.checked) {
            alert('please choose one answer');
        } else if (q1CheckA.checked && q1CheckB.checked) {
            alert('please choose one answer');
        } else if (q1CheckB.checked && q1CheckC.checked) {
            alert('please choose one answer');
        } else if (q1CheckA.checked && q1CheckC.checked) {
            alert('please choose one answer');
        } else {

        }
    })
}





