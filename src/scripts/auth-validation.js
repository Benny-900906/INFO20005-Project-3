const emailInput = document.querySelector(".credential__email");
const passwordInput = document.querySelector(".credential__password");
const confirmationInput = document.querySelector(".credential__password-confirm");

const loginRequiredInputs = [emailInput, passwordInput];
const registerRequiredInputs = [emailInput, passwordInput, confirmationInput];

const SIGN_IN = "Sign In";
const SIGN_UP = "Sign Up";

const credentialKey = document.querySelector(".credential__verify");

credentialKey.addEventListener("click", (e) => {
  let inputCandidates;
  /* check which proceeding btn is being clicked */
  if (credentialKey.innerText === SIGN_IN) {
    inputCandidates = loginRequiredInputs;
  } else if (credentialKey.innerText === SIGN_UP) {
    inputCandidates = registerRequiredInputs;
  }

  /* check if all the required fields are filled */
  inputCandidates.forEach((input) => {
    const regex = /^credential__/g;
    const inputType = input.classList[0].replace("credential__", "");
    if (input.value.length === 0) {
      document.querySelector(".auth-error").classList.add("auth-error--display");
      document.querySelector(`.error__${inputType}`).classList.add("auth-error--display");
      e.preventDefault();
    } else {
      document.querySelector(`.error__${inputType}`).classList.remove("auth-error--display");
    }
  })

  /* check confirm password vs. password*/
  if (passwordInput.value.length > 0 && confirmationInput.value.length > 0) {
    if (!(passwordInput.value === confirmationInput.value)) {
      document.querySelector(".error__password-inconsistent").classList.add("auth-error--display");
      e.preventDefault();
    } else {
      document.querySelector(".error__password-inconsistent").classList.remove("auth-error--display");
    }
  }
  
  
})



