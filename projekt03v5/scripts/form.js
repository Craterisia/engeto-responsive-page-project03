const form = document.getElementById("form");
// Validace emailu
const emailInput = document.querySelector(".email");
const textEmail = document.querySelector(".text-email");
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
// Hesla
const password1Input = document.getElementById("password1");
const password2Input = document.getElementById("password2");
const textPassword1 = document.querySelector(".text-password01");
const textPassword2 = document.querySelector(".text-password02");
// Tlačítko
const submitButton = document.getElementById("submitButton");

// Validace emailu
emailInput.addEventListener("input", () => {
  const emailValue = emailInput.value;

  if (emailValue.match(pattern)) {
    textEmail.classList.add("invisible");
    textEmail.classList.remove("error-email-visible");
  } else {
    textEmail.classList.add("error-email-visible");
    textEmail.classList.remove("invisible");
  }

  if (emailValue === "") {
    textEmail.classList.add("invisible");
    textEmail.classList.remove("error-email-visible");
  }
});

// Kontrola shody
function passwordValidation() {
  const password1 = password1Input.value;
  const password2 = password2Input.value;

  if (password1 === password2 || password1 == "" || password2 === "") {
    textPassword2.classList.add("invisible");
    textPassword2.classList.remove("error-password-visible");
  } else {
    textPassword2.classList.add("error-password-visible");
    textPassword2.classList.remove("invisible");
  }
}

password1Input.addEventListener("input", () => {
  // Počet znaků
  let charCount = password1Input.value.length;

  if (charCount >= 6 || charCount == 0) {
    textPassword1.classList.add("invisible");
    textPassword1.classList.remove("char-check-visible");
  } else {
    textPassword1.classList.add("char-check-visible");
    textPassword1.classList.remove("invisible");
  }

  passwordValidation();
});

password2Input.addEventListener("input", () => {
  passwordValidation();
});

// Tlačítko
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Rob ty len hů hů!");
});
