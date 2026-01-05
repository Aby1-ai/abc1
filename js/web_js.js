document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content");


    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translate(-50%, -50%)";
    }, 300);
});

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 0.6s ease";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }, 1200); // loader stays briefly for effect
});

