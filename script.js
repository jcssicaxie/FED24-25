console.log("hellowww");

const menuButton = document.querySelector("");
const deNav = document.querySelector("");

function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}

menuButton.onclick = toggleMenu;