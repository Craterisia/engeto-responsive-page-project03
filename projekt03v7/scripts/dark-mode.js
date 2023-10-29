// Dark mode ↓
const darkmodeIconClick = document.querySelector(".darkmode-icon-container");
const body = document.querySelector("body");
const localStorageKey = "preferred-mode";
let isDarkMode = false;

// Dark mode
function toggleMode() {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  const preferredMode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem(localStorageKey, preferredMode);
}

// Zavolání preferovaného modu z localstorage
darkmodeIconClick.addEventListener("click", toggleMode);
const preferredMode = localStorage.getItem(localStorageKey);
if (preferredMode === "dark") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
} else {
  body.classList.add("light-mode");
  body.classList.remove("dark-mode");
}
