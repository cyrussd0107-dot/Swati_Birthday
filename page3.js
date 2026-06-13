const reasons = document.querySelectorAll(".reason");

let currentReason = 0;

/* INITIAL HIDE */
reasons.forEach(reason => {
    reason.style.display = "none";
});

/* SHOW FIRST */
showReason();

/* CLICK TO REVEAL NEXT */
document.body.addEventListener("click", (e) => {

    if(
        e.target.classList.contains("next-btn") ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "A"
    ){
        return;
    }

    showReason();

    createBurst(e.clientX, e.clientY);

});

/* SHOW FUNCTION */
function showReason(){

    if(currentReason >= reasons.length) return;

    const card = reasons[currentReason];

    card.style.display = "block";

    setTimeout(() => {
        card.classList.add("show");
    },100);

    card.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

    currentReason++;
}

/* MAGIC BURST */
function createBurst(x,y){

    const emojis = ["💖","✨","🌸","💕","💫"];

    for(let i=0;i<12;i++){

        const particle = document.createElement("div");

        particle.className = "magic";

        particle.innerHTML =
            emojis[Math.floor(Math.random()*emojis.length)];

        particle.style.left = x + "px";
        particle.style.top = y + "px";

        particle.style.transform =
            `translate(
                ${(Math.random()-0.5)*300}px,
                ${(Math.random()-0.5)*300}px
            )`;

        document.body.appendChild(particle);

        setTimeout(()=>{
            particle.remove();
        },1500);
    }
}

/* FLOATING BACKGROUND PARTICLES */
for(let i=0;i<40;i++){

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random()*100 + "vw";

    sparkle.style.animationDuration =
        5 + Math.random()*8 + "s";

    sparkle.style.opacity = Math.random();

    sparkle.style.width =
        sparkle.style.height =
        4 + Math.random()*8 + "px";

    document.body.appendChild(sparkle);
}