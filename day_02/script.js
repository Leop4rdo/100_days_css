const container = document.querySelector(".container");


container.addEventListener("click", () => {
  if (container.classList.contains("active")) {
    container.classList.remove("active");
  } else {
    container.classList.add("active");
  }
});