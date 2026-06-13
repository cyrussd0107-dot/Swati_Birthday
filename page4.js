// STARS

const stars = document.querySelector(".stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("span");

    star.style.left =
    Math.random() * 100 + "vw";

    star.style.top =
    Math.random() * 100 + "vh";

    star.style.animationDuration =
    2 + Math.random() * 4 + "s";

    stars.appendChild(star);
}


// MESSAGE SWITCHER

const messages =
document.querySelectorAll(".message");

const nextBtn =
document.getElementById("nextBtn");

let current = 0;

nextBtn.addEventListener("click",()=>{

    messages[current]
    .classList.remove("active");

    current++;

    if(current >= messages.length){
        current = 0;
    }

    setTimeout(()=>{

        messages[current]
        .classList.add("active");

    },300);

});


// CURSOR GLOW

document.addEventListener("mousemove",(e)=>{

    const glow =
    document.createElement("div");

    glow.style.position="fixed";

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

    glow.style.width="10px";
    glow.style.height="10px";

    glow.style.borderRadius="50%";

    glow.style.background=
    "rgba(255,182,217,0.7)";

    glow.style.pointerEvents="none";

    glow.style.filter="blur(6px)";

    glow.style.zIndex="9999";

    document.body.appendChild(glow);

    setTimeout(()=>{
        glow.remove();
    },300);

});