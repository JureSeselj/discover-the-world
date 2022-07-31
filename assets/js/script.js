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

// Show Correct Answer After Wrong Click

function wrongAnswer() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

// Add Countdown Timer

let timer;

function myTimer() {
    if (timer) {
        clearInterval(timer);
    }
    let sec = 20;
    timer = setInterval(function () {
        document.getElementById('timer').innerHTML = '<i class="far fa-clock"></i>' + ' ' + sec + ' ' + "sec left";
        sec--;
        if (sec == -1) {
            clearInterval(timer);
            wrongAnswer();
            Array.from(choiceButtons.children).forEach(button => {
                button.disabled = true;
            });
        }
    }, 1000);
};

// Question Bank

const questionBank = [{
    question: "I'll visit a famous volcano that detroyed 5 cities in AD 79 and until nowadays is one of the most dangerous in the world.",
        answers: [{
                text: 'Mount Samalas - Indonesia',
                correct: false
            },
            {
                text: 'Mount Vesuvius - Italy',
                correct: true
            },
            {
                text: 'Mount Unzen - Japan',
                correct: false
            }, {
                text: 'Santorini - Greece',
                correct: false
            }
        ],
        correctText: "The Sahara is a desert on the African continent. With an area of 9,200,000 square kilometres (3,600,000 sq mi), it is the largest hot desert in the world and the third largest desert overall, smaller only than the deserts of Antarctica and the northern Arctic.The desert comprises much of North Africa, excluding the fertile region on the Mediterranean Sea coast, the Atlas Mountains of the Maghreb, and the Nile Valley in Egypt and Sudan. It stretches from the Red Sea in the east and the Mediterranean in the north to the Atlantic Ocean in the west, where the landscape gradually changes from desert to coastal plains. To the south, it is bounded by the Sahel, a belt of semi-arid tropical savanna around the Niger River valley and the Sudan Region of Sub-Saharan Africa. The Sahara can be divided into several regions, including the western Sahara, the central Ahaggar Mountains, the Tibesti Mountains, the Aïr Mountains, the Ténéré desert, and the Libyan Desert. ",
        image: 'assets/images/saharadesert.jpg',
        mark: "Sahara desert"
    },
];

