const highScoresList = document.getElementById("highScoresList");
const highScores2 = JSON.parse(localStorage.getItem("highScore")) || [];

highScoresList.innerHTML = highScores2
    .map(score => {
        return `<li class="high-score"> <i class="fas fa-trophy"></i> ${score.name} - ${score.score}</li>`;
    })
    .join("");