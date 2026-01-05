function addComment() {
    const input = document.getElementById("commentInput");
    if (!input || !input.value.trim()) return;

    const div = document.createElement("div");
    div.style.marginBottom = "8px";

    div.innerHTML = `
        ${input.value}
        <span style="cursor:pointer; margin-left:8px;" 
              onclick="this.parentElement.remove()">❌</span>
    `;

    document.getElementById("commentList").appendChild(div);
    input.value = "";
}

let liked = false;

function likePin() {
    liked = !liked;
    alert(liked ? "Liked ❤️" : "Unliked 💔");
}

function savePin() {
    alert("Saved to collection 📌");
}

function sharePin() {
    alert("Link copied 🔗");
}