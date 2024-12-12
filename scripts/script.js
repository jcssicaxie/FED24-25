console.log("hellowww");

const menuButton = document.querySelector("header button:nth-of-type(2)");
const closeButton = document.querySelector("header nav:nth-of-type(2) button")

const deNav = document.querySelector("header nav:nth-of-type(2)");

function addMenu() {
    deNav.classList.add("toonMenu");
}

function closeMenu() {
    deNav.classList.remove("toonMenu");
}

menuButton.onclick = addMenu;
closeButton.onclick = closeMenu;

const languageButton = document.querySelector("header button:nth-of-type(1)");
const deLang = document.querySelector("header nav:nth-of-type(1)");

function addLang() {
    deLang.classList.add("toonLang");
}

// source: OpenAI ChatGPT, prompt: when i click on the rest of the page i want the header nav to disappear (close)
document.addEventListener("click", closeLang);

function closeLang(event) {
    if (!languageButton.contains(event.target) && !deLang.contains(event.target)) {
        deLang.classList.remove("toonLang");
       
        document.removeEventListener("click", closeLang);
    }
}

languageButton.onclick = addLang;

