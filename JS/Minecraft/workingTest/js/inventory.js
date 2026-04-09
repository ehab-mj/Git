// const inventoryUI = document.getElementById("material")

// const inventory = [];
// let selectedInventory = null;

// function addInventory(type) {
//     inventory.push(type);
//     renderInventory();
// }

// function renderInventory() {
//     inventoryUI.innerHTML = "";

//     inventory.forEach((type, i) => {
//         const item = document.createElement("div");
//         item.className = `tile ${type}`;
//         item.addEventListener("click", () => {
//             selectedInventory = { type, i };
//         });
//         inventoryUI.appendChild(item);
//     });
// }

// function remove(i) {
//     inventory.splice(i, 1);
//     renderInventory();
// }

class Inventory {
    constructor(container) {
        this.container = container;
        this.items = [];
        this.selectedIndex = null;
    }

    add(type) {
        try {
            this.items.push(type);
            this.render();
        } catch (e) {
            console.error("Inventory add error:", e);
        }
    }

    remove(index) {
        try {
            return this.items.splice(index, 1)[0];
        } catch (e) {
            console.error("Inventory remove error:", e);
        }
    }

    render() {
        this.container.innerHTML = "";

        this.items.forEach((type, index) => {
            const item = document.createElement("div");
            item.className = "inventory-item";

            if (type === "d") item.classList.add("dirt");
            if (type === "r") item.classList.add("rock");
            if (type === "w") item.classList.add("wood");

            item.onclick = () => this.selectedIndex = index;

            this.container.appendChild(item);
        });
    }

    clear() {
        this.items = [];
        this.selectedIndex = null;
        this.render();
    }
}