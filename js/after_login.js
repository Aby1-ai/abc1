document.querySelectorAll(".overlay button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Saved to your Nightscape collection 🚗🔥");
    });
});
function openPin(category) {
    if (category === "f1") {
        window.location.href = "html-f1/f1.html";
    } else if (category === "motogp") {
        window.location.href = "html-motogp/motogp.html";
    } else if (category === "nascar") {
        window.location.href = "html-nascar/nascar.html";
    } else if (category === "leman") {
        window.location.href = "html-leman24h/leman24h.html";
    }
}

function goBack() {
  if (document.referrer !== "") {
    history.back();
  } else {
    window.location.href = "after_login.html";
    // fallback if no history
  }
}
