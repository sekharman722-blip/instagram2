// ===== Signup / Toggle Password =====
function togglePassword(id) {
    const input = document.getElementById(id);
    if (input.type === "password") input.type = "text";
    else input.type = "password";
}

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "home.html";
});

// ===== Sections Toggle =====
function showHome() {
    document.getElementById("home-section").classList.remove("hidden");
    document.getElementById("reels-section").classList.add("hidden");
    document.getElementById("profile-section").classList.add("hidden");
    document.getElementById("dm-section").classList.add("hidden");
}

function showStories() {
    showHome();
}

function showReels() {
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("reels-section").classList.remove("hidden");
    document.getElementById("profile-section").classList.add("hidden");
    document.getElementById("dm-section").classList.add("hidden");
}

function showProfile() {
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("reels-section").classList.add("hidden");
    document.getElementById("profile-section").classList.remove("hidden");
    document.getElementById("dm-section").classList.add("hidden");
}

function showDM() {
    document.getElementById("home-section").classList.add("hidden");
    document.getElementById("reels-section").classList.add("hidden");
    document.getElementById("profile-section").classList.add("hidden");
    document.getElementById("dm-section").classList.remove("hidden");
}

// ===== Mock Feed =====
const feed = document.getElementById("feed");
for (let i = 1; i <= 5; i++) {
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `<h3>User ${i}</h3><p>This is a post content ${i}.</p>`;
    feed.appendChild(post);
}

// ===== Mock Stories =====
const storiesBar = document.getElementById("stories-bar");
for (let i = 1; i <= 5; i++) {
    const story = document.createElement("div");
    story.addEventListener("click", () => openStory(i));
    storiesBar.appendChild(story);
}

function openStory(i) {
    const popup = document.getElementById("story-popup");
    const img = document.getElementById("story-img");
    const progress = document.getElementById("story-progress");
    img.src = `https://i.pravatar.cc/500?img=${i}`;
    popup.style.display = "flex";
    progress.style.width = "0%";
    let w = 0;
    const interval = setInterval(() => {
        w += 1;
        progress.style.width = w + "%";
        if (w >= 100) { popup.style.display = "none"; clearInterval(interval); }
    }, 30);
}

// ===== Notifications Example =====
function showNotification(text) {
    const notification = document.getElementById("notification");
    notification.innerText = text;
    notification.style.display = "block";
    setTimeout(() => { notification.style.display = "none"; }, 2000);
}
