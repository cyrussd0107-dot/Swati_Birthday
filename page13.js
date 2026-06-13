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
   PARALLAX
========================= */

const mainMemory = document.querySelector(".main-memory");

document.addEventListener("mousemove", (e) => {

    const x =
    (e.clientX / window.innerWidth - 0.5);

    const y =
    (e.clientY / window.innerHeight - 0.5);

    mainMemory.style.transform =
    `translate(calc(-50% + ${x * 10}px), calc(-50% + ${y * 10}px))`;

});


/* =========================
   VIDEO TRANSITION
========================= */

const bgVideo = document.querySelector(".bg-video");

/* SHOW VIDEO */

setTimeout(() => {

    bgVideo.classList.add("show");

}, 9000);


/* EXTRA CINEMATIC DEPTH */

setTimeout(() => {

    bgVideo.classList.add("focus");

}, 12000);