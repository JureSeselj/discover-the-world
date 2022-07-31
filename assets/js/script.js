const questionElement = document.getElementById('question');
const choiceButtons = document.getElementById('choice-container');
const nextButton = document.getElementById('next-button');
const questionPopupElement = document.getElementById('popup-incorrect');
const progressText = document.getElementById("progress-text");
const progressBarFull = document.getElementById("progressBarFull");



let currentQuestion;
let shuffleQuestions;

// begin game 
let scorePoints = 0;
window.onload = function beginGame() {
    background();
    startQuiz();
};

//add background to body
function background() {
    document.body.style.backgroundImage = "url('assets/images/highscore-image.jpg')";
}

// next button add next question
nextButton.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
});

// When executed hide Start Button, shows Question container and Shuffle questions. 
function startQuiz() {
    shuffleQuestions = questionBank.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    nextQuestion();
}

const MAX_QUESTIONS = 12;

// initialize page for new question.
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

    // update the progress text
    progressText.innerText = `Question ${currentQuestion+1}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${((currentQuestion +1) / MAX_QUESTIONS) * 100}%`;
}

function initMap() {}

//Receive question with answers and outputs buttons for each answer
function showQuestion(pQuestion) {
    questionElement.innerText = pQuestion.question;
    questionPopupElement.innerText = pQuestion.correctText;
    const questionImage = document.getElementById("question-image");
    questionImage.src = pQuestion.image;

    // create buttons to answers and add text from question bank
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
}

// Add hide on next button and clean buttons from previous question
function resetQuestion() {
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    }
}

// target on selected asnwer and style it correct or wrong 
function selectedAnswer(a) {
    const selectedButton = a.target;
    const correct = selectedButton.dataset.correct;
    clearInterval(timer);

    // add class if correct
    if (correct) {
        this.classList.add('correct');
        //go to nextQuestion()
        scorePoints++;
        // add class if incorrect
    } else {
        this.classList.add('wrong');
        wrongAnswer();
    }
    // disable answer buttons
    Array.from(choiceButtons.children).forEach(button => {
        button.disabled = true;
    });
}

// Show correct answer after wrong click
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
}

// Add contdown timer
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
}

// Question Bank

