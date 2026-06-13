/* =========================
   MUSIC
========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    music.volume = 0;

    music.play();

    musicBtn.innerHTML = "♫ playing";

    let fade = setInterval(() => {

        if (music.volume < 0.35) {

            music.volume += 0.02;

        } else {

            clearInterval(fade);

        }

    }, 200);

});


/* =========================
   STAR CANVAS
========================= */

const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 180; i++) {

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        o: Math.random(),
        speed: Math.random() * 0.3 + 0.05

    });

}

function drawStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {

        star.y -= star.speed;

        if (star.y < 0) {

            star.y = canvas.height;

        }

        ctx.beginPath();

        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${star.o})`;

        ctx.fill();

    });

    requestAnimationFrame(drawStars);

}

drawStars();


/* =========================
   LETTER ANIMATION
========================= */

const letters = document.querySelectorAll(".name-letter");

setTimeout(() => {

    let delay = 0;

    letters.forEach(letter => {

        setTimeout(() => {

            letter.classList.add("active");

        }, delay);

        delay += 1400;

    });

}, 5000);


/* =========================
   PHOTO REVEAL
========================= */

const photoSection = document.getElementById("photoSection");
const photoCard = document.querySelector(".photo-card");
const bgVideo = document.querySelector(".bg-video");

setTimeout(() => {

    bgVideo.classList.add("show");

    photoSection.classList.add("show");

    photoCard.classList.add("show");

}, 12000);


/* =========================
   PARALLAX EFFECT
========================= */

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5);
    const y = (e.clientY / window.innerHeight - 0.5);

    if(photoCard){

        photoCard.style.transform =
        `translate(${x * 8}px, ${y * 8}px)`;

    }

});


/* =========================
   RESPONSIVE CANVAS
========================= */

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});