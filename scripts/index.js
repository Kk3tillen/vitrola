const bracoVitrola = document.querySelector("#braco-vitrola");
const disco = document.querySelector("#disco");

const cartasLinks = {
    "fran": "public/songs/Carta de Francielen.mp4",
    "kezia": "public/songs/Carta de Kézia.mp4",
    "paola": "public/songs/Carta de Maria Eduarda Paola.mp4",
    "duda": "public/songs/Carta de Maria Eduarda Cardoso.mp4"
}
let currentAudio = new Audio(cartasLinks["fran"]);

function playCarta(name){
    currentAudio = new Audio(cartasLinks[name]);
}

bracoVitrola.addEventListener("click", () => {
  playVitrola(currentAudio);
});

function playVitrola(audio){
    if (bracoVitrola.classList.contains("animate-braco-tocar")) {
        audio.pause();
        bracoVitrola.classList.add("animate-braco-parar");
        bracoVitrola.classList.remove("animate-braco-tocar");
    } else {
        bracoVitrola.classList.add("animate-braco-tocar");
        setTimeout(() => {
            audio.play();
        }, 2000);
        bracoVitrola.classList.remove("animate-braco-parar");
    }

    setTimeout(() => {
        disco.classList.toggle("animate-spin");
    }, 2000);
}