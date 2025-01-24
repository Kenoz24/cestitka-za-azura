function showConfetti() {
    const canvas = document.getElementById('confetti');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiColors = ['#6973ff', '##6973ff', '##6973ff'];
    const confettiPieces = 100;
    const confettiArray = [];

    function ConfettiPiece() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 3 + 2;
    }

    ConfettiPiece.prototype.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    };

    function updateConfetti() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < confettiArray.length; i++) {
            const confetti = confettiArray[i];
            confetti.y += confetti.speed;
            if (confetti.y > canvas.height) {
                confetti.y = 0 - confetti.size;
                confetti.x = Math.random() * canvas.width;
            }
            confetti.draw();
        }
        requestAnimationFrame(updateConfetti);
    }

    for (let i = 0; i < confettiPieces; i++) {
        confettiArray.push(new ConfettiPiece());
    }

    updateConfetti();
}
