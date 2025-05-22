/* Footer Copyright Section */

const date = new Date().getFullYear();
const copyrightText = document.querySelector("#copyright");
copyrightText.innerHTML = date;

/* Navbar Section */

const header = document.querySelector(".header");
const navIconMenu = document.querySelector(
  `.mobile-navbar-btn .mobile-nav-icon[name="menu-outline"]`
);

navIconMenu.addEventListener("click", () => {
  header.classList.add("active");
});

const navIconClose = document.querySelector(
  `.mobile-navbar-btn .mobile-nav-icon[name="close-outline"]`
);

navIconClose.addEventListener("click", () => {
  header.classList.remove("active");
});
