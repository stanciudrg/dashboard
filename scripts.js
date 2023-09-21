let scrollUpButton = document.querySelector(".scroll-up");
let scrollDownButton = document.querySelector(".scroll-down");
let scrollableContainer = document.querySelector(".new_art-scrollable");
let figure = document.querySelectorAll("figure");
let searchBar = document.querySelector('input[type="search"]');
let clearSearchBar = document.querySelector(".searchbar_clear-icon");
let searchBarIcon = document.querySelector('.searchbar-icon');

window.addEventListener('load', (e) => {

    let sidebarLogo = document.querySelector(".logo");
    let content = document.querySelector(".content");
    let loadingAnimation = document.querySelector(".loading-animation");

    setInterval(show, 1500);

    function show() {
        sidebarLogo.firstElementChild.textContent = "Dashboard";
        sidebarLogo.classList.add("show-logo");
        loadingAnimation.classList.remove("show");
        content.classList.add("show");
    }
})

searchBarIcon.addEventListener("click", (e) => {
    searchBar.focus();
})

searchBar.addEventListener("input", (e) => {
    searchBar.value.length > 0 ? clearSearchBar.style.visibility = 'visible'
        : clearSearchBar.style.visibility = 'hidden';

})

clearSearchBar.addEventListener("click", (e) => {
    searchBar.value = "";
    searchBar.focus();
    clearSearchBar.style.visibility = 'hidden';
})

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

