var startButton = document.querySelector("#start");
var startContainer = document.querySelector('#start-container');


startContainer.addEventListener('click', function(event) {
    // may need to add event parameter to function to prevent default (event.preventdefault()) so form doesn't clear. we'll see
    var element = event.target;

    if (element.matches("#start-container")) {
        var state = element.getAttribute('data-state');

        if (state === "visible") {
            element.setAttribute("data-state", "hidden");
        } else {
            element.dataset.state = "visible";
        }
    }
})




