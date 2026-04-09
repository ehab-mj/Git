class Game {
    constructor() {
        this.selectedTool = null;
        this.world = new World(document.getElementById("world"));
        this.inventory = new Inventory(document.getElementById("inventory"));
        this.init();
    }

    init() {
        try {
            this.world.generate();
            this.bindEvents();
        } catch (e) {
            console.error("Game init error:", e);
        }
    }

    bindEvents() {
        document.getElementById("tools").onclick = e => {
            if (!e.target.dataset.tool) return;
            this.selectedTool = e.target.dataset.tool;

            document.querySelectorAll("#tools button")
                .forEach(b => b.classList.remove("selected"));

            e.target.classList.add("selected");
        };

        document.getElementById("world").onclick = e => {
            if (!e.target.classList.contains("tile")) return;

            try {
                const x = +e.target.dataset.x;
                const y = +e.target.dataset.y;
                const type = this.world.get(x, y);

                if (type === "e" && this.inventory.selectedIndex !== null) {
                    const placed = this.inventory.remove(this.inventory.selectedIndex);
                    this.world.place(x, y, placed);
                    this.world.generate();
                    this.inventory.render();
                    return;
                }

                if (this.canRemove(type)) {
                    this.world.remove(x, y);
                    this.inventory.add(type);
                    this.world.generate();
                }
            } catch (err) {
                console.error("Tile click error:", err);
            }
        };

        document.getElementById("resetBtn").onclick = () => {
            this.inventory.clear();
            this.world.generate();
        };
    }

    canRemove(type) {
        return (
            (this.selectedTool === "axe" && type === "w") ||
            (this.selectedTool === "pickaxe" && type === "r") ||
            (this.selectedTool === "shovel" && type === "d")
        );
    }
}