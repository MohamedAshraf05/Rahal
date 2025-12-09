// SELECTORS
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".top-places-card");
const searchInput = document.getElementById("searchInput");

// STATE
let activeCategory = "all";
let searchText = "";

// MAIN FUNCTION TO UPDATE VISIBLE CARDS
function updateCards() {
    cards.forEach(card => {
        const cardCategory = card.querySelector(".card-tag").textContent.trim();
        const cardTitle = card.querySelector("h3").textContent.toLowerCase();

        const matchesCategory =
            activeCategory === "all" || cardCategory === activeCategory;

        const matchesSearch =
            cardTitle.includes(searchText.toLowerCase());

        // Show only if both conditions match
        if (matchesCategory && matchesSearch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// FILTER BUTTON CLICK HANDLER
filters.forEach(btn => {
    btn.addEventListener("click", () => {
        // remove active class from previous
        document.querySelector(".filter.active").classList.remove("active");
        btn.classList.add("active");

        activeCategory = btn.dataset.filter;
        updateCards();
    });
});

// SEARCH INPUT HANDLER
searchInput.addEventListener("input", () => {
    searchText = searchInput.value;
    updateCards();
});
