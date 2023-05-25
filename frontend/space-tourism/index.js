//when user clicks on the menu icon
//if the menu is open, close it
//if the menu is closed, open it
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  nav.setAttribute(
    "data-visible",
    nav.getAttribute("data-visible") === "false" ? "true" : "false"
  );
  navToggle.setAttribute(
    "data-visible",
    navToggle.getAttribute("data-visible") === "false" ? "true" : "false"
  );
});
