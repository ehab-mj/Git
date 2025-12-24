let map_size = Number(prompt("Enter the map size"));
let position = Number(prompt("your start position in map?"));
let player_moves = Number(prompt("how many moves?"));

let treasure_Loc = Math.floor(Math.random() * map_size);
let Move_History = [];

function treasure() {
    while (position === treasure_Loc) {
        treasure_Loc = Math.floor(Math.random() * map_size);
    }
}

function playerMoves() {
    let dir = prompt("Move Left or Right");

    if (dir === "Left") {
        position--;
    } else if (dir === "right") {
        position++;
    } else {
        console.log("Invalid dir");
    }

    player_moves--;
    Move_History.push(dir);

    console.log("Player position" + position);
}

function start() {
    while (player_moves > 0) {
        playerMoves();

        if (position === treasure_Loc) {
            console.log("Treasure Found");
            return Move_History;
        }
    }
    console.log("You Lost");
}

treasure();
start();

console.log("Treause was at", treasure_Loc);
console.log("Moves History:", Move_History);


