const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

let ballX = 200;
let ballY = 0;
let ballSpeed = 3;
let score = 0;

let paddleX = 160;
const paddleSpeed = 20;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' && paddleX > 0) {
    paddleX -= paddleSpeed;
  } else if (e.key === 'ArrowRight' && paddleX < gameArea.offsetWidth - 80) {
    paddleX += paddleSpeed;
  }
  paddle.style.left = paddleX + 'px';
});

function gameLoop() {
  ballY += ballSpeed;
  ball.style.top = ballY + 'px';

  if (ballY > gameArea.offsetHeight - 40) {
    const ballCenter = ballX + 10;
    const paddleLeft = paddleX;
    const paddleRight = paddleX + 80;

    if (ballCenter >= paddleLeft && ballCenter <= paddleRight) {
      score++;
      scoreDisplay.textContent = "Score: " + score;
      ballY = 0;
      ballX = Math.random() * (gameArea.offsetWidth - 20);
      ball.style.left = ballX + 'px';
      ballSpeed += 0.1;
    } else {
      alert("Game Over! Final Score: " + score);
      resetGame();
    }
  }

  requestAnimationFrame(gameLoop);
}

function resetGame() {
  score = 0;
  scoreDisplay.textContent = "Score: 0";
  ballX = 200;
  ballY = 0;
  ballSpeed = 3;
  paddleX = 160;
  paddle.style.left = paddleX + 'px';
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
}

gameLoop();
