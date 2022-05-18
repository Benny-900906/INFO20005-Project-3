const contentSelections = document.querySelectorAll(".selection__content");

contentSelections.forEach((content) => {
  content.addEventListener("click", (e) => {

    const selectedContent = e.target.dataset.content;

    document.querySelector(".selection__content[data-selected='true']").dataset.selected = "false";

    e.target.dataset.selected = "true";
    
    document.querySelector(".content__text[data-display='true']").dataset.display = "false";

    document.querySelector(`.content__text[data-content='${selectedContent}']`).dataset.display = "true";
  })
})