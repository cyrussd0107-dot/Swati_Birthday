const startBtn = document.getElementById("startBtn");
const startScreen = document.querySelector(".start-final");
const music = document.getElementById("finalMusic");

const introWhite = document.querySelector(".intro-white");
const introText = document.querySelector(".intro-white p");

const countdown = document.querySelector(".countdown");
const countNumber = document.getElementById("countNumber");

const memories = document.querySelectorAll(".memory");
const birthdayReveal = document.querySelector(".birthday-reveal");
const videoFrame = document.querySelector(".video-frame");
const wishes = document.querySelectorAll(".wish-box p");
const wishBox = document.querySelector(".wish-box");

const secretEnding = document.querySelector(".secret-ending");
const secretLines = document.querySelectorAll(".secret-ending p");
const finalLove = document.querySelector(".secret-ending h3");
const finalMessage = document.querySelector(".secret-ending h4");


startBtn.addEventListener("click",()=>{

music.volume = 0.45;
music.play().catch(()=>{});

startScreen.classList.add("hide");

startTimeline();

});

function startTimeline(){

setTimeout(()=>{
introText.classList.add("show");
},1000);

setTimeout(()=>{
introText.classList.remove("show");
},4500);

setTimeout(()=>{
introWhite.classList.add("hide");
},6500);

setTimeout(()=>{
countdown.classList.add("show");
showCount("3");
},8000);

setTimeout(()=>{
showCount("2");
},11500);

setTimeout(()=>{
showCount("1");
},15000);

setTimeout(()=>{
countdown.style.display = "none";
showMemories();
},18500);

setTimeout(()=>{
birthdayReveal.classList.add("show");
particleBurst();
},22500);

setTimeout(()=>{
birthdayReveal.style.opacity = "0";
videoFrame.classList.add("show");
},28500);

setTimeout(()=>{
showWishes();
},33000);

setTimeout(()=>{
startSecretEnding();
},50000);

}

function showCount(num){

countNumber.textContent = num;

countNumber.classList.remove("count-animate");

void countNumber.offsetWidth;

countNumber.classList.add("count-animate");

}

function showMemories(){

memories.forEach((photo,index)=>{
setTimeout(()=>{
photo.classList.add("show");
},index * 350);
});

}

function showWishes(){

wishes.forEach((line,index)=>{

setTimeout(()=>{

wishes.forEach(item=>item.classList.remove("show"));

line.classList.add("show");

},index * 3500);

});

}

function startSecretEnding(){

birthdayReveal.style.opacity = "0";
videoFrame.style.opacity = "0";
wishBox.style.opacity = "0";

memories.forEach(photo=>{
photo.style.opacity = "0";
});

setTimeout(()=>{

secretEnding.classList.add("show");

},1500);

/* SECRET LINES */

secretLines.forEach((line,index)=>{

setTimeout(()=>{

secretLines.forEach(item=>{
item.classList.remove("show");
item.classList.add("hide");
});

line.classList.remove("hide");
line.classList.add("show");

},index * 3200);

});

/* MAIN LOVE LINE */

setTimeout(()=>{

secretLines.forEach(item=>{
item.classList.remove("show");
item.classList.add("hide");
});

finalLove.classList.add("show");

},24000);

/* BECAUSE ALL OF IT */

setTimeout(()=>{

finalLove.classList.remove("show");
finalMessage.classList.add("show");

},33000);

/* HIDE FINAL MESSAGE */

setTimeout(()=>{

finalMessage.classList.remove("show");

},40500);

/* END CREDITS */

const creditLines =
document.querySelectorAll(".end-credits span");

setTimeout(()=>{

creditLines.forEach((line,index)=>{

setTimeout(()=>{

creditLines.forEach(item=>{
item.classList.remove("show");
item.classList.add("hide");
});

line.classList.remove("hide");
line.classList.add("show");

},index * 3600);

});

},43000);

/* FINAL FADE */

setTimeout(()=>{

document.body.style.transition = "4s ease";
document.body.style.opacity = "0";

music.volume = 0.05;

},79000);

}

function particleBurst(){

for(let i=0;i<90;i++){

const star = document.createElement("div");

star.className = "burst";

star.style.left = Math.random() * 100 + "vw";
star.style.top = Math.random() * 100 + "vh";
star.style.animationDuration = (2 + Math.random() * 4) + "s";

document.body.appendChild(star);

setTimeout(()=>{
star.remove();
},5000);

}

}

