const backdrop = document.querySelector(".backdrop");
const menu = document.querySelector(".menu-nav");

const openMenu = () => {
    if (menu.className === "backdrop") {
        backdrop.classList.toggle("backdrop");
    } else {
        backdrop.classList.toggle("active");
    };
    menu.classList.toggle("active");
}

document.querySelector(".menu-btn").addEventListener("click", function(e) {
    e.preventDefault();
    openMenu();
});

document.querySelector(".close").addEventListener("click", function(e) {
    openMenu();
});

document.querySelector(".backdrop").addEventListener("click", function(e) {
    menu.classList.toggle("active");
    backdrop.classList.toggle("active");
});