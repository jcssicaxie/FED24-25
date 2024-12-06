console.log("hellowww");

const menuButton = document.querySelector("header button:nth-of-type(2)");
const deNav = document.querySelector("header nav:nth-of-type(2)");

function toggleMenu() {
    deNav.classList.toggle("toonMenu");
}

menuButton.onclick = toggleMenu;
