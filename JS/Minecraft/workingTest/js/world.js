// const world = document.getElementById("World")

// const World_Ex = ['grass grass grass grass grass grass grass grass',
//     'dirt dirt dirt dirt dirt dirt dirt dirt',
//     'rock rock rock rock rock rock rock rock',
//     'tree tree dirt dirt dirt tree tree dirt']

// function createWorld() {
//     world.innerHTML = "";
//     let worldMap = []

//     World_Ex.forEach((row, y) => {
//         row.split(' ').forEach((type, x) => {
//             const tile = document.createElement('div');
//             tile.className = `tile ${type}`;
//             tile.dataset.type = type;
//             tile.dataset.x = x;
//             tile.dataset.y = y;

//             world.appendChild(tile);
//             worldMap.push(type);
//         });
//     })
// }

class World {
    constructor(container) {
        this.container = container;
        this.originalMap = [
            "gggggggggg",
            "dddddddddd",
            "ddrrrddddd",
            "ddrrrddwww",
            "dddddddddd"
        ];
        this.map = [];
    }

    generate() {
        try {
            this.container.innerHTML = "";
            this.map = this.originalMap.map(row => row.split(""));

            for (let y = 0; y < this.map.length; y++) {
                for (let x = 0; x < this.map[y].length; x++) {
                    const tile = document.createElement("div");
                    tile.className = "tile";
                    tile.dataset.x = x;
                    tile.dataset.y = y;
                    this.applyClass(tile, this.map[y][x]);
                    this.container.appendChild(tile);
                }
            }
        } catch (err) {
            console.error("World generation error:", err);
        }
    }

    applyClass(tile, type) {
        tile.classList.remove("grass", "dirt", "rock", "wood", "empty");
        if (type === "g") tile.classList.add("grass");
        if (type === "d") tile.classList.add("dirt");
        if (type === "r") tile.classList.add("rock");
        if (type === "w") tile.classList.add("wood");
        if (type === "e") tile.classList.add("empty");
    }

    get(x, y) {
        return this.map[y][x];
    }

    remove(x, y) {
        this.map[y][x] = "e";
    }

    place(x, y, type) {
        this.map[y][x] = type;
    }
}