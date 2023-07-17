const openMenu = () => {
    document.querySelector(".backdrop").className = "backdrop active";
    document.querySelector(".menu-nav").classList.add("active");
}

// const closeMenu = () => {
//     document.querySelector(".backdrop").className = "backdrop";
//     document.querySelector(".menu-nav").className = "";
// }

document.getElementById("menuBtn").addEventListener("click", function(e) {
    console.log("Clicked!");
    e.preventDefault();
    openMenu();
});