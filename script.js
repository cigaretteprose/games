const basket = document.getElementById('basket');
const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');

let score = 0;
let ballY = -40;
let ballX = Math.random() * (window.innerWidth - 30);
let speed = 5;

// Gerakin keranjang pake Mouse atau Touch
document.addEventListener('mousemove', (e) => {
    let x = e.clientX - 40;
    basket.style.left = x + 'px';
});

document.addEventListener('touchmove', (e) => {
    let x = e.touches[0].clientX - 40;
    basket.style.left = x + 'px';
});

function update() {
    ballY += speed;

    // Cek kalau bola jatuh ke bawah
    if (ballY > window.innerHeight) {
        ballY = -40;
        ballX = Math.random() * (window.innerWidth - 30);
        score = 0; // Reset skor kalau kaga ketangkep
        speed = 5;
    }

    // Cek tabrakan bola sama keranjang
    let basketRect = basket.getBoundingClientRect();
    let ballRect = ball.getBoundingClientRect();

    if (
        ballRect.bottom >= basketRect.top &&
        ballRect.right >= basketRect.left &&
        ballRect.left <= basketRect.right
    ) {
        score++;
        ballY = -40;
        ballX = Math.random() * (window.innerWidth - 30);
        speed += 0.5; // Makin lama makin cepet
    }

    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';
    scoreElement.innerText = "Score: " + score;

    requestAnimationFrame(update);
}

update();
