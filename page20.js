/* =========================
   ELEMENTS
========================= */

const letterContent =
document.querySelector(".letter-content");

const typedLetter =
document.getElementById(
"typedLetter"
);

const signature =
document.querySelector(
".signature"
);

const continueBtn =
document.querySelector(
".continue-btn"
);

const letter =
document.querySelector(
".letter"
);

const finalScene =
document.querySelector(
".final-scene"
);

const whiteTransition =
document.querySelector(
".white-transition"
);

const music =
document.getElementById(
"letterMusic"
);

const spotlight =
document.querySelector(
".spotlight"
);

const startBtn =
document.getElementById(
"startBtn"
);

const startScreen =
document.querySelector(
".start-screen"
);

/* =========================
   LETTER TEXT
========================= */

const letterText =

`There are some things that are difficult to say out loud.

Maybe because words never seem enough for the people who truly matter.

And maybe that is why this whole thing exists.

Not just for your birthday.

Not just for one day.

But for all the little moments that made you who you are.

The moments you probably forgot.

The laughs you thought were ordinary.

The conversations you may not even remember.

The days that passed quietly...

but somehow became a part of you.

And somewhere between all of those moments,

you became someone really rare.

There is something in you that makes people better.

Not because you try to be perfect.

Not because you force anything.

But because your presence has this quiet way of making things feel lighter.

You make people feel comfortable.

You make laughter come easier.

You make ordinary moments feel like something worth remembering.

And maybe you do not always realize it,

but the people around you do.

They remember the comfort.

The kindness.

The warmth.

The way you make difficult days feel a little less heavy.

The way you make good days feel even brighter.

You probably do not see yourself the way others see you.

Maybe you notice your flaws more than your light.

Maybe you forget how much your presence means.

But I hope today reminds you.

You matter.

More than you realize.

Not only because it is your birthday,

but because the world has been softer,

warmer,

and a little more beautiful

since you became a part of it.

And if today celebrates anything,

let it celebrate you.

Not just your age.

Not just another year.

But your heart.

Your smile.

Your kindness.

Your chaos.

Your warmth.

And all the little things

that make you...

you.`;

/* =========================
   TYPEWRITER
========================= */

let index = 0;

function typeLetter(){

if(index < letterText.length){

typedLetter.innerHTML =

letterText.slice(
0,
index + 1
)

+

'<span class="cursor"></span>';
if(index % 15 === 0){

letterContent.scrollTo({

top: letterContent.scrollHeight,

behavior:"smooth"

});

}

index++;

const speed =

letterText[index] === "." ||
letterText[index] === "," ||
letterText[index] === "!" ||
letterText[index] === "?"

? 180

: 65;

setTimeout(
typeLetter,
speed
);

}

else{

typedLetter.innerHTML =
letterText;

signature.classList.add(
"show"
);

setTimeout(()=>{

continueBtn.classList.add(
"show"
);

continueBtn.style.opacity =
"1";

continueBtn.style.pointerEvents =
"auto";

},1200);

}

}

/* =========================
   START EXPERIENCE
========================= */

startBtn.addEventListener(
"click",
()=>{

music.volume = 0.35;

music.play().catch(()=>{});

startScreen.classList.add(
"hide"
);

setTimeout(()=>{

typeLetter();

},1200);

});

/* =========================
   CONTINUE BUTTON
========================= */

/* =========================
   FINAL CINEMATIC
========================= */

continueBtn.addEventListener(
"click",
()=>{

continueBtn.style.opacity="0";

continueBtn.style.pointerEvents="none";

letter.classList.add(
"fold-away"
);

/* dark pause */

setTimeout(()=>{

finalScene.classList.add(
"show"
);

},3500);

/* and now */

setTimeout(()=>{

document
.querySelector(".and-now")
.classList.add("show");

},5000);

/* hide and now */

setTimeout(()=>{

document
.querySelector(".and-now")
.classList.add("hide");

},8000);

/* reveal title */

setTimeout(()=>{

document
.querySelector(".final-reveal")
.classList.add("show");

document
.querySelector(".final-title")
.classList.add("show");

finalScene.classList.add(
"glow"
);

},9500);

/* birthday line */

setTimeout(()=>{

document
.querySelector(".birthday-line")
.classList.add("show");

},12000);

/* white bloom */

setTimeout(()=>{

whiteTransition.classList.add(
"show"
);

},17000);

/* next page */

setTimeout(()=>{

window.location.href =
"page21.html";

},22000);

});

/* =========================
   SPOTLIGHT PARALLAX
========================= */

document.addEventListener(
"mousemove",
(e)=>{

const x =

(e.clientX /
window.innerWidth
- 0.5)

* 50;

const y =

(e.clientY /
window.innerHeight
- 0.5)

* 50;

spotlight.style.transform =

`translate(
calc(-50% + ${x}px),
calc(-50% + ${y}px)
)`;

});

/* =========================
   BUTTON HIDDEN INITIALLY
========================= */

continueBtn.style.opacity =
"0";

continueBtn.style.pointerEvents =
"none";

/* =========================
   MEMORY PHOTOS
========================= */

const memories =
document.querySelectorAll(
".memory"
);

let currentMemory = 0;

setTimeout(()=>{

if(memories.length > 0){

setInterval(()=>{

memories[currentMemory]
.classList.remove(
"active"
);

currentMemory =
(currentMemory + 1)
%
memories.length;

memories[currentMemory]
.classList.add(
"active"
);

},6500);

}

},3000);