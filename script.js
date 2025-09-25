const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});
