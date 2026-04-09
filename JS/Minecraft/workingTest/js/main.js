
const start = document.getElementById("startBtn");
const reset = document.getElementById("resetBtn");
const landing = document.getElementById("landing");
const game = document.getElementById("game");

const inventory = [];

start.addEventListener("onclick", () => {
    landing.classList.add('hidden');
    game.classList.remove('hidden');
})

reset.onclick = () => {
    inventory.length = 0;
    createWorld();
}

createWorld();

