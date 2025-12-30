const file = localStorage.getItem("pinFile");
const type = localStorage.getItem("pinType");

const pinMedia = document.getElementById("pinMedia");

if (type === "image") {
    pinMedia.innerHTML = `<img src="media/${file}">`;
} else {
    pinMedia.innerHTML = `<video src="media/${file}" controls autoplay></video>`;
}

// COMMENTS
function addComment() {
    const input = document.getElementById("commentInput");
    if (!input.value) return;

    const div = document.createElement("div");
    div.innerHTML = `
        ${input.value}
        <span onclick="this.parentElement.remove()"> ❌</span>
    `;
    document.getElementById("commentList").appendChild(div);
    input.value = "";
}

        /* LIKES */
function loadLikes() {
    let count = localStorage.getItem("likes_" + currentId) || 0;
    likeCount.innerText = count;

    if (count > 0) likeBtn.classList.add("liked");
    else likeBtn.classList.remove("liked");
}

likeBtn.onclick = () => {
    let count = parseInt(localStorage.getItem("likes_" + currentId) || 0);
    if (likeBtn.classList.contains("liked")) {
        count = Math.max(0, count - 1);
        likeBtn.classList.remove("liked");
    } else {
        count++;
        likeBtn.classList.add("liked");
    }
    localStorage.setItem("likes_" + currentId, count);
    likeCount.innerText = count;
};

function savePin() {
    alert("Saved to collection 📌");
}

function sharePin() {
    alert("Link copied 🔗");
}

function openRelated(file, type) {
    localStorage.setItem("pinFile", file);
    localStorage.setItem("pinType", type);
    location.reload();
}
        /* OPEN MODAL WHEN CLICKING AN IMAGE */
        document.querySelectorAll("#imageGrid img").forEach(img => {
            img.addEventListener("click", () => {
                currentId = img.dataset.id;

                modalImg.src = img.src;
                document.getElementById("imgTitle").innerText = currentId.toUpperCase();

                loadSimilar(img);
                loadLikes();
                loadSavedState();
                loadComments();

                imageModal.style.display = "flex";
            });
        });
        /* LOAD SIMILAR IMAGES */
function loadSimilar(img) {
    const container = document.querySelector(".similar-grid");
    container.innerHTML = "";

    img.dataset.similar.split(",").forEach(sim => {
        let s = document.createElement("img");
        s.src = sim.trim();
        container.appendChild(s);
    });
}