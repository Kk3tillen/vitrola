const bracoVitrola = document.querySelector("#braco-vitrola");
const disco = document.querySelector("#disco");
const song = new Audio("songs/The Moon Song.mp3");


bracoVitrola.addEventListener("click", () => {
    if (bracoVitrola.classList.contains("animate-braco-tocar")) {
        song.pause();
        bracoVitrola.classList.add("animate-braco-parar");
        bracoVitrola.classList.remove("animate-braco-tocar");
    } else {
        bracoVitrola.classList.add("animate-braco-tocar");
        setTimeout(() => {
            song.play();
        }, 2000);
        bracoVitrola.classList.remove("animate-braco-parar");
    }

    setTimeout(() => {
        disco.classList.toggle("animate-spin");
    }, 2000);
});