const questionBank = [{
    question: "Name this world famous building and the citadel on which it is located.",
    answers: [{
            text: 'Colosseum (Rome, Italy)',
            correct: false
        },
        {
            text: 'Parthenon, Acropolis (Athens, Greece)',
            correct: true
        },
        {
            text: 'Taj Mahal (Agra, India)',
            correct: false
        }, {
            text: 'Hagia Sophia (Istanbul, Turkey)',
            correct: false
        }
    ],
    correctText: 'The Parthenon is a former temple on the Athenian Acropolis, Greece, that was dedicated to the goddess Athena during the fifth century BC. Its decorative sculptures are considered some of the high points of Greek art, an enduring symbol of Ancient Greece, democracy and Western civilization.',
    image: 'assets/images/acropolis.png',
    mark: "Parthenon, Acropolis (Athens, Greece)"
},

{
    question: "Phoenix Park is the location of the official residence of the president of what European country?",
    answers: [{
            text: 'Hungary',
            correct: false
        },
        {
            text: 'Republic of Ireland',
            correct: true
        },
        {
            text: 'Slovakia',
            correct: false
        }, {
            text: 'Czech Republic',
            correct: false
        }
    ],
    correctText: "The Phoenix Park is a large Private park in Dublin, Ireland, lying 2–4 kilometres west of the city centre, north of the River Liffey. Its 11 kilometres perimeter wall encloses 707 hectares of recreational space.",
    image: 'assets/images/phoenix-park.jpeg',
    mark: "Republic of Ireland"

},

{
    question: "In what modern day country are the ruins of the 15th-century Inca city Machu Picchu?",
    answers: [{
            text: 'Uruguay',
            correct: false
        },
        {
            text: 'Mexico',
            correct: false
        },
        {
            text: 'Brasil',
            correct: false
        }, {
            text: 'Peru',
            correct: true
        }
    ],
    correctText: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views.",
    image: 'assets/images/machu-picchu.jpeg',
    mark: "Peru"
},

{
    question: "With its famous twisted spire, in what English town is the Parish Church of St. Mary and All Saints?",
    answers: [{
            text: 'Sheffield',
            correct: false
        },
        {
            text: 'Nottingham',
            correct: false
        },
        {
            text: 'Chesterfield',
            correct: true
        }, {
            text: 'Leeds',
            correct: false
        }
    ],
    correctText: "Chesterfield Parish Church is an Anglican church dedicated to Saint Mary and All Saints, in Chesterfield, Derbyshire, England. Building of the church began in 1234 AD, though the present church dates predominantly from the 14th century.",
    image: 'assets/images/chester.jpeg',
    mark: "Chesterfield"
},

{
    question: "Nicknamed the Lotus Temple, in what Indian city would you find the Bahá'í House of Worship?",
    answers: [{
            text: 'New Delhi, India',
            correct: true
        },
        {
            text: 'Kathmandu, Nepal',
            correct: false
        },
        {
            text: 'Bawana, India',
            correct: false
        }, {
            text: 'Lahore, Pakistan',
            correct: false
        }
    ],
    correctText: "The Lotus Temple, located in Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its flowerlike shape, it has become a prominent attraction in the city. Like all other Bahá’í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification. The building is composed of 27 free-standing marble-clad arranged in clusters of three to form nine sides, with nine doors opening onto a central hall with a height of slightly over 34 meters and a capacity of 1,300 people. The Lotus Temple has won numerous architectural awards and has been featured in many newspaper and magazine articles",
    image: 'assets/images/delhi-india.jpeg',
    mark: "New Delhi, India"
},

{
    question: "In what European capital city is this grand castle?",
    answers: [{
            text: 'Budapest, Hungary',
            correct: false
        },
        {
            text: 'Warsaw, Poland',
            correct: false
        },
        {
            text: 'Bratislava, Slovakia',
            correct: true
        }, {
            text: 'Sofia, Bulgaria',
            correct: false
        }
    ],
    correctText: "Bratislava Castle is the main castle of Bratislava, the capital of Slovakia. The massive rectangular building with four corner towers stands on an isolated rocky hill of the Little Carpathians directly above the Danube river in the middle of Bratislava.",
    image: 'assets/images/castle.jpeg',
    mark: "Bratislava, Slovakia"
},

{
    question: "What is the name of this public square in Paris, France?",
    answers: [{
            text: 'Palais de la Place Beauvau',
            correct: false
        },
        {
            text: 'Place Vendome',
            correct: false
        },
        {
            text: 'Grand Palais',
            correct: false
        }, {
            text: 'Place de la Concorde',
            correct: true
        }
    ],
    correctText: "The Place de la Concorde is one of the major public squares in Paris, France. Measuring 7.6 ha in area, it is the largest square in the French capital. It is located in the city's eighth arrondissement, at the eastern end of the Champs-Élysées.",
    image: 'assets/images/concorde.jpeg',
    mark: "Place de la Concorde"
},

{
    question: "The Detian - Ban Gioc Falls straddle the international border between what two countries?",
    answers: [{
            text: 'India and Pakistan',
            correct: false
        },
        {
            text: 'China and Vietnam',
            correct: true
        },
        {
            text: 'Vietnam and Thailand',
            correct: false
        }, {
            text: 'China and Nepal',
            correct: false
        }
    ],
    correctText: "Ban Gioc – Detian Falls or Ban Gioc Falls is a collective name for two waterfalls on the Quây Sơn River that straddle the international border between China and Vietnam; more specifically located between the Karst hills of Daxin County, Guangxi, and Trùng Khánh District, Cao Bằng Province.",
    image: 'assets/images/ban-gioc.jpeg',
    mark: "China and Vietnam"
},

{
    question: "With the flat-topped Table Mountain in the background, what city in Africa is this?",
    answers: [{
            text: 'Cape Town',
            correct: true
        },
        {
            text: 'Nairobi',
            correct: false
        },
        {
            text: 'Johannesburg',
            correct: false
        }, {
            text: 'Cairo',
            correct: false
        }
    ],
    correctText: "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.",
    image: 'assets/images/cape-town.jpeg',
    mark: "Cape Town"
},

{
    question: "A futuristic cable-stayed bridge with a sail ship appearance, in what country is the Seri Wawasan Bridge?",
    answers: [{
            text: 'Laos',
            correct: false
        },
        {
            text: 'Vietnam',
            correct: false
        },
        {
            text: 'Malaysia',
            correct: true
        }, {
            text: 'Indonesia',
            correct: false
        }
    ],
    correctText: "The Seri Wawasan Bridge is one of the main bridges in the planned city Putrajaya, the new Malaysian federal territory and administrative centre. This futuristic asymmetric cable-stayed bridge with a forward-inclined pylon has a sailing ship appearance, accented at night with changeable color lighting.",
    image: 'assets/images/bridge.png',
    mark: ""
},
];