document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero-content");

    heroText.style.opacity = "0";
    heroText.style.transform = "translate(-50%, -40%)";

    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translate(-50%, -50%)";
    }, 300);
});
