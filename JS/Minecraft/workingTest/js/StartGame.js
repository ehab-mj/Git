let game = null;

document.getElementById("startBtn").onclick = () => {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    game = new Game();
};