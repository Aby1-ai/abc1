document.querySelectorAll(".overlay button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Saved to your Nightscape collection 🚗🔥");
    });
});
function openPin(category) {
    if (category === "f1") {
        window.location.href = "f1.html";
    } else if (category === "motogp") {
        window.location.href = "motogp.html";
    } else if (category === "nascar") {
        window.location.href = "nascar.html";
    } else if (category === "leman") {
        window.location.href = "leman24h.html";
    }
}

