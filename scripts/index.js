const bracoVitrola = document.querySelector("#braco-vitrola");
const disco = document.querySelector("#disco");


bracoVitrola.addEventListener("click", () => {
    if (bracoVitrola.classList.contains("animate-braco-tocar")) {
        bracoVitrola.classList.add("animate-braco-parar");
        bracoVitrola.classList.remove("animate-braco-tocar");
    } else {
        bracoVitrola.classList.add("animate-braco-tocar");
        bracoVitrola.classList.remove("animate-braco-parar");
    }

    disco.classList.toggle("animate-spin");
})