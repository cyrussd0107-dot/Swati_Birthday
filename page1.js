// ===============================
// ADVANCED PAGE 1 JAVASCRIPT
// ===============================




// MAIN CONTAINER ENTRY ANIMATION
window.addEventListener("load", () => {

    const container = document.querySelector(".main-container");

    container.style.opacity = "0";
    container.style.transform = "translateY(50px) scale(0.95)";

    setTimeout(() => {

        container.style.transition = "all 1.5s ease";

        container.style.opacity = "1";
        container.style.transform = "translateY(0px) scale(1)";

    }, 300);

});




// ===============================
// BEAUTIFUL BACKGROUND HEARTS
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const emojis = [
        "💖","💕","💞","💗","✨","🌸"
    ];

    heart.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];



    // RANDOM POSITION
    heart.style.left =
    Math.random() * 100 + "vw";



    // START FROM BOTTOM
    heart.style.top = "110vh";



    // RANDOM SIZE
    heart.style.fontSize =
    (18 + Math.random() * 18) + "px";



    // RANDOM SPEED
    heart.style.animationDuration =
    (6 + Math.random() * 5) + "s";



    // LOW OPACITY
    heart.style.opacity =
    (0.15 + Math.random() * 0.25);



    // SEND TO BACKGROUND
    heart.style.zIndex = "-1";



    document.body.appendChild(heart);



    // REMOVE AFTER ANIMATION
    setTimeout(() => {

        heart.remove();

    }, 12000);
}



// CREATE HEARTS SLOWLY
setInterval(createHeart, 900);




// MAGIC SPARKLES ON MOUSE MOVE
document.addEventListener("mousemove", (e) => {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.pageX + "px";

    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 1200);

});




// GLOWING BUTTON EFFECT
const button = document.querySelector(".journey-btn");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.08)";

    button.style.boxShadow = "0 0 45px rgba(255,105,180,0.9)";

    button.style.letterSpacing = "1px";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

    button.style.boxShadow = "0 0 25px rgba(255,105,180,0.5)";

    button.style.letterSpacing = "0px";

});




// CLICK BURST EFFECT
document.addEventListener("click", (e) => {

    for(let i = 0; i < 12; i++) {

        const burst = document.createElement("div");

        burst.className = "burst";

        burst.innerHTML = "💖";

        burst.style.left = e.pageX + "px";

        burst.style.top = e.pageY + "px";

        burst.style.transform =
        `translate(
            ${Math.random() * 250 - 125}px,
            ${Math.random() * 250 - 125}px
        )`;

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 2000);
    }

});




// TYPING EFFECT FOR SUBTITLE
const subtitle = document.querySelector(".subtitle");

if(subtitle){

    const text = subtitle.innerHTML;

    subtitle.innerHTML = "";

    let index = 0;

    function typeText(){

        if(index < text.length){

            subtitle.innerHTML += text.charAt(index);

            index++;

            setTimeout(typeText, 35);
        }
    }

    setTimeout(typeText, 1200);
}




// RANDOM FLOATING PARTICLES
for(let i = 0; i < 40; i++){

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";

    particle.style.top = Math.random() * 100 + "vh";

    particle.style.animationDuration =
    (Math.random() * 10 + 8) + "s";

    particle.style.opacity = Math.random();

    particle.style.transform =
    `scale(${Math.random()})`;

    document.body.appendChild(particle);
}




// PHOTO HOVER MAGIC
const profile = document.querySelector(".profile-section img");

if(profile){

    profile.addEventListener("mouseenter", () => {

        profile.style.transform = "scale(1.08) rotate(2deg)";

        profile.style.boxShadow =
        "0 0 50px rgba(255,105,180,0.9)";

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform = "scale(1) rotate(0deg)";

        profile.style.boxShadow =
        "0 0 30px rgba(255,105,180,0.5)";

    });

}




// BACKGROUND PARALLAX EFFECT
document.addEventListener("mousemove", (e) => {

    const bg = document.querySelector(".bg-image");

    const x = (window.innerWidth - e.pageX * 0.03);

    const y = (window.innerHeight - e.pageY * 0.03);

    bg.style.transform =
    `scale(1.1) translate(${x/100}px, ${y/100}px)`;

});




// AUTO GLOW EFFECT ON TITLE
setInterval(() => {

    const title = document.querySelector(".main-title");

    title.style.textShadow =
    `
    0 0 10px rgba(255,255,255,0.6),
    0 0 20px rgba(255,105,180,0.8),
    0 0 40px rgba(255,20,147,0.9)
    `;

    setTimeout(() => {

        title.style.textShadow =
        `
        0 0 5px rgba(255,255,255,0.3),
        0 0 15px rgba(255,105,180,0.5)
        `;

    }, 1000);

}, 2500);




// SMOOTH PAGE TRANSITION
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destination = this.href;

        document.body.style.opacity = "0";

        document.body.style.transition = "1s";

        setTimeout(() => {

            window.location.href = destination;

        }, 800);

    });

});