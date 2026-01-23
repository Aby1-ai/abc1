// Load clicked image
const params = new URLSearchParams(window.location.search);
const src = params.get("src");

const container = document.getElementById("pinMedia");

// Load image or video
if (src) {
    if (src.endsWith(".mp4")) {
        container.innerHTML = `
            <video src="../${src}"
                   autoplay
                   loop
                   muted
                   playsinline></video>
        `;
    } else {
        container.innerHTML = `
            <img src="../${src}">
        `;
    }
}

// Add comment
function addComment() {
    const input = document.getElementById("commentInput");
    if (!input || !input.value.trim()) return;

    const div = document.createElement("div");
    div.innerHTML = `
        ${input.value}
        <span onclick="this.parentElement.remove()"> ❌</span>
    `;
    document.getElementById("commentList").appendChild(div);
    input.value = "";
}

// Like pin
let liked = false;
function likePin() {
    liked = !liked;
    alert(liked ? "Liked ❤️" : "Unliked 💔");
}

// Save pin
function savePin() {
    alert("Saved to collection 📌");
}

// Share pin
function sharePin() {
    alert("Link copied 🔗");
}

function goBack() {
  if (document.referrer !== "") {
    history.back();
  } else {
    window.location.href = "after_login.html";
    // fallback if no history
  }
}
