// =========================
// ELEMENTS
// =========================

const songCards =
document.querySelectorAll(".song-card");

const audioPlayer =
document.getElementById("audioPlayer");

const lyricsText =
document.getElementById("lyricsText");


// =========================
// TYPEWRITER EFFECT
// =========================

function typeWriter(text){

    lyricsText.innerHTML = "";

    let index = 0;

    const interval = setInterval(() => {

        lyricsText.innerHTML += text.charAt(index);

        index++;

        if(index >= text.length){

            clearInterval(interval);
        }

    }, 28);
}


// =========================
// SONG CLICK
// =========================

songCards.forEach(card => {

    card.addEventListener("click", () => {

        // REMOVE ACTIVE
        songCards.forEach(c => {
            c.classList.remove("active-song");
        });

        // ADD ACTIVE
        card.classList.add("active-song");

        // AUDIO
        const audioSrc =
        card.dataset.audio;

        audioPlayer.src = audioSrc;

        audioPlayer.play();

        // LYRICS
        const lyric =
        card.dataset.lyric;

        typeWriter(lyric);

    });

});


// =========================
// GSAP ANIMATIONS
// =========================

gsap.from(".left-section",{
    opacity:0,
    x:-80,
    duration:1.2
});

gsap.from(".center-section",{
    opacity:0,
    y:50,
    duration:1.4,
    delay:.2
});

gsap.from(".song-card",{
    opacity:0,
    x:60,
    stagger:.2,
    duration:1
});

gsap.from(".lyrics-box",{
    opacity:0,
    y:30,
    delay:.8,
    duration:1
});


// =========================
// PARALLAX
// =========================

document.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth / 2 - e.pageX) / 40;

    const y =
    (window.innerHeight / 2 - e.pageY) / 40;

    gsap.to(".portrait-wrap",{
        x:x,
        y:y,
        duration:1.2
    });

});