const scenes = [

{
    scene:"SCENE 01",
    date:"2 APRIL 2025",
    title:"We met for the first time.",
    image:"april.jpeg",

    lines:[
        "Back then...",
        "we didn’t know",
        "we would become this close."
    ]
},

{
    scene:"SCENE 02",
    date:"AFTER THAT",
    title:"We slowly started talking more.",
    image:"T10.jpeg",

    lines:[
        "small conversations.",
        "random moments.",
        "unexpected comfort."
    ]
},

{
    scene:"SCENE 03",
    date:"SOME MONTHS LATER",
    title:"Life became busy.",
    image:"T9.jpeg",

    lines:[
        "we talked a little less.",
        "but somehow...",
        "the connection stayed."
    ]
},

{
    scene:"SCENE 04",
    date:"1 OCTOBER 2025",
    title:"Dandiya night changed everything.",
    image:"oct.jpeg",

    lines:[
        "we met again.",
        "that night felt different.",
        "everything changed after that."
    ]
},

{
    scene:"SCENE 05",
    date:"AFTER THAT",
    title:"We became best friends.",
    image:"T13.jpeg",

    lines:[
        "favorite person.",
        "comfort human.",
        "one of the best parts of life."
    ]
},

{
    scene:"SCENE 06",
    date:"NOW",
    title:"Life feels softer now.",
    image:"T19.jpeg",

    lines:[
        "because of your presence.",
        "because of your energy.",
        "because you exist.",
        "and somehow everything feels lighter."
    ]
}

];


/* ELEMENTS */

const sceneNumber = document.getElementById("sceneNumber");
const date = document.getElementById("date");
const title = document.getElementById("title");
const text = document.getElementById("text");

const imageScreen = document.getElementById("imageScreen");
const textScreen = document.getElementById("textScreen");

const image = document.getElementById("sceneImage");

const nextBtn = document.getElementById("nextBtn");

const video = document.querySelector(".bg-video");
setInterval(()=>{

    video.style.transform =
    `scale(1.02) translateY(${Math.random()*6}px)`;

},4000);

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

let currentScene = 0;

/* STORE TIMEOUTS */

let allTimeouts = [];


/* CLEAR OLD ANIMATIONS */

function clearAllTimeouts(){

    allTimeouts.forEach(timeout => clearTimeout(timeout));

    allTimeouts = [];
}


/* LOAD SCENE */

function loadScene(index){

    clearAllTimeouts();

    const scene = scenes[index];

    /* RESET */

    text.innerHTML = "";

    textScreen.style.opacity = "1";

    imageScreen.classList.remove("show-image-screen");

    title.classList.remove("show-title");

    nextBtn.classList.remove("show-btn");

    /* FORCE RESTART */

    void title.offsetWidth;

    /* LOAD CONTENT */

    sceneNumber.innerText = scene.scene;

    date.innerText = scene.date;

    title.innerText = scene.title;

    image.src = scene.image;

    /* TITLE */

    allTimeouts.push(

        setTimeout(()=>{

            title.classList.add("show-title");

        },500)

    );

    /* TEXT LINES */

    let delay = 2200;

    scene.lines.forEach((lineText)=>{

        const line = document.createElement("div");

        line.className = "cinema-line";

        line.innerText = lineText;

        text.appendChild(line);

        allTimeouts.push(

            setTimeout(()=>{

                line.classList.add("show-line");

            },delay)

        );

        delay += 1800;
    });

    /* TEXT FADE OUT */

    allTimeouts.push(

        setTimeout(()=>{

            textScreen.style.opacity = "0";

        },8500)

    );

    /* IMAGE SHOW */

    allTimeouts.push(

        setTimeout(()=>{

            imageScreen.classList.add("show-image-screen");

        },9800)

    );

    /* BUTTON SHOW */

    allTimeouts.push(

        setTimeout(()=>{

            nextBtn.classList.add("show-btn");

        },10800)

    );
}


/* NEXT */

nextBtn.addEventListener("click",()=>{

    currentScene++;

    if(currentScene >= scenes.length){

        window.location.href = "page18.html";

        return;
    }

    loadScene(currentScene);
});


/* MUSIC */

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.volume = 0.4;

        music.play();

        musicBtn.innerHTML = "♫ ambience playing";

        playing = true;

    }else{

        music.pause();

        musicBtn.innerHTML = "♫ play music";

        playing = false;
    }
});


/* VIDEO FIX */

video.play().catch(()=>{

    console.log("Autoplay blocked");

});


/* START */

window.onload = ()=>{

    loadScene(currentScene);

};