const cardNumberRequiredDigits = 16;
const cardNumberBreakDigit = 4;
const cardNumInput = document.querySelector("#card-number");
cardNumInput.addEventListener("input", (e) => {
  const curDigits = e.target.value.replaceAll(" ", "");
})

const minValidMonth = 1;
const minMaxMonth = 12;
const minYear = new Date().getFullYear() - 2000;
const cardExpiryInput = document.querySelector("#card-expiry");

const cardCvvRequiredDigits = 3;
const cardCvvInput = document.querySelector("#security-code");