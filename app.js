const body = document.querySelector("body");
const btn = document.querySelector("button.light-dark-button");

const handleDarkMode = () => {
  if (body.getAttribute("data-mode") === "light") {
    body.setAttribute("data-mode", "dark");
  } else {
    body.setAttribute("data-mode", "light");
  }
};

btn.addEventListener("click", handleDarkMode);
