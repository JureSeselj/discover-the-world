const questionElement = document.getElementById('question');
const choiceButtons = document.getElementById('choice-container');
const nextButton = document.getElementById('next-button');
const questionPopupElement = document.getElementById('popup-incorrect');
const progressText = document.getElementById("progress-text");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion;
let shuffleQuestions;

// Begin Game 

let scorePoints = 0;
window.onload = function beginGame() {
    background();
    startQuiz();
};

// Next Button Add Next Question

nextButton.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
});

// When Executed Hide Start Button, Shows Question Container And Shuffle Questions 

function startQuiz() {
    shuffleQuestions = questionBank.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    nextQuestion();
}

const MAX_QUESTIONS = 20;

// Initialize Page For New Question

function nextQuestion() {

    if ((shuffleQuestions.length == currentQuestion) || currentQuestion == MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", (scorePoints * 100));
        window.location = "end.html";
    }
    if (shuffleQuestions.length >= currentQuestion + 1) {
        resetQuestion();
        showQuestion(shuffleQuestions[currentQuestion]);
        window.scrollTo(0,50);
        myTimer();
    }

    // Update The Progress Text
    progressText.innerText = `Question ${currentQuestion+1}/${MAX_QUESTIONS}`;
    // Update The Progress Bar
    progressBarFull.style.width = `${((currentQuestion +1) / MAX_QUESTIONS) * 100}%`;
}