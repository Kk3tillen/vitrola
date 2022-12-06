const bracoVitrola = document.querySelector("#braco-vitrola");
const disco = document.querySelector("#disco");
const ANIMATION_BRACO_VITROLA_MS = 1000;

const cartasLinks = {
    "fran": "public/songs/CartaFrancielen.m4a",
    "kezia": "public/songs/CartaKezia.m4a",
    "paola": "public/songs/CartaEduardaPaola.m4a",
    "duda": "public/songs/CartaMariaEduardaCardoso.m4a",
    "clara": "public/songs/CartaClara.m4a",
    "jerison": "public/songs/CartaJerison.m4a",
    "fernanda": "public/songs/CartaFernanda.m4a",
    "evilin": "public/songs/CartaEvilin.m4a",
    "vinicius": "public/songs/CartaVinicius.m4a",
    "emilly": "public/songs/CartaEmilly.mp3",
    "alex": "public/songs/CartaAlex.m4a",
    "milena": "public/songs/CartaMilene.m4a",
    "bruno": "public/songs/CartaBruno.m4a"
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