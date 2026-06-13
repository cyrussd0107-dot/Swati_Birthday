const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index){

    scenes.forEach(scene=>{
        scene.classList.remove("active");
    });

    scenes[index].classList.add("active");
}


/* SCENE TIMELINE */

setTimeout(()=>{
    currentScene = 1;
    showScene(currentScene);
}, 5000);

setTimeout(()=>{
    currentScene = 2;
    showScene(currentScene);
}, 10000);

setTimeout(()=>{
    currentScene = 3;
    showScene(currentScene);
}, 15000);

setTimeout(()=>{
    currentScene = 4;
    showScene(currentScene);
}, 20000);


/* PHOTO SLIDESHOW */

const photos = document.querySelectorAll(".photo");

let currentPhoto = 0;

function changePhoto(){

    photos.forEach(photo=>{
        photo.classList.remove("active");
    });

    photos[currentPhoto].classList.add("active");

    currentPhoto++;

    if(currentPhoto >= photos.length){
        currentPhoto = 0;
    }
}


/* start slideshow after scene 5 */

setTimeout(()=>{

    changePhoto();

    setInterval(changePhoto, 2000);

}, 21000);


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

    music.volume = 0;

    music.play();

    let fade = setInterval(() => {

        if(music.volume < 0.35){

            music.volume += 0.02;

        }else{

            clearInterval(fade);

        }

    }, 200);

    musicBtn.innerHTML = "♫ Playing";

});
