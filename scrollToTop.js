const scrollTopButton = document.getElementById("scrollTopButton");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        scrollTopButton.classList.add("active");
    } else {
        scrollTopButton.classList.remove("active");
    }
});

scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
