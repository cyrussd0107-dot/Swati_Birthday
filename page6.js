// ==========================
// PAGE FADE IN
// ==========================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1.2s ease";

        document.body.style.opacity="1";

    },200);

});





// ==========================
// SCROLL REVEAL
// ==========================

const cards =
document.querySelectorAll(".scrap-card");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0px) rotate(0deg)";

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform=
    "translateY(60px)";

    card.style.transition=
    "1s ease";

    observer.observe(card);

});





// ==========================
// FLOATING PARTICLES
// ==========================

function createParticle(){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML =
    ["💖","✨","🌸","☁️"]
    [Math.floor(Math.random()*4)];

    particle.style.left =
    Math.random()*100 + "vw";

    particle.style.fontSize =
    (15 + Math.random()*18) + "px";

    particle.style.animationDuration =
    (5 + Math.random()*6) + "s";

    document.body.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },10000);

}

setInterval(createParticle,1000);





// ==========================
// PARTICLE STYLE
// ==========================

const style =
document.createElement("style");

style.innerHTML=`

.particle{

    position:fixed;

    bottom:-50px;

    z-index:-1;

    opacity:0.5;

    pointer-events:none;

    animation:floatParticle linear forwards;
}

@keyframes floatParticle{

    from{

        transform:
        translateY(0px)
        rotate(0deg);

        opacity:0;
    }

    20%{
        opacity:1;
    }

    to{

        transform:
        translateY(-120vh)
        rotate(360deg);

        opacity:0;
    }
}

`;

document.head.appendChild(style);





// ==========================
// MOUSE GLOW
// ==========================

document.addEventListener("mousemove",(e)=>{

    const glow =
    document.createElement("div");

    glow.classList.add("cursor-glow");

    glow.style.left =
    e.clientX + "px";

    glow.style.top =
    e.clientY + "px";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.remove();

    },600);

});





// ==========================
// CURSOR STYLE
// ==========================

const glowStyle =
document.createElement("style");

glowStyle.innerHTML=`

.cursor-glow{

    position:fixed;

    width:12px;
    height:12px;

    border-radius:50%;

    background:white;

    pointer-events:none;

    z-index:9999;

    box-shadow:
    0 0 20px #ff7eb3,
    0 0 40px #ff7eb3;

    animation:glowFade 0.6s linear forwards;
}

@keyframes glowFade{

    to{

        transform:scale(3);

        opacity:0;
    }
}

`;

document.head.appendChild(glowStyle);





// ==========================
// BUTTON EFFECT
// ==========================

const button =
document.querySelector(".next-btn");

button.addEventListener("mouseenter",()=>{

    button.style.letterSpacing="1px";

});

button.addEventListener("mouseleave",()=>{

    button.style.letterSpacing="0px";

});