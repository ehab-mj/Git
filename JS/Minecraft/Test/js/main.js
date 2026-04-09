document.getElementById("startBtn").onclick = () => {
    mapWidth = +document.getElementById("sizeInput").value || 20;

    document.getElementById("landing").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    generateWorld();
    bindEvents();
    renderInventory();
};
