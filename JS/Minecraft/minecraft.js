// 🌤️ sky
// 🌱 grass
// 🟫 dirt
// 🪨 stone
// 🌳 wood(tree)

// Shovel → breaks grass & dirt
// Axe → breaks wood
// Pickaxe → breaks stone

// 📦 Breaking blocks gives materials
// 🧱 You can build blocks only in sky
// 🧠 All done using DOM only (no canvas)

let currentTool = 'shovel';
let mapSize = 12;
let inventory = { dirt: 0, wood: 0, stone: 0 };

function selectTool(tool) {
    currentTool = tool;
    document.querySelectorAll('#tools button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tool === tool);
    });
}

function createWorld() {
    mapSize = parseInt(document.getElementById('mapSize').value) || 12;
    mapSize = Math.max(5, Math.min(32, mapSize));

    const world = document.getElementById('world');
    world.innerHTML = '';

    const grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.gridTemplateColumns = `repeat(${mapSize}, 64px)`;

    for (let y = 0; y < mapSize; y++) {
        for (let x = 0; x < mapSize; x++) {
            const block = document.createElement('div');
            block.className = 'block grass';
            block.dataset.x = x;
            block.dataset.y = y;

            block.innerHTML = `
                <div class="face top"></div>
                <div class="face front"></div>
                <div class="face right"></div>
            `;

            block.addEventListener('click', () => handleClick(x, y));

            grid.appendChild(block);
        }
    }

    world.appendChild(grid);
}

function handleClick(x, y) {
    console.log(`Clicked: ${currentTool} at (${x},${y})`);
    // Here you can implement your game logic
    // breaking blocks, placing blocks, collecting items...
}

selectTool('shovel'); // default tool
createWorld();        // initial world