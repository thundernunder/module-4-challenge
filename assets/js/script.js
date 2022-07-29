var startButton = document.querySelector("#start");
var startContainer = document.querySelector('#start-container');
var firstQuestion = document.querySelector("#question-one");
var firstParagraph = document.querySelector("#q-1-p");
var firstQuestionChoiceA = document.querySelector('#q-1-a');
var firstQuestionChoiceB = document.querySelector('#q-1-b');
var firstQuestionChoiceC = document.querySelector('#q-1-c');

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
    firstQuestionChoiceA.value = q1.choices.a;
    firstQuestionChoiceB.value = q1.choices.b;
    firstQuestionChoiceC.value = q1.choices.c;
}






