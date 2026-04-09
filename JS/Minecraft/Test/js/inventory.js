const inventoryEl = document.getElementById("inventory");
const modeEl = document.getElementById("mode");

function renderInventory() {
    inventoryEl.innerHTML = "";

    for (let type in inventory) {
        if (inventory[type] > 0) {
            const item = document.createElement("div");
            item.className = "inventory-item";
            item.textContent =
                (type === "d" ? "Dirt" : "Grass") + " x" + inventory[type];

            item.onclick = () => {
                selectedBuildType = type;
                selectedTool = null;
                modeEl.textContent = "Mode: Build (" + item.textContent + ")";
            };

            inventoryEl.appendChild(item);
        }
    }
}
