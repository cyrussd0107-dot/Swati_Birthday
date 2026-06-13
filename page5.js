// TIMELINE REVEAL

const items =
document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {

    items.forEach(item => {

        const trigger =
        window.innerHeight * 0.85;

        const top =
        item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");
        }

    });

});




// FLOATING PARTICLES

function createParticle(){

    const particle =
    document.createElement("div");

    particle.innerHTML = "✨";

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "vw";

    particle.style.top =
    "110vh";

    particle.style.fontSize =
    (15 + Math.random() * 25) + "px";

    particle.style.opacity =
    Math.random();

    document.body.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 12000);
}

setInterval(createParticle, 700);




// PARTICLE STYLE

const style =
document.createElement("style");

style.innerHTML = `

.particle{

    position:fixed;

    animation:
    floatUp linear forwards;

    z-index:-1;

    pointer-events:none;
}

@keyframes floatUp{

    from{

        transform:
        translateY(0)
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




// PARALLAX EFFECT

document.addEventListener("mousemove", (e) => {

    const x =
    (window.innerWidth - e.pageX * 0.03);

    const y =
    (window.innerHeight - e.pageY * 0.03);

    document.body.style.backgroundPosition =
    `${x/100}px ${y/100}px`;

});




// SMOOTH PAGE TRANSITION

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destination = this.href;

        document.body.style.opacity = "0";

        document.body.style.transition = "1s";

        setTimeout(() => {

            window.location.href =
            destination;

        }, 800);

    });

});

// =====================================
// UNIFEST FLOATING PINK PARTICLES
// =====================================

function createPinkParticle(){

    const particle = document.createElement("div");

    particle.innerHTML = ["💖","✨","🌸","💕"]
    [Math.floor(Math.random()*4)];

    particle.classList.add("pink-particle");

    particle.style.left =
    Math.random()*100 + "vw";

    particle.style.fontSize =
    (18 + Math.random()*18) + "px";

    particle.style.animationDuration =
    (5 + Math.random()*4) + "s";

    document.body.appendChild(particle);

    setTimeout(()=>{
        particle.remove();
    },9000);
}

setInterval(createPinkParticle,1200);