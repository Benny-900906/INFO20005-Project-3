const decreBtn = document.querySelector(".quantity__decrement-btn");
const quantity = document.querySelector(".quantity__amount");
const increBtn = document.querySelector(".quantity__increment-btn");
const addBtn = document.querySelector(".order-section__add-product-btn");

decreBtn.addEventListener("click", (e) => {
  const currentAmount = Number(quantity.innerText);
   if (!(currentAmount === 0)) {
     quantity.innerText = currentAmount - 1;
   }

   if (Number(quantity.innerText) === 0) {
     e.target.classList.add("disable-btn");
     addBtn.classList.add("disable-btn");
   }
})

increBtn.addEventListener("click", (e) => {
  const currentAmount = Number(quantity.innerText);
  quantity.innerText = currentAmount + 1;

  if (Number(quantity.innerText) === 1) {
    decreBtn.classList.remove("disable-btn");
    addBtn.classList.remove("disable-btn");
  }
})

addBtn.addEventListener("click", () => {
  document.querySelector(".cart__icon").classList.add("cart-occupied");
})