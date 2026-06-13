// FLOATING PETALS
for(let i = 0; i < 25; i++){

  const petal = document.createElement("div");

  petal.classList.add("petal");

  petal.style.left = Math.random() * 100 + "vw";

  petal.style.animationDuration =
    (5 + Math.random() * 6) + "s";

  petal.style.opacity = Math.random();

  petal.style.transform =
    `scale(${Math.random() + 0.5})`;

  document.body.appendChild(petal);
}


// SPARKLES
for(let i = 0; i < 35; i++){

  const sparkle = document.createElement("div");

  sparkle.classList.add("sparkle");

  sparkle.style.left =
    Math.random() * 100 + "vw";

  sparkle.style.top =
    Math.random() * 100 + "vh";

  sparkle.style.animationDuration =
    (1 + Math.random() * 3) + "s";

  document.body.appendChild(sparkle);
}


// LOVE BUTTON EFFECT
function showLove(){

  for(let i = 0; i < 40; i++){

    let heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.top =
      Math.random() * 100 + "vh";

    heart.style.fontSize =
      (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }

  alert("You are special and loved forever 💕");
}


// ===== BACKGROUND MUSIC =====

const music = new Audio("music.mp3");

music.loop = true;

const musicBtn = document.querySelector(".music-btn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

  if(!isPlaying){

    music.play();

    musicBtn.innerHTML = "⏸ Pause Music";

    isPlaying = true;

  }else{

    music.pause();

    musicBtn.innerHTML = "🎵 Play Music";

    isPlaying = false;
  }

});