const checkoutBtn = document.querySelector(".order-proceed__checkout-btn");
const dialogCover = document.querySelector(".dialog-cover");
const dialogPanel = document.querySelector(".auth-panel");
const authOptions = document.querySelectorAll(".auth-header__selection");
const credentialInputs = document.querySelectorAll(".credential__input input");


checkoutBtn.addEventListener("click", (e) => {
  credentialInputs.forEach((input) => {
    input.value = "";
  });
  document.querySelector(".auth-error").classList.remove("auth-error--display");

  if (e.target == checkoutBtn) {
    dialogCover.classList.remove("content__hide");
    dialogPanel.setAttribute("open", "");
    document.body.classList.add("body__static");
  }
});

/* quits the login/sign-up panel */
dialogCover.addEventListener("click", (e) => {
  if (e.target === dialogCover) {
    e.target.classList.add("content__hide");
    dialogPanel.removeAttribute("open");
    document.body.classList.remove("body__static");
  }
});


authOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    document.querySelector(".auth-header__selected").classList.remove("auth-header__selected");
    e.target.classList.add("auth-header__selected");
    credentialInputs.forEach((input) => {
      input.value = "";
    });
    /* reset error messages */
    document.querySelector(".auth-error").classList.remove("auth-error--display");
    document.querySelectorAll(".auth-error li").forEach((err) => {
      err.classList.remove("auth-error--display")
    });


    if (e.target === document.querySelector(".auth-header__login")) {
      document.querySelector(".credential__password-confirm").classList.add("content__hide");
      document.querySelector(".recover__password").classList.remove("content__hide");
      document.querySelector(".auth-input__title span").innerText = "LOGIN";
      document.querySelector(".credential__verify").innerText = "Sign In";
    } else {
      document.querySelector(".credential__password-confirm").classList.remove("content__hide");
      document.querySelector(".recover__password").classList.add("content__hide");
      document.querySelector(".auth-input__title span").innerText = "SIGN UP";
      document.querySelector(".credential__verify").innerText = "Sign Up";
    }
  })
});


