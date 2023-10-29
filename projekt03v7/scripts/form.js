const form = document.getElementById("form");
// Validace emailu
const emailInput = document.querySelector(".email");
const textEmail = document.querySelector(".text-email");
const pattern =
  /^([a-z\A-Z\d\.\-]+)@([a-z\A-Z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
// Hesla
const password1Input = document.getElementById("password1");
const password2Input = document.getElementById("password2");
const textPassword1 = document.querySelector(".text-password01");
const textPassword2 = document.querySelector(".text-password02");
const passwordInputs = document.querySelectorAll(".password");
// Tlačítko
const submitButton = document.getElementById("submitButton");

// Validace emailu

emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;
  const emailValidationString = emailValue.match(pattern) ? "valid" : "invalid";
  textEmail.innerText = `Email is ${emailValidationString}!`;

  if (emailValue.match(pattern)) {
    textEmail.classList.add("error-email-visible");
    textEmail.classList.remove("invisible");
    textEmail.style.color = "green";
    emailInput.classList.remove("error-email-background");
  } else {
    textEmail.classList.add("email-validation-visible");
    textEmail.classList.remove("invisible");
    textEmail.style.color = "red";
    emailInput.classList.add("error-email-background");
  }

  if (emailValue === "") {
    textEmail.classList.add("invisible");
    textEmail.classList.remove("email-validation-visible");
    emailInput.classList.remove("error-email-background");
  }
});

function textPassword2Visible() {
  textPassword2.classList.add("error-password-visible");
  textPassword2.classList.remove("invisible");
}

// Kontrola shody
function passwordValidation() {
  const password1 = password1Input.value;
  const password2 = password2Input.value;
  const textPasswordString = password1 === password2 ? "does" : "does not";

  if (password1 === "" && password2 === "") {
    textPassword2.classList.add("invisible");
    textPassword2.classList.remove("error-password-visible");
    passwordInputs.forEach((passwordInput) => {
      passwordInput.classList.remove("error-password-background");
    });
  } else if (password1 === password2 && password2 === password1) {
    textPassword2Visible();
    textPassword2.innerText = `Password ${textPasswordString} match!`;
    textPassword2.style.color = "green";
    passwordInputs.forEach((passwordInput) => {
      passwordInput.classList.remove("error-password-background");
    });
  } else {
    textPassword2Visible();
    textPassword2.innerText = `Password ${textPasswordString} match!`;
    textPassword2.style.color = "red";
    passwordInputs.forEach((passwordInput) => {
      passwordInput.classList.add("error-password-background");
    });
  }
}

function passwordCharCount() {
  // Počet znaků
  let charCount1 = password1Input.value.length;
  let charCount2 = password2Input.value.length;

  if (
    charCount1 >= 6 ||
    charCount2 >= 6 ||
    (charCount1 == 0 && charCount2 == 0)
  ) {
    textPassword1.classList.add("invisible");
    textPassword1.classList.remove("char-check-visible");
  } else {
    textPassword1.classList.add("char-check-visible");
    textPassword1.classList.remove("invisible");
  }
}

password1Input.addEventListener("input", () => {
  passwordCharCount();
  passwordValidation();
});

password2Input.addEventListener("input", () => {
  passwordCharCount();
  passwordValidation();
});

// Tlačítko
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Rob ty len hů hů!");
});
