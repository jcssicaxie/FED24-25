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

// source: OpenAI ChatGPT, prompt: i want to code a carousel with two arrows that displays different images
const images = [
    "images/item1.png",
    "images/item1brown.png",
    "images/item1red.png",
];

let currentIndex = 0;

const jacketImage = document.querySelector("main img[alt='Hell Cowboy Jacket']");
const prevBtn = document.querySelector("main button:nth-of-type(1)")
const nextBtn = document.querySelector("main button:nth-of-type(2)")

function updateImage() {
    jacketImage.src = images[currentIndex];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

// source: OpenAI ChatGPT, prompt: when i click on 'size guide' i want the table to appear
const sizeGuideBtn = document.querySelector("section button:nth-of-type(2)");
const sizeGuideTable = document.querySelector("table");

sizeGuideBtn.addEventListener("click", () => {
    if (sizeGuideTable.style.display === "none") {
        sizeGuideTable.style.display = "table";
    } else {
        sizeGuideTable.style.display = "none";
    }
});