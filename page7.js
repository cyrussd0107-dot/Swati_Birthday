





// ======================
// PAGE FADE
// ======================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition=
        "2s ease";

        document.body.style.opacity="1";

    },300);

});





// ======================
// PARALLAX LIGHTS
// ======================

document.addEventListener("mousemove",(e)=>{

    const x =
    e.clientX / window.innerWidth;

    const y =
    e.clientY / window.innerHeight;

    document.querySelector(".light1")
    .style.transform =
    `translate(${x*30}px,${y*30}px)`;

    document.querySelector(".light2")
    .style.transform =
    `translate(${-x*40}px,${-y*40}px)`;

});





// ======================
// CARD REVEAL
// ======================

const cards =
document.querySelectorAll(".memory-card");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0px)";

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

/* =========================================
   MUSIC CONTROLS
========================================= */

const music =
document.getElementById("rainMusic");

const musicBtn =
document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click",()=>{

    if(!isPlaying){

        music.volume = 0;

        music.play();

        musicBtn.innerHTML =
        "♫ ambience playing";

        let fade = setInterval(()=>{

            if(music.volume < 0.4){

                music.volume += 0.01;

            }else{

                clearInterval(fade);
            }

        },120);

        isPlaying = true;

    }else{

        music.pause();

        musicBtn.innerHTML =
        "♫ play ambience";

        isPlaying = false;
    }

});