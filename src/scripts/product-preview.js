const previewImg = document.querySelector(".img__preview img");
const thumbnails = document.querySelectorAll(".img__thumbnail img");

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener("click", (e) => {
    const currentDisplay = document.querySelector("[data-selected='true']");
    const targetSrc = e.target.src;
    
    currentDisplay.dataset.selected = "false";
    
    e.target.dataset.selected = "true";
    
    previewImg.src = targetSrc;
  })
})