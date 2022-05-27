const expandNavBtn = document.querySelector(".nav-bar__outter-btn");
const exitNavBtn = document.querySelector(".exit-menu-outter-btn");
const navCover = document.querySelector(".nav-bar__cover");
const subNavToggles = document.querySelectorAll(".sub-nav__item-name");

expandNavBtn.addEventListener("click", (e) => {
  expandNavBtn.classList.add("nav-bar--expand");
  document.body.style.overflow = "hidden";
});

exitNavBtn.addEventListener("click", (e) => {
  expandNavBtn.classList.remove("nav-bar--expand");
  document.body.style.overflow = "auto";
  subNavToggles.forEach((subNavToggle) => {
    subNavToggle.classList.remove("sub-nav--expand");
  });
});

navCover.addEventListener("click", (e) => {
  expandNavBtn.classList.remove("nav-bar--expand");
  document.body.style.overflow = "auto";
  subNavToggles.forEach((subNavToggle) => {
    subNavToggle.classList.remove("sub-nav--expand");
  });
});

subNavToggles.forEach((subNavToggle) => {
  subNavToggle.addEventListener("click", (e) => {
    subNavToggle.classList.toggle("sub-nav--expand");
  })
});





