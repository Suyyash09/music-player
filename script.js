import { faceCard } from "./songCard.js";

const bodyElement = document.querySelector("body");
const toggle_div = document.getElementById("toggle");
const toggle_icon = document.getElementById("toggle-icon");

export function toggleTheme() {
  if (toggle_icon.classList.contains("fa-toggle-on")) {
    toggle_icon.classList.remove("fa-toggle-on");
    toggle_icon.classList.add("fa-toggle-off");
    bodyElement.classList.add("light-mode");
    bodyElement.classList.remove("dark-mode");
    faceCard.classList.add("light-mode");
    faceCard.classList.remove("dark-mode");
  } else {
    toggle_icon.classList.remove("fa-toggle-off");
    toggle_icon.classList.add("fa-toggle-on");
    bodyElement.classList.add("dark-mode");
    bodyElement.classList.remove("light-mode");
    faceCard.classList.add("dark-mode");
    faceCard.classList.remove("light-mode");
  }
}

toggle_icon.addEventListener("click", toggleTheme);
