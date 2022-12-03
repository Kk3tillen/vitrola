const bracoVitrola = document.querySelector("#braco-vitrola");
const disco = document.querySelector("#disco");
const ANIMATION_BRACO_VITROLA_MS = 1000;

const cartasLinks = {
    "fran": "public/songs/Carta de Francielen.mp4",
    "kezia": "public/songs/Carta de Kézia.mp4",
    "paola": "public/songs/Carta de Maria Eduarda Paola.mp4",
    "duda": "public/songs/Carta de Maria Eduarda Cardoso.mp4"
}
let currentAudio = new Audio(cartasLinks["fran"]);

function playCarta(name){
    if (!currentAudio.paused) {
        currentAudio.pause();
        encolherBracoVitrola();
        setTimeout(() => {
            currentAudio = new Audio(cartasLinks[name]);
            playVitrola(currentAudio);
        }, ANIMATION_BRACO_VITROLA_MS);
    } else {
        currentAudio = new Audio(cartasLinks[name]);
        playVitrola(currentAudio);
    }

}

bracoVitrola.addEventListener("click", () => {
  playVitrola(currentAudio);
});

function encolherBracoVitrola() {
    bracoVitrola.classList.add("animate-braco-parar");
    bracoVitrola.classList.remove("animate-braco-tocar");
}

function playVitrola(audio){
    if (bracoVitrola.classList.contains("animate-braco-tocar")) {
        audio.pause();
        encolherBracoVitrola();
    } else {
        bracoVitrola.classList.add("animate-braco-tocar");
        setTimeout(() => {
            audio.play();
        }, ANIMATION_BRACO_VITROLA_MS);
        bracoVitrola.classList.remove("animate-braco-parar");
    }

    setTimeout(() => {
        disco.classList.toggle("animate-spin");
    }, ANIMATION_BRACO_VITROLA_MS);
}