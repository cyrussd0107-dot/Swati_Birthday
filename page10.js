/* =========================
   FLOWER THEME SWITCH
========================= */

const flowerBtns =
document.querySelectorAll(".flower-btn");

const body =
document.body;

const mainImage =
document.getElementById("mainImage");

const quoteText =
document.getElementById("quoteText");

/* =========================
   THEMES
========================= */

flowerBtns.forEach(button => {

    button.addEventListener("click", () => {

        /* REMOVE ACTIVE */

        flowerBtns.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        /* GET DATA */

        const theme =
        button.dataset.theme;

        const image =
        button.dataset.image;

        const quote =
        button.dataset.quote;

        /* CHANGE BODY CLASS */

        body.className = "";
        body.classList.add(`${theme}-theme`);

        /* IMAGE CHANGE */

        gsap.to(mainImage,{
            opacity:0,
            duration:.35,

            onComplete:()=>{

                mainImage.src = image;

                gsap.to(mainImage,{
                    opacity:1,
                    duration:.6
                });
            }
        });

        /* QUOTE CHANGE */

        gsap.to(quoteText,{
            opacity:0,
            y:10,
            duration:.3,

            onComplete:()=>{

                quoteText.innerHTML =
                `"${quote}"`;

                gsap.to(quoteText,{
                    opacity:1,
                    y:0,
                    duration:.5
                });
            }
        });

    });

});

/* =========================
   FLOATING PARTICLES
========================= */

const particles =
document.querySelector(".particles");

for(let i=0; i<35; i++){

    const span =
    document.createElement("span");

    span.style.left =
    Math.random()*100 + "%";

    span.style.animationDuration =
    (8 + Math.random()*10) + "s";

    span.style.opacity =
    Math.random();

    particles.appendChild(span);
}

/* =========================
   ENTRANCE ANIMATION
========================= */

gsap.from(".left-section",{
    x:-80,
    opacity:0,
    duration:1.2
});

gsap.from(".center-section",{
    y:60,
    opacity:0,
    duration:1.3
});

gsap.from(".flower-btn",{
    x:80,
    opacity:0,
    stagger:.15,
    duration:1
});