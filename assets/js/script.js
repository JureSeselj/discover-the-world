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