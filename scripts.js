let scrollUpButton = document.querySelector(".scroll-up");
let scrollDownButton = document.querySelector(".scroll-down");
let scrollableContainer = document.querySelector(".new_art-scrollable");
let figure = document.querySelectorAll("figure");

figure.forEach(button => button.addEventListener('mousedown', (e) => {
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

