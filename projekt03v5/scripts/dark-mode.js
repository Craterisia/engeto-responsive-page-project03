// Zachycení pro změnu
// Body
const body = document.querySelector("body");
// Ikona ↓
const darkmodeIconClick = document.querySelector(".darkmode-icon-container");
const darkmodeIcon = document.querySelector(".icon");
// Hero ↓
const layer01 = document.querySelector(".layer01");
const layer02 = document.querySelector(".layer02");
// Navigace ↓
const navigationBcg = document.querySelector(".nav");
const navigationLinks = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const menuBcg = document.querySelector(".menu");
// Sekce s fotkami a kontakty ↓
const sections01 = document.querySelectorAll(".section01");
// Formulář pozadí ↓
const section02 = document.querySelector(".section02");
// Formulář pozadí ↓
const formEmailBcg = document.querySelector(".email");
const formPasswordBcgs = document.querySelectorAll(".password");
const buttonBcg = document.querySelector("button");
// Footer ↓
const footerBcg = document.querySelector(".footer");
// Ikona nahoru ↓
const iconUp = document.querySelector(".icon-up");
// Sekce kontakty
const contactIcons = document.querySelectorAll(".con-icon");

// Zprovoznění darkmodu na klik
darkmodeIconClick.addEventListener("click", () => {
  // Barva písma
  body.classList.toggle("color-light");
  body.classList.toggle("color-dark");

  // změna ikony darkmode
  darkmodeIcon.classList.toggle("icon-light");
  darkmodeIcon.classList.toggle("icon-dark");

  //   změna hero section
  layer01.classList.toggle("layer01-light");
  layer01.classList.toggle("layer01-dark");
  layer02.classList.toggle("layer02-light");
  layer02.classList.toggle("layer02-dark");

  //   Navigace
  navigationBcg.classList.toggle("nav-light");
  navigationBcg.classList.toggle("nav-dark");

  navigationLinks.forEach((oneLink) => {
    oneLink.classList.toggle("nav-link-light");
    oneLink.classList.toggle("nav-link-dark");
  });

  //   hamburger
  hamburger.classList.toggle("hamburger-light");
  hamburger.classList.toggle("hamburger-dark");

  // Pozadí menu queries
  menuBcg.classList.toggle("menu-query-light");
  menuBcg.classList.toggle("menu-query-dark");

  // Sekce s fotkami
  sections01.forEach((section01) => {
    section01.classList.toggle("section-light01");
    section01.classList.toggle("section-dark01");
  });

  // Pozadí formulář
  section02.classList.toggle("section-light02");
  section02.classList.toggle("section-dark02");

  buttonBcg.classList.toggle("button-light");
  buttonBcg.classList.toggle("button-dark");

  formEmailBcg.classList.toggle("form-light");
  formEmailBcg.classList.toggle("form-dark");

  formPasswordBcgs.forEach((oneInput) => {
    oneInput.classList.toggle("form-light");
    oneInput.classList.toggle("form-dark");
  });

  // Kontakt ikony
  contactIcons.forEach((icon) => {
    icon.classList.toggle("color-light");
    icon.classList.toggle("color-dark");
  });

  // Footer
  footerBcg.classList.toggle("footer-light");
  footerBcg.classList.toggle("footer-dark");
});
