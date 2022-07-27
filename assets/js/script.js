var startQuiz = document.querySelector('#start');
var startContainer = document.querySelector('#start-container');

function showQuestions() {

}


startQuiz.addEventListener('click', function(event) {
    // may need to add event parameter to function to prevent default (event.preventdefault()) so form doesn't clear. we'll see
    var element = event.target;

    if (element.matches("#start-container")) {
        var state = element.getAttribute('data-state');
    }
        if (state === "visible") {
            element.dataset.state = "hidden";
        }
})




