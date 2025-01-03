const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("close-button");
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

// Додавання закриття через хрестик
closeButton.addEventListener("click", () => {
    sidebar.classList.remove("active");
});

// Знаходимо всі посилання на сторінці
const links = document.querySelectorAll("a");

// Перебираємо та видаляємо атрибут "target" для кожного посилання
links.forEach(link => {
    link.removeAttribute("target");
});