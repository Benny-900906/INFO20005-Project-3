const dropDownToggles = document.querySelectorAll(".category__drop-down-toggle");

const toggle = function(e) {
  this.classList.toggle("expand-drop-down");
}

dropDownToggles.forEach((dropDown) => {
  dropDown.addEventListener("click", toggle)
})