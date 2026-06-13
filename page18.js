/* TEXTS */

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");

/* PHOTO */

const photoScene = document.getElementById("photoScene");
const photoCard = document.getElementById("photoCard");
const photoText = document.getElementById("photoText");

/* FINAL */

const finalScene = document.getElementById("finalScene");

/* =========================
   TEXT TIMELINE
========================= */

setTimeout(() => {
    line1.classList.add("show");
}, 1000);

setTimeout(() => {
    line1.classList.add("hide");
}, 5000);

/* SECOND */

setTimeout(() => {
    line2.classList.add("show");
}, 7000);

setTimeout(() => {
    line2.classList.add("hide");
}, 11500);

/* THIRD */

setTimeout(() => {
    line3.classList.add("show");
}, 13500);

setTimeout(() => {
    line3.classList.add("hide");
}, 18500);

/* =========================
   PHOTO SCENE
========================= */

setTimeout(() => {

    document.querySelector(".intro-scene")
    .classList.add("blur-out");

    setTimeout(() => {

        photoScene.classList.add("show-photo-scene");

    }, 1800);

}, 20000);

setTimeout(() => {

    photoCard.classList.add("show-photo");

}, 21500);

setTimeout(() => {

    photoText.classList.add("show-photo-text");

}, 23500);

/* =========================
   FINAL VIDEO
========================= */

setTimeout(() => {

    photoScene.classList.add("blur-out");

    setTimeout(() => {

        finalScene.classList.add("show-final");

    }, 1800);

}, 32000);

/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    music.play();

    musicBtn.innerHTML =
    "♫ ambience playing";

});

/* =========================
   NEXT PAGE
========================= */

document.getElementById("nextBtn")

.addEventListener("click", () => {

    window.location.href =
    "page19.html";

});