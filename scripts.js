let shareButton = document.querySelectorAll(".share-btn");
let downloadButton = document.querySelectorAll(".download-btn");
let scrollUpButton = document.querySelector(".scroll-up");
let scrollDownButton = document.querySelector(".scroll-down");
let scrollableContainer = document.querySelector(".new_art-scrollable");

shareButton.forEach(button => button.addEventListener('mousedown', (e) => {
    e.preventDefault();
}));

downloadButton.forEach(button => button.addEventListener('mousedown', (e) => {
    e.preventDefault();
}));

scrollDownButton.addEventListener("click", (e) => {
    scrollableContainer.scrollBy({
        top: 100,
        left: 0,
        behavior: "smooth",
    });
})

scrollUpButton.addEventListener("click", (e) => {

    scrollableContainer.scrollBy({
        top: -100,
        left: 0,
        behavior: "smooth",
    });
})
