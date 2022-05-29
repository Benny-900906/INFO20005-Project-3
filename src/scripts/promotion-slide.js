const slideBtns = document.querySelectorAll(".control__slide-btn");

slideBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.selected === "false") {
      const currentSelectedBtn = document.querySelector(".control__slide-btn[data-selected='true']");
      const currentSlideNum = currentSelectedBtn.dataset.slideOrder;
      const newSlideNum = btn.dataset.slideOrder;

      currentSelectedBtn.dataset.selected = "false";
      btn.dataset.selected = "true";

      document.querySelector(`.slider-img-${newSlideNum}`).classList.add("selected-slider-img");

      setTimeout(() => {
        document.querySelector(`.slider-img-${currentSlideNum}`).classList.remove("selected-slider-img");
      }, 250);

    }
  })
})



const TOTAL_SLIDES = 3;

const autoSplideSlide = () => {
  const currentSlideBtn = document.querySelector(".control__slide-btn[data-selected='true']");
  const currentSlideNum = currentSlideBtn.dataset.slideOrder;

  const nextSlideNum = currentSlideBtn.dataset.slideOrder % TOTAL_SLIDES + 1;
  const nextSlideBtn = document.querySelector(`.control__slide-btn[data-slide-order='${nextSlideNum}']`);

  const currentSlide = document.querySelector(`.slider-img-${currentSlideNum}`);
  const nextSlide = document.querySelector(`.slider-img-${nextSlideNum}`);

  currentSlideBtn.dataset.selected = "false";
  nextSlideBtn.dataset.selected = "true";

  nextSlide.classList.add("selected-slider-img");
  setTimeout(() => {
    currentSlide.classList.remove("selected-slider-img");
  }, 250);
}

setInterval(autoSplideSlide, 5000);



