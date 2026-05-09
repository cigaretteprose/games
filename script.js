const basket = document.getElementById('basket');
const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');

let score = 0;
let ballY = 0;
let ballX = Math.random() * (window.innerWidth - 40);
let speed = 5;

// Gerakin pake mouse
document.addEventListener('mousemove', (e) => {
    let x = e.clientX - 50;
    basket.style.left = x + 'px';
});

// Main di HP
document.addEventListener('touchmove', (e) => {
    let x = e.touches[0].clientX - 50;
    basket.style.left = x + 'px';
});

function gameLoop() {
    ballY += speed;

    // Kalau bola sampe bawah
    if (ballY > window.innerHeight) {
        ballY = -50;
        ballX = Math.random() * (window.innerWidth - 40);
        score = 0; // Reset skor
        speed = 5;
    }

    // Deteksi tabrakan
    let basketRect = basket.getBoundingClientRect();
    let ballRect = ball.getBoundingClientRect();

    if (
        ballRect.bottom >= basketRect.top &&
        ballRect.right >= basketRect.left &&
        ballRect.left <= basketRect.right
    ) {
        score++;
        ballY = -50;
        ballX = Math.random() * (window.innerWidth - 40);
        speed += 0.5;
    }

    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
    scoreElement.innerText = "Score: " + score;

    requestAnimationFrame(gameLoop);
}

gameLoop();
