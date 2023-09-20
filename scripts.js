let shareButton = document.querySelectorAll(".share-btn");
let downloadButton = document.querySelectorAll(".download-btn");

shareButton.forEach(button => button.addEventListener('mousedown', (e) => {
    e.preventDefault();
}));

downloadButton.forEach(button => button.addEventListener('mousedown', (e) => {
    e.preventDefault();
}));