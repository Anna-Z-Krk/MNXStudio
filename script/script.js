const nav = document.querySelector(".navbar-collapse");

document.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});
