const timer = document.getElementById("timer");

const progress =
document.getElementById("progress");

const fireworkScreen =
document.getElementById("fireworkScreen");

let totalSeconds = 180;

const countdown = setInterval(()=>{

    totalSeconds--;

    const minutes =
    Math.floor(totalSeconds / 60);

    const seconds =
    totalSeconds % 60;

    timer.innerHTML =
    `${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`;

    const done =
    ((180 - totalSeconds) / 180) * 100;

    progress.style.width =
    done + "%";

    if(totalSeconds <= 0){

        clearInterval(countdown);

        launchMagic();
    }

},1000);


/* MAGIC PART */

function launchMagic(){

    fireworkScreen.classList.add("show-firework");

    setTimeout(()=>{

        window.location.href =
        "story.html";

    },9000);
}

/* MUSIC BUTTON */

const music =
document.getElementById("music");

const musicBtn =
document.getElementById("musicBtn");

let playing = true;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML =
        "♫ play music";

        playing = false;

    }else{

        music.play();

        musicBtn.innerHTML =
        "♫ ambience";

        playing = true;
    }
});