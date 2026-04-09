let selectedTool = null;

function Tools() {
    document.querySelectorAll(".Tools button")
    .forEach(btn => {
        btn.addEventListener("click", () => {
            selectedTool = btn.dataset.tool;
        });
    });
}