const navBarBtn = document.querySelector(".nav-bar");


navBarBtn.addEventListener("click", function() {
  if (this.dataset.expand === "false") {
    this.dataset.expand = "true";
  } else {
    this.dataset.expand = "false";
  }
});