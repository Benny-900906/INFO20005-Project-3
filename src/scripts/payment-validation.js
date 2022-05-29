const cardNumInput = document.querySelector("#card-number");
const cardExpiryInput = document.querySelector("#card-expiry");
const cardCvvInput = document.querySelector("#security-code");
const paymentBtn = document.querySelector(".payment__submit-btn");
const requiredInputs = document.querySelectorAll("input[required='required']");
const paymentError = document.querySelector(".payment-error");


const concatInput = (inputType, targetIndex) => {
  inputType.value = inputType.value.substring(0, targetIndex);
} 


const preventInvalidInput = (e, inputType) => {
  const data = Number.parseInt(e.data);
  if (isNaN(data) && e.data !== null) {
    concatInput(inputType, inputType.value.indexOf(e.data));
  }
}


/* the pattern attribute in the html input tag will only check for validation when the information is submitted. So add an event listener to prevent invalid input in the first place */
cardNumInput.addEventListener("input", (e) => {
  preventInvalidInput(e, cardNumInput);
})


/* the pattern attribute in the html input tag will only check for validation when the information is submitted. So add an event listener to prevent invalid input in the first place */
cardExpiryInput.addEventListener("input", (e) => {
  const data = Number.parseInt(e.data);
  if (isNaN(data) && e.data !== null && e.data !== "/") {
    concatInput(cardExpiryInput, cardExpiryInput.value.indexOf(e.data));
  }
})


/* the pattern attribute in the html input tag will only check for validation when the information is submitted. So add an event listener to prevent invalid input in the first place */
cardCvvInput.addEventListener("input", (e) => {
  preventInvalidInput(e, cardCvvInput);
})


/* checks if all the required inputs are filled in */
paymentBtn.addEventListener("click", (e) => {
  requiredInputs.forEach((input) => {
    if (input.value.length === 0) {
      paymentError.classList.add("payment-error--display");
      e.preventDefault();
    }
  });
})