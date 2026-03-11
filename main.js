const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeBtn.textContent = "Switch to Dark";
    } 
    else {
        themeBtn.textContent = "Switch to Light";
    }

});

const fadeElements = document.querySelectorAll(".fade-in");

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(13, 17, 23, 0.9)";
    } 
    else {
        header.style.background = "rgba(13, 17, 23, 0.65)";
    }

});
