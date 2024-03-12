const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

document.addEventListener("click", (event) => {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        if (sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
        }
    }
});

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
