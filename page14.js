/* =========================================
   ELEMENTS
========================================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const story1 = document.querySelector(".story-1");
const story2 = document.querySelector(".story-2");
const story3 = document.querySelector(".story-3");

const emotionText = document.querySelector(".emotion-text");
const finalText = document.querySelector(".final-text");

const mainClock = document.querySelector(".main-clock");

const particles = document.querySelector(".particles");

const handMain = document.querySelector(".hand-main");

/* =========================================
   MUSIC
========================================= */

musicBtn.addEventListener("click", () => {

    music.volume = 0;

    music.play();

    musicBtn.innerHTML = "♫ ambience playing";

    let fade = setInterval(() => {

        if(music.volume < 0.35){

            music.volume += 0.01;

        }else{

            clearInterval(fade);

        }

    },200);

});

/* =========================================
   INITIAL STATES
========================================= */

gsap.set([
    story1,
    story2,
    story3,
    emotionText,
    finalText,
    mainClock
],{
    opacity:0,
    y:30,
    filter:"blur(12px)"
});

/* =========================================
   MASTER TIMELINE
========================================= */

const tl = gsap.timeline();

/* =========================================
   STORY 1
========================================= */

tl.to(story1,{

    opacity:1,
    y:0,
    filter:"blur(0px)",

    duration:3.5,
    ease:"power3.out"

})

.to({},{
    duration:4
})

.to(story1,{

    opacity:0,
    y:-20,
    filter:"blur(8px)",

    duration:2.5,
    ease:"power2.inOut"

});

/* =========================================
   STORY 2
========================================= */

tl.to(story2,{

    opacity:1,
    y:0,
    filter:"blur(0px)",

    duration:3.5,
    ease:"power3.out"

})

.to({},{
    duration:4.5
})

.to(story2,{

    opacity:0,
    y:-20,
    filter:"blur(8px)",

    duration:2.5,
    ease:"power2.inOut"

});

/* =========================================
   STORY 3
========================================= */

tl.to(story3,{

    opacity:1,
    y:0,
    filter:"blur(0px)",

    duration:3.5,
    ease:"power3.out"

})

.to({},{
    duration:5
})

.to(story3,{

    opacity:0,
    y:-20,
    filter:"blur(8px)",

    duration:3,
    ease:"power2.inOut"

});

/* =========================================
   CLOCK ARRIVAL
========================================= */

tl.to(mainClock,{

    opacity:1,
    scale:1,
    y:0,
    filter:"blur(0px)",

    duration:5,
    ease:"power4.out"

});

/* =========================================
   EMOTION TEXT
========================================= */

tl.to(emotionText,{

    opacity:1,
    y:0,
    filter:"blur(0px)",

    duration:4,
    ease:"power3.out"

},"-=2")

.to({},{
    duration:6
})

.to(emotionText,{

    opacity:0,
    y:-10,
    filter:"blur(10px)",

    duration:3,
    ease:"power2.inOut"

});

/* =========================================
   FINAL TEXT
========================================= */

tl.to(finalText,{

    opacity:1,
    y:0,
    filter:"blur(0px)",

    duration:5,
    ease:"power3.out"

})

.to({},{
    duration:8
});

/* =========================================
   TIME STOPS
========================================= */

tl.call(()=>{

    handMain.style.animation = "none";

    handMain.style.transform =
    "rotate(180deg)";

});

/* =========================================
   PARTICLES SLOW
========================================= */

tl.call(()=>{

    particles.style.animationDuration = "120s";

});

/* =========================================
   PARALLAX
========================================= */

document.addEventListener("mousemove",(e)=>{

    const x =
    (e.clientX/window.innerWidth - 0.5);

    const y =
    (e.clientY/window.innerHeight - 0.5);

    gsap.to(mainClock,{

        x:x * 10,
        y:y * 10,

        duration:2,
        ease:"power3.out"

    });

});

/* =========================================
   FLOATING CLOCKS
========================================= */

gsap.to(".clock-left",{

    y:-20,

    duration:7,
    repeat:-1,
    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".clock-right",{

    y:-16,

    duration:9,
    repeat:-1,
    yoyo:true,

    ease:"sine.inOut"

});