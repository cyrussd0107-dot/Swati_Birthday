const tl = gsap.timeline();

const thought = document.querySelector(".thought");

const star = document.querySelector(".main-star");

const starLight = document.querySelector(".star-light");

const memoryScene = document.querySelector(".memory-scene");

const memoryImage = document.querySelector(".memory-image");

const videoScene = document.querySelector(".video-scene");

const video = document.getElementById("memoryVideo");

const letterScene = document.querySelector(".letter-scene");

const letterText = document.querySelector(".letter-text");

/* CAMERA FLOAT */

gsap.to(".camera",{

  x:-25,
  y:-15,

  duration:35,

  repeat:-1,

  yoyo:true,

  ease:"sine.inOut"

});

/* STAR PARALLAX */

gsap.to(".stars-back",{

  y:-200,

  duration:160,

  repeat:-1,

  ease:"none"

});

gsap.to(".stars-mid",{

  y:-450,

  duration:110,

  repeat:-1,

  ease:"none"

});

gsap.to(".stars-front",{

  y:-800,

  duration:75,

  repeat:-1,

  ease:"none"

});

/* OPENING SILENCE */

tl.to({},{
  duration:5
});

/* THOUGHT 1 */

tl.call(()=>{

  thought.innerHTML = "before today...";

});

tl.to(thought,{

  opacity:1,
  filter:"blur(0px)",

  duration:4,

  ease:"power2.out"

});

tl.to(thought,{

  y:-80,
  opacity:0,
  filter:"blur(8px)",

  duration:5

},"+=2");

/* EMPTY SPACE */

tl.to({},{
  duration:3
});

/* THOUGHT 2 */

tl.call(()=>{

  thought.innerHTML = "there was a first day.";

});

tl.to(thought,{

  opacity:1,
  filter:"blur(0px)",

  duration:4

});

tl.to(thought,{

  y:-80,
  opacity:0,
  filter:"blur(8px)",

  duration:5

},"+=2");

/* EMPTY */

tl.to({},{
  duration:4
});

/* UNIVERSE THOUGHTS */

const lines = [

  "a thousand mornings",

  "a thousand conversations",

  "a thousand versions of you"

];

lines.forEach(text=>{

  tl.call(()=>{

    thought.innerHTML = text;

    gsap.set(thought,{
      y:0
    });

  });

  tl.to(thought,{

    opacity:.85,
    filter:"blur(0px)",

    duration:4

  });

  tl.to(thought,{

    opacity:0,
    y:-60,
    filter:"blur(10px)",

    duration:5

  },"+=2");

  tl.to({},{
    duration:2
  });

});

/* SILENCE */

tl.to({},{
  duration:4
});

/* STAR */

tl.to(star,{

  opacity:1,
  scale:4,

  duration:10,

  ease:"power2.out"

});

/* CAMERA PUSH */

tl.to(".camera",{

  scale:1.08,

  duration:20,

  ease:"power2.inOut"

},"-=8");

/* LIGHT */

tl.to(starLight,{

  opacity:1,
  scale:1,

  duration:12

},"-=12");

/* MEMORY */

tl.to(memoryScene,{

  opacity:1,

  duration:10

},"-=9");

tl.to(memoryImage,{

  scale:1,

  duration:14,

  ease:"power2.out"

},"-=12");

/* STILLNESS */

tl.to({},{
  duration:6
});

/* MEMORY COMES ALIVE */

tl.to(memoryImage,{

  scale:1.04,

  duration:10,

  ease:"sine.inOut"

});

tl.to(memoryImage,{

  filter:"blur(6px)",

  duration:5

},"-=5");

/* VIDEO TRANSITION */

tl.to(videoScene,{

  opacity:1,

  duration:7

},"-=4");

tl.call(()=>{
  video.play();
});

/* MEMORY FADES */

tl.to(memoryScene,{

  opacity:0,

  duration:6

},"-=6");

/* VIDEO DRIFT */

tl.to(video,{

  scale:1.08,

  duration:40,

  ease:"none"

});

/* FREEZE FRAME */

tl.to(video,{

  filter:"brightness(1.5) blur(5px)",

  duration:5

});

/* FILM BURN */

tl.to(".experience",{

  background:"#f4eee3",

  duration:8

});

/* LETTER */

tl.to(letterScene,{

  opacity:1,

  duration:6

},"-=5");

tl.to(letterText,{

  opacity:1,

  duration:8

});

/* PAGE TURN EFFECT */

tl.to(".letter-scene",{

  y:"-100%",

  duration:5,

  ease:"power2.inOut"

},"+=5");

/* PAGE 20 */

tl.call(()=>{

  window.location.href = "page20.html";

});

const music = document.getElementById("bgMusic");

window.addEventListener("click", () => {
    music.play();
}, { once: true });

function fadeMusic() {

    let volume = 1;

    const fade = setInterval(() => {

        if (volume > 0.05) {

            volume -= 0.05;
            music.volume = volume;

        } else {

            clearInterval(fade);
            music.pause();

        }

    }, 300);

}