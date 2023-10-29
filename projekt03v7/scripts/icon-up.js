window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    iconUp.classList.add("icon-up-light");
    iconUp.classList.remove("invisible");
  } else {
    iconUp.classList.add("invisible");
    iconUp.classList.remove("icon-up-light");
  }
});
