const colors = ["#d291bc", "#a2678a", "#3f3351", "#2c2e43"];
let index = 0;
setInterval(() => {
    document.querySelector('.box-main').style.borderColor = colors[index];
    index = (index + 1) % colors.length;
}, 1000);

// Splash screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash").classList.add("hide");
    }, 2500);

    // Confetti
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    for (let i = 0; i < 150; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 2,
            speed: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of pieces) {
            ctx.save();
            ctx.fillStyle = p.color;
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            p.y += p.speed;
            p.rotation += p.speed;

            if (p.y > canvas.height) {
                p.y = -10;
                p.x = Math.random() * canvas.width;
            }
        }
        requestAnimationFrame(draw);
    }

    draw();
});

// Popup logic
function showLetter() {
    document.getElementById("letter").style.display = "flex";
}

function closeLetter() {
    document.getElementById("letter").style.display = "none";
}

function toggleGallery() {
    const gal = document.getElementById("gallery");
    gal.style.display = gal.style.display === "flex" ? "none" : "flex";
}
