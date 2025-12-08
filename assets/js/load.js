fetch("nav-bar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    const links = document.querySelectorAll(".nav-links a");
     const hamburger = document.querySelector(".hamburger");
     const navLinks = document.querySelector(".nav-links");
    const currentPage = window.location.pathname.split("/").pop(); 
        hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
  fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });