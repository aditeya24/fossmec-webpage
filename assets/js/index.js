const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.getElementById("primary-navigation");

navToggle.addEventListener("click", () => {
    const isVisible = primaryNav.getAttribute("data-visible") === "true";
    primaryNav.setAttribute("data-visible", String(!isVisible));
    navToggle.setAttribute("aria-expanded", String(!isVisible));
    navToggle.classList.toggle("nav-open");
});
