// FILTER BUTTONS
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".travel-card");

document.addEventListener("DOMContentLoaded", () => {
    fetch("../navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
})

filters.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".filter.active").classList.remove("active");
        btn.classList.add("active");

        let category = btn.dataset.filter;

        cards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.style.display = "block";   // REPLACED
            } else {
                card.style.display = "none";    // REPLACED
            }
        });
    });
});

// SEARCH FUNCTION
document.getElementById("searchInput").addEventListener("input", function () {
    let value = this.value.toLowerCase();

    cards.forEach(card => {
        let title = card.dataset.title.toLowerCase();

        card.style.display = title.includes(value) ? "block" : "none"; // UPDATED
    });
});

// =======================
// MOBILE MENU FUNCTIONALITY
// =======================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

console.log(mobileMenu);


// Open mobile menu
hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("show");

});

// Close menu
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
});
