document.querySelectorAll(".overlay button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Saved to your Nightscape collection 🚗🔥");
    });
});
function openPin(file, type) {
    localStorage.setItem("pinFile", file);
    localStorage.setItem("pinType", type);
    window.location.href = "pin.html";
}
