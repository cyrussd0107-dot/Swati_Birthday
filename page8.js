/* =========================
   PARTICLES
========================= */

const particles =
document.querySelector(".particles");

for(let i = 0; i < 40; i++){

    const span =
    document.createElement("span");

    span.style.left =
    Math.random() * 100 + "%";

    span.style.top =
    Math.random() * 100 + "%";

    span.style.animationDuration =
    (10 + Math.random() * 10) + "s";

    span.style.animationDelay =
    Math.random() * 5 + "s";

    particles.appendChild(span);
}

/* =========================
   POPUP
========================= */

const popup =
document.querySelector(".memory-popup");

const popupText =
document.querySelector(".popup-text");

/* =========================
   MEMORIES
========================= */

const memories = {

    moon:
    "Late night silence somehow started feeling softer because of you. 🌙",

    ribbon:
    "Tiny moments quietly turned into unforgettable memories. 🎀",

    rain:
    "Rainy evenings somehow started carrying your presence. 🌧️",

    ticket:
    "Even metro rides slowly began reminding me of you. 🎫",

    music:
    "Certain songs now permanently sound like your existence. 🎧",

    camera:
    "Random snapshots somehow became emotional archives. 📸",

    tea:
    "Warm tea and long conversations started feeling like home. ☕"
};

/* =========================
   CLICK EVENTS
========================= */

document.querySelectorAll(".memory-object")
.forEach(object => {

    object.addEventListener("click", () => {

        const key =
        object.dataset.memory;

        popupText.innerHTML =
        memories[key];

        popup.classList.add("active");

        /* OBJECT ANIMATION */

        object.animate([

            {
                transform:'scale(1)'
            },

            {
                transform:'scale(1.15)'
            },

            {
                transform:'scale(1)'
            }

        ],{

            duration:600
        });

    });

});

/* =========================
   CAMERA MOVEMENT
========================= */

document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.clientX) / 90;

    const y =
    (window.innerHeight / 2 - e.clientY) / 90;

    document.querySelector(".dream-space")
    .style.transform =
    `translate(${x}px,${y}px)`;
});