const checkoutBtn = document.querySelector(".proceed-payment-btn");
const billingError = document.querySelector(".billing-error");
const requiredInputs = document.querySelectorAll("input[required='required']");
const requiredSelects = document.querySelectorAll("select[required='required']");

checkoutBtn.addEventListener("click", (e) => {
  for (select of requiredSelects) {
    if (select.value === "") {
      billingError.classList.add("billing-error--display");
      e.preventDefault();
    }
  }

  for (input of requiredInputs) {
    if (input.value.length === 0) {
      e.preventDefault();
      billingError.classList.add("billing-error--display");
      break;
    }
  }
})