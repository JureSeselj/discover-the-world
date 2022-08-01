const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

window.onload = document.body.style.backgroundImage = "url('assets/images/highscore-image.jpg')";

finalScore.innerText = 'Score:' + ' ' + mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

let saveHighScore; 

saveHighScore = (e) => {
    e.preventDefault();
        
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScore.push(score);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(5);

    localStorage.setItem('highScore', JSON.stringify(highScore));
    window.location.assign('highscore.html');
};