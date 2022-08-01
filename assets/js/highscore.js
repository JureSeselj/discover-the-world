const highScoresList = document.getElementById("highScoresList");
const highScores2 = JSON.parse(localStorage.getItem("highScore")) || [];

document.body.style.backgroundImage = "url('assets/images/highscore-image.jpg')";

highScoresList.innerHTML = highScores2
    .map(score => {
        return `<li class="high-score"> <i class="fas fa-trophy"></i> ${score.name} - ${score.score}</li>`;
    })
    .join("");