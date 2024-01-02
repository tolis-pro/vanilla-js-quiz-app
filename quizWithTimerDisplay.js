// Declare the correct answers
const questions = [
    { correctAnswer: "Jupiter" },
    { correctAnswer: "7" },
    { correctAnswer: "Paris" },
    { correctAnswer: "Mars" },
    { correctAnswer: "Blue Whale" }
];

let currentQuestion = 0;
let score = 0;
let timer;

// display the first question
document.addEventListener('DOMContentLoaded', function () {
    displayQuestion();
});

function displayQuestion() {
    // Display the current question
    document.getElementById(`q${currentQuestion + 1}`).style.display = 'block';

    // Set the initial time to 15 seconds
    let timeLeft = 15;

    function updateTimer() {
        // Display the remaining time to the user
        document.getElementById('timer').textContent = `Time left: ${timeLeft} seconds`;

        // Decrease the remaining time
        timeLeft--;

        // Check if time has run out
        if (timeLeft < 0) {
            handleTimeout();
        } else {
            // Continue updating the timer
            timer = setTimeout(updateTimer, 1000);
        }
    }

    // Start the timer for 15 seconds
    timer = setTimeout(updateTimer, 1000);
}



function handleTimeout() {
    // Handle when the user runs out of time for the current question
    alert("Time's up! Moving to the next question.");
    document.getElementById(`q${currentQuestion + 1}`).style.display = 'none';
    currentQuestion++;

    // If there are more questions, display the next one
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // If all questions are answered, display the final score
        displayFinalScore();
        document.getElementById("timer").style.display = 'none';
    }
}

function submitQuiz() {
    clearTimeout(timer); // Clear the timer when the user submits an answer

    // Check if the user has selected an answer
    const selectedOption = document.querySelector(`input[name=q${currentQuestion + 1}]:checked`);
    if (!selectedOption) {
        alert("Please select an answer before moving to the next question.");
        return;
    }

    // Check user's answer and update score
    const userAnswer = selectedOption.value;

    if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
    }

    document.getElementById(`q${currentQuestion + 1}`).style.display = 'none';

    currentQuestion++;

    // If there are more questions, display the next one
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        // If all questions are answered, display the final score
        displayFinalScore();
        document.getElementById("timer").style.display = 'none';
    }
}


function displayFinalScore() {
    // Display the final score to the user
    alert(`You have completed the quiz!\nYour final score is: ${score}/${questions.length}`);
}
