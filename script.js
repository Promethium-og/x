// Get the submit button through its id
var submitButton = document.getElementById("submit");

// Make the output function run when the submit button is clicked on
submitButton.addEventListener('click', output);

// The function that will provide a random output
function output() {
    // Declare a variable and assign submitted questions by getting value through its id
    var questionInput = document.getElementById("question").value;

    // Declare a variable and assign output through its id
    var answerOutput = document.getElementById("output");

    // Create an array with possible answers
    var answerArr = [
        "No",
        "Yes",
        "Careful",
        "Ask again later",
        "Without a doubt",
        "Ask again",
        "Better not tell you now",
        "Outlook not so good"
    ];

    if (questionInput.trim() === "") {
        // No question --> display message "No input, try again!"
        answerOutput.style.color = "red";
        answerOutput.innerHTML = "No input, try again!";
    } else {
        // Otherwise, display a random answer from the array
        answerOutput.style.color = "white";
        var randNum = Math.floor(Math.random() * answerArr.length); // Random index from 0 to 7
        answerOutput.innerHTML = answerArr[randNum];
    }
}
