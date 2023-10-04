// Variables

const scrollUpButton = document.querySelector(".scroll-up");
const scrollDownButton = document.querySelector(".scroll-down");
const scrollableContainer = document.querySelector(".new_art-scrollable");
const figure = document.querySelectorAll("figure");
const searchBar = document.querySelector('input[type="search"]');
const clearSearchBar = document.querySelector(".searchbar_clear-icon");
const searchBarIcon = document.querySelector('.searchbar-icon');
const collectionContainer = document.querySelector('.collection-container');
const newArtContainer = document.querySelector('.new_art-container');

// Add box-shadow effect to fixed top-header section whenever the user scrolls down to increase visibility

window.addEventListener('scroll', (e) => {

    let topContent = document.querySelector('.top-content');

    if (topContent.offsetTop > 0) {
        topContent.style.boxShadow = "0px 7px 20px -20px var(--accent-color)";
    } else {
        topContent.style.boxShadow = "none";
    }

})

// Show loading animation until the webpage is loaded 

window.addEventListener('DOMContentLoaded', (e) => {

    let sidebarLogo = document.querySelector(".logo");
    let content = document.querySelector(".content");
    let loadingAnimation = document.querySelector(".loading-animation");

    setInterval(show, 1500);

    function show() {
        sidebarLogo.classList.add("show-hero");
        sidebarLogo.firstElementChild.classList.add("show-title");
        loadingAnimation.classList.remove("show");
        content.classList.add("show");
    }
})

// Add will-change property when the mouse enters the container and disable it when the mouse leaves the container
// to increase performance

collectionContainer.addEventListener('mouseover', addWillChange);
newArtContainer.addEventListener('mouseover', addWillChange);
collectionContainer.addEventListener('mouseout', removeWillChange);
newArtContainer.addEventListener('mouseout', removeWillChange);

function addWillChange(e) {

    if (this.classList.contains("new_art-container")) {
        this.firstElementChild.nextElementSibling.style.willChange = 'scroll-position';
    } else {
        this.style.willChange = 'scroll-position';
    }

}

function removeWillChange(e) {
    if (this.classList.contains("new_art-container")) {
        this.firstElementChild.nextElementSibling.style.willChange = 'auto';
    } else {
        this.style.willChange = 'auto';
    }
}

// Show custom search-bar cancel button on user input

searchBarIcon.addEventListener("click", (e) => {
    searchBar.focus();
})

searchBar.addEventListener("input", (e) => {
    searchBar.value.length > 0 ? clearSearchBar.style.visibility = 'visible'
        : clearSearchBar.style.visibility = 'hidden';

})

// Clear search-bar input value on clear button click

clearSearchBar.addEventListener("click", (e) => {
    searchBar.value = "";
    searchBar.focus();
    clearSearchBar.style.visibility = 'hidden';
})

// Prevent default behavior of "Download" and "Share" buttons within the painting description, as they were interfering
// with the keyboard focus behavior by locking their containers in the "focus" on click

figure.forEach(button => button.addEventListener('mousedown', (e) => {
    e.preventDefault();
}));

// Add on-click scroll functionality for the custom scroll buttons within the New Art section

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

