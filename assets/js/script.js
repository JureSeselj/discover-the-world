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

//Receive Question With Answers And Outputs Buttons For Each Answer

function showQuestion(pQuestion) {
    questionElement.innerText = pQuestion.question;
    questionPopupElement.innerText = pQuestion.correctText;
    const questionImage = document.getElementById("question-image");
    questionImage.src = pQuestion.image;
};

// Create Buttons To Answers And Add Text From Question Bank

pQuestion.answers.forEach(answer => {
    const answerButton = document.createElement('button');
    answerButton.innerText = answer.text;
    answerButton.classList.add('button');
    choiceButtons.appendChild(answerButton);

    if (answer.correct) {
        answerButton.dataset.correct = answer.correct;
    }
    answerButton.addEventListener('click', selectedAnswer);
});

// Add Hide On Next Button And Clean Buttons From Previous Question

function resetQuestion() {
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    }
};

// Target On Selected Answer And Style It Correct Or Wrong 

function selectedAnswer(a) {
    const selectedButton = a.target;
    const correct = selectedButton.dataset.correct;
    clearInterval(timer);

    // Add Class If Correct
    if (correct) {
        this.classList.add('correct');
        // Go To nextQuestion()
        scorePoints++;
        // Add Class If Incorrect
    } else {
        this.classList.add('wrong');
        wrongAnswer();
    }
    // Disable Answer Buttons
    Array.from(choiceButtons.children).forEach(button => {
        button.disabled = true;
    });
};