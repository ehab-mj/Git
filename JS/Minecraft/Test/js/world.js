const worldEl = document.getElementById("world");

function generateWorld() {
    worldEl.innerHTML = "";

    worldEl.style.gridTemplateColumns = `repeat(${mapWidth}, 1fr)`;
    worldEl.style.gridTemplateRows = `repeat(${mapHeight}, 1fr)`;

    worldMap = [];

    for (let y = 0; y < mapHeight; y++) {
        const row = [];

        for (let x = 0; x < mapWidth; x++) {
            let type = "e";

            if (y === 3) type = "g";
            if (y >= 4) type = "d";

            row.push(type);

            const tile = document.createElement("div");
            tile.className = "tile";
            tile.dataset.x = x;
            tile.dataset.y = y;

            applyClass(tile, type);
            worldEl.appendChild(tile);
        }

        worldMap.push(row);
    }
}

function applyClass(tile, type) {
    tile.className = "tile";
    if (type === "e") tile.classList.add("empty");
    if (type === "g") tile.classList.add("grass");
    if (type === "d") tile.classList.add("dirt");
}
