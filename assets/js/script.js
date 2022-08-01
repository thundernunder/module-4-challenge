var countdown = document.querySelector('#timer');
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
var q1Submit = document.querySelector('#q-1-submit');
var secondQuestion = document.querySelector('#question-two');
var secondParagraph = document.querySelector("#q-2-p");
var q2ChoiceA = document.querySelector('#q2-a-label');
var q2ChoiceB = document.querySelector('#q2-b-label');
var q2ChoiceC = document.querySelector('#q2-c-label');
var q2CheckA = document.querySelector('#q-2-a');
var q2CheckB = document.querySelector('#q-2-b');
var q2CheckC = document.querySelector('#q-2-c');
var q2Submit = document.querySelector('#q-2-submit');
var thirdQuestion = document.querySelector("#question-three");
var thirdParagraph = document.querySelector("#q-3-p");
var q3ChoiceA = document.querySelector('#q3-a-label');
var q3ChoiceB = document.querySelector('#q3-b-label');
var q3ChoiceC = document.querySelector('#q3-c-label');
var q3CheckA = document.querySelector('#q-3-a');
var q3CheckB = document.querySelector('#q-3-b');
var q3CheckC = document.querySelector('#q-3-c');
var q3Submit = document.querySelector('#q-3-submit');
var q3ScoreButton = document.querySelector('#see-score');
var saveInfoButton = document.querySelector('#save-info');
var rightAnswer = 0;
var score = document.querySelector('#view-score');
var userName = document.querySelector('#user-name');
var niceScore = document.querySelector('#user-score');
var storedScore = document.querySelector('#high-score');
var timeLeft = 50;



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
    choices: {
        a: "A) javascript", 
        b: "B) python", 
        c: "C) css",
    }, 
    answer: "C. css"
}

var q3 = {
    question: "What is the best coding language?", 
    choices: {
        a: "A) python", 
        b: "B) css", 
        c: "C) There's a language for everyone", 
    }, 
    answer: "C. There's a language for everyone"
}
    

startButton.addEventListener('click', function start() {
    if (startContainer.dataset.state === 'visible') {
        startContainer.style.display = 'none';
    }
    
    var timerInterval = setInterval(function () {
        timeLeft--;
        countdown.textContent = "Time Left: " + timeLeft; 

        if (timeLeft <= 0){
        clearInterval(timerInterval);
        alert('Aw man...you ran out of time!');
        location.reload()

        }}, 1000);
    
    questionOne();
}) 

function questionOne () {
    
    firstQuestion.style.display = 'block';
    secondQuestion.style.display = 'none';
    firstParagraph.textContent = q1.question;
    q1ChoiceA.textContent = q1.choices.a;
    q1ChoiceB.textContent = q1.choices.b;
    q1ChoiceC.textContent = q1.choices.c;

    checkOne();
}



function checkOne() {

    q1Submit.addEventListener('click', function() {

        if (q1CheckA.checked && q1CheckB.checked && q1CheckC.checked) {
            alert('please choose one answer');
        } else if (q1CheckA.checked && q1CheckB.checked) {
            alert('please choose one answer');
        } else if (q1CheckB.checked && q1CheckC.checked) {
            alert('please choose one answer');
        } else if (q1CheckA.checked && q1CheckC.checked) {
            alert('please choose one answer');
        } else {
            if (q1CheckB.checked) {
                alert("Nice!")
                
                rightAnswer = rightAnswer + 1;
                questionTwo();
            } else {
                alert('bummer!');
                timeLeft = timeLeft - 5;
                questionTwo();
            }
        }
    })
}

function questionTwo() {
    
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'block';
    secondParagraph.textContent = q2.question;
    q2ChoiceA.textContent = q2.choices.a;
    q2ChoiceB.textContent = q2.choices.b;
    q2ChoiceC.textContent = q2.choices.c;

    checkTwo();
}

function checkTwo() {

    q2Submit.addEventListener('click', function() {

        if (q2CheckA.checked && q2CheckB.checked && q2CheckC.checked) {
            alert('please choose one answer');
        } else if (q2CheckA.checked && q2CheckB.checked) {
            alert('please choose one answer');
        } else if (q2CheckB.checked && q2CheckC.checked) {
            alert('please choose one answer');
        } else if (q2CheckA.checked && q2CheckC.checked) {
            alert('please choose one answer');
        } else {
            if (q2CheckC.checked) {
                alert("Nice!")
                
                rightAnswer = rightAnswer + 1;
                questionThree();
            } else {
                alert('bummer!');
                timeLeft = timeLeft - 5;
                questionThree();
            }
        } 
    })
}

function questionThree() {
    firstQuestion.style.display = 'none';
    secondQuestion.style.display = 'none';
    thirdQuestion.style.display = 'block';

    thirdParagraph.textContent = q3.question;
    q3ChoiceA.textContent = q3.choices.a;
    q3ChoiceB.textContent = q3.choices.b;
    q3ChoiceC.textContent = q3.choices.c;

    checkThree();
}

function checkThree() {

    q3Submit.addEventListener('click', function() {

        if (q3CheckA.checked && q3CheckB.checked && q3CheckC.checked) {
            alert('please choose one answer');
        } else if (q3CheckA.checked && q3CheckB.checked) {
            alert('please choose one answer');
        } else if (q3CheckB.checked && q3CheckC.checked) {
            alert('please choose one answer');
        } else if (q3CheckA.checked && q3CheckC.checked) {
            alert('please choose one answer');
        } else {
            if (q3CheckC.checked) {
                alert("Nice!")
                rightAnswer = ((rightAnswer + 1)/3) *100;
                console.log(rightAnswer);
                localStorage.setItem("rightAnswer", rightAnswer);
                niceScore.textContent = "Score: " + (rightAnswer) + "%";
                submitQuiz();
            } else {
                alert('bummer!');
                rightAnswer = ((rightAnswer)/3) *100;
                localStorage.setItem("rightAnswer", rightAnswer);
                niceScore.textContent = "Score: " + (rightAnswer) + "%";
                submitQuiz();
            }
        } 
    })
}

function submitQuiz() {
    q3ScoreButton.addEventListener('click', function() {
        timeLeft = "Nice job!";
        countdown.style.display = 'none';
        thirdQuestion.style.display = 'none';
        score.style.display = 'block';
        saveInfo();
    })
}


function saveInfo() {

    storedScore.style.display = 'block';
    saveInfoButton.addEventListener("click", function() {
  
    var userName = document.querySelector("#user-name").value;

    if (userName === "") {
      alert("You don't want people to see your super awesome score?");
    } else {
        alert("Thanks for playing!");
        localStorage.setItem("userName", userName);
    }
  });
}

storedScore.addEventListener('click', function() {

    alert(
        "Username: " + localStorage.getItem("userName") +
        " Score: " + localStorage.getItem("rightAnswer"));
    })



