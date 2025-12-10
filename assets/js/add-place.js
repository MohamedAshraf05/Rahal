document.getElementById("addPlaceForm").addEventListener("submit", function (e) {

    const name = document.getElementById("placeName");
    const city = document.getElementById("city");
    const category = document.getElementById("category");
    const description = document.getElementById("description");
    const image = document.getElementById("image");

    const nameError = document.getElementById("nameError");
    const cityError = document.getElementById("cityError");
    const categoryError = document.getElementById("categoryError");
    const descriptionError = document.getElementById("descriptionError");
    const imageError = document.getElementById("imageError");

    nameError.textContent = "";
    cityError.textContent = "";
    categoryError.textContent = "";
    descriptionError.textContent = "";
    imageError.textContent = "";

    let isValid = true;

    if (name.value == "") {
        nameError.textContent = "Name is required!";
        isValid = false;
    }

    if (city.value === "") {
        cityError.textContent = "City is required!";
        isValid = false;
    }

    if (category.value === "") {
        categoryError.textContent = "Category is required!";
        isValid = false;
    }

    if (description.value.length < 10) {
        descriptionError.textContent = "Description must be at least 10 characters.";
        isValid = false;
    }

    if (!image.files[0]) {
        imageError.textContent = "Please upload an image!";
        isValid = false;
    } else {
        let file = image.files[0];

        if (!file.type.startsWith("image/")) {
            imageError.textContent = "Uploaded file must be an image!";
            isValid = false;
        }
    }


    if (isValid) {
        alert("Place added successfully!");
        this.reset();
    }
});

function clearErrorOnInput(inputElement, errorElement) {
    inputElement.addEventListener("input", () => {
        errorElement.textContent = "";
    });
}

clearErrorOnInput(document.getElementById("placeName"), document.getElementById("nameError"));
clearErrorOnInput(document.getElementById("description"), document.getElementById("descriptionError"));

document.getElementById("city").addEventListener("change", () => {
    document.getElementById("cityError").textContent = "";
});
document.getElementById("category").addEventListener("change", () => {
    document.getElementById("categoryError").textContent = "";
});

document.getElementById("image").addEventListener("change", () => {
    document.getElementById("imageError").textContent = "";
});