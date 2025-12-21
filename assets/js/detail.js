let currentIndex = 0;
const track = document.getElementById("galleryTrack");
const images = track.children;
const indicators = document.getElementById("indicators");
let isFavorite = false;

// Create indicators
for (let i = 0; i < images.length; i++) {
  const dot = document.createElement("button");
  dot.onclick = () => goToImage(i);
  indicators.appendChild(dot);
}
updateIndicators();

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateIndicators();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function goToImage(index) {
  currentIndex = index;
  updateSlider();
}

function updateIndicators() {
  [...indicators.children].forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Favorite button
function toggleFavorite() {
  isFavorite = !isFavorite;
  document.querySelector(".favorite-btn").textContent = isFavorite ? "♥" : "♡";
}
