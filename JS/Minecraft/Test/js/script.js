// Constants
const WORLD_WIDTH = 10;
const WORLD_HEIGHT = 10;
const TILE_TYPES = ['grass', 'dirt', 'rock', 'tree'];

// Tool rules
const TOOL_RULES = {
    axe: ['tree'],
    pickaxe: ['rock'],
    shovel: ['dirt', 'grass']  // Assuming grass can be shoveled
};

// Data storage
let originalWorldMap = [];
let worldMap = [];
let inventory = [];
let selectedTool = null;
let selectedItem = null;

// DOM elements
const landing = document.getElementById('landing');
const game = document.getElementById('game');
const world = document.getElementById('world');
const tools = document.getElementById('tools');
const inventoryDiv = document.getElementById('inventory');
const resetBtn = document.getElementById('reset');
const startBtn = document.getElementById('start');

// Functions
function generateWorld() {
    const map = [];
    for (let y = 0; y < WORLD_HEIGHT; y++) {
        const row = [];
        for (let x = 0; x < WORLD_WIDTH; x++) {
            // Simple generation: top grass, then dirt, rocks, trees randomly
            if (y === 0) {
                row.push('grass');
            } else if (y < 3) {
                row.push(Math.random() > 0.8 ? 'tree' : 'dirt');
            } else if (y < 6) {
                row.push(Math.random() > 0.7 ? 'rock' : 'dirt');
            } else {
                row.push('rock');
            }
        }
        map.push(row);
    }
    return map;
}

function renderWorld(map) {
    world.innerHTML = '';
    for (let y = 0; y < WORLD_HEIGHT; y++) {
        for (let x = 0; x < WORLD_WIDTH; x++) {
            const type = map[y][x] || 'air';
            const tile = document.createElement('div');
            tile.classList.add('tile', type);
            tile.dataset.x = x;
            tile.dataset.y = y;
            tile.addEventListener('click', handleTileClick);
            world.appendChild(tile);
        }
    }
}

function renderInventory() {
    inventoryDiv.innerHTML = '';
    inventory.forEach((type, index) => {
        const item = document.createElement('div');
        item.classList.add('inventory-item', type);
        item.dataset.index = index;
        item.addEventListener('click', handleInventoryClick);
        inventoryDiv.appendChild(item);
    });
}

function handleToolClick(e) {
    const tool = e.target.dataset.tool;
    if (tool) {
        selectedTool = tool;
        selectedItem = null;
        // Update UI
        document.querySelectorAll('.tool').forEach(t => t.classList.remove('selected'));
        e.target.classList.add('selected');
        document.querySelectorAll('.inventory-item').forEach(i => i.classList.remove('selected'));
    }
}

function handleInventoryClick(e) {
    const index = parseInt(e.target.dataset.index);
    selectedItem = inventory[index];
    selectedTool = null;
    // Update UI
    document.querySelectorAll('.inventory-item').forEach(i => i.classList.remove('selected'));
    e.target.classList.add('selected');
    document.querySelectorAll('.tool').forEach(t => t.classList.remove('selected'));
}

function handleTileClick(e) {
    const x = parseInt(e.target.dataset.x);
    const y = parseInt(e.target.dataset.y);
    const type = worldMap[y][x];

    if (selectedTool) {
        // Remove mode
        if (type && TOOL_RULES[selectedTool].includes(type)) {
            worldMap[y][x] = null;
            inventory.push(type);
            renderWorld(worldMap);
            renderInventory();
        }
    } else if (selectedItem) {
        // Place mode
        if (!type) {  // Only place on air
            worldMap[y][x] = selectedItem;
            // Remove from inventory
            const index = inventory.indexOf(selectedItem);
            if (index > -1) {
                inventory.splice(index, 1);
            }
            selectedItem = null;
            renderWorld(worldMap);
            renderInventory();
            // Clear selected UI
            document.querySelectorAll('.inventory-item').forEach(i => i.classList.remove('selected'));
        }
    }
}

function resetGame() {
    worldMap = originalWorldMap.map(row => row.slice());  // Deep copy
    inventory = [];
    selectedTool = null;
    selectedItem = null;
    renderWorld(worldMap);
    renderInventory();
    document.querySelectorAll('.tool').forEach(t => t.classList.remove('selected'));
    document.querySelectorAll('.inventory-item').forEach(i => i.classList.remove('selected'));
}

function startGame() {
    landing.style.display = 'none';
    game.style.display = 'block';
    originalWorldMap = generateWorld();
    resetGame();
}

// Event listeners
startBtn.addEventListener('click', startGame);
tools.addEventListener('click', handleToolClick);
resetBtn.addEventListener('click', resetGame);

// Initial setup (but game hidden)