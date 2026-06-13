/* =========================================
   MUSIC
========================================= */

const music =
document.getElementById("bgMusic");

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

            if(music.volume < 0.35){

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

/* =========================================
   FLOATING PARALLAX
========================================= */

document.addEventListener("mousemove",(e)=>{

    const x =
    (e.clientX / window.innerWidth - 0.5);

    const y =
    (e.clientY / window.innerHeight - 0.5);

    document.querySelectorAll(".floating-note")
    .forEach(note=>{

        note.style.transform =
        `translate(${x*20}px,${y*20}px)`;

    });

});

/* =========================================
   SCROLL REVEAL
========================================= */

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0px)";
        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(
".polaroid,.glass-card,.reason-card"
)
.forEach(el=>{

    el.style.opacity = "0";

    el.style.transform =
    "translateY(40px)";

    el.style.transition =
    "1s ease";

    observer.observe(el);

});

/* =========================================
   SCROLL STORYTELLING
========================================= */

const storySections =
document.querySelectorAll(".story-section");

const revealObserver =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.18
});

storySections.forEach(section=>{

    revealObserver.observe(section);

});

/* =========================================
   CINEMATIC BACKGROUND SHIFT
========================================= */

window.addEventListener("scroll",()=>{

    const scrollY =
    window.scrollY;

    /* WARM STAGE */

    if(scrollY > 300){

        document.body.classList.add("warm-stage");

    }else{

        document.body.classList.remove("warm-stage");
    }

    /* DEEPER PARTICLES */

    if(scrollY > 900){

        document.body.classList.add("deep-mood");

    }else{

        document.body.classList.remove("deep-mood");
    }

    /* LIGHT PARALLAX */

    document.querySelector(".light1")
    .style.transform =

    `translateY(${scrollY * 0.08}px)`;

    document.querySelector(".light2")
    .style.transform =

    `translateY(${scrollY * -0.05}px)`;

});