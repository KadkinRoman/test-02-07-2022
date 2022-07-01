const buttonClose = document.querySelector(".button-close");

buttonClose.addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.display = "none";
})