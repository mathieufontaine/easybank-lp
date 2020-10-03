const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const menuMobile = document.querySelector(".menu-mobile");
const overlay = document.querySelector("#overlay");

const openMenu = event => {
  event.currentTarget.classList.add("hide");
  close.classList.remove("hide");
  menuMobile.classList.remove("hide");
  overlay.style.display = "block";
};

const closeMenu = event => {
  close.classList.add("hide");
  hamburger.classList.remove("hide");
  menuMobile.classList.add("hide");
  overlay.style.display = "none";
};

hamburger.addEventListener("click", openMenu);
close.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// init Animation on Scroll
AOS.init();
