const grass = document.getElementById("Grass");
const dirt = document.getElementById("Dirt");
const rock = document.getElementById("Rock");
const wood = document.getElementById("Wood");

const axe = document.getElementById("Axe")
const pickaxe = document.getElementById("Pickaxe")
const shovel = document.getElementById("Shovel")

const BlocksTypes = {
    grass: "grass",
    dirt: 'dirt',
    rock: 'rock',
    wood: 'wood',
}

const ToolsTypes = {
    axe: "wood",
    pickaxe: "rock",
    shovel: "dirt"
}

const World = ['grass grass grass grass grass grass grass grass',
    'dirt dirt dirt dirt dirt dirt dirt dirt',
    'rock rock rock rock rock rock rock rock',
    'tree tree dirt dirt dirt tree tree dirt']