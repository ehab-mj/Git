let map_size = Number(prompt("Map size? (example: 5)"));
let start_Position = Number(prompt("start position?"));
let Move_Num = Number(prompt("how many moves?"));

let move_History = []
let treasure_Num = Math.floor(Math.random() * map_size)

function treasure() {
    // every time player in treasure pos
    while (treasure_Num === start_Position) {
        // we create a new random number
        treasure_Num = Math.floor(Math.random() * map_size)
    }
}

function playerMove() {
    let diraction = prompt("Move Left or right?");
    let currentPosition = start_Position;

    if (diraction === "left") {
        currentPosition--;// moving left
    } else if (diraction === "right") {
        currentPosition++; // moving right
    } else {
        console.log("invalid diraction");
    }

    Move_Num--; // ننقص حركة واحدة
    move_History.push(diraction);

    console.log("Player position" + " " + currentPosition);
}

function startgame() {
    while (Move_Num > 0) { // طالما عندنا حركات
        playerMove();// ننفذ حركة واحدة

        // Checking
        if (start_Position === treasure_Num) {
            console.log("Treasure found");
        }
    }

    // in End Print:
    console.log("You Lost");
}

treasure()
startgame()


console.log("Treasure was at", treasure_Num);
console.log("Moves history:", move_History);