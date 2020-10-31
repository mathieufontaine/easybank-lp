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

// Animation on Scroll

gsap.registerPlugin(ScrollTrigger);

const topContentAnimation = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".content-top",
      start: "center 80%",
      end: "center 20%",
      // toggleActions: "play none none reset",
      defaults: {
        duration: 2,
        ease: "power1.inOut"
      }
    }
  });

  tl.from(".content-top", { x: "-150%", duration: 1 });
  tl.from(".box", {
    x: "10%",
    opacity: 0,
    scale: 0,
    duration: 1.5,
    stagger: 1
  });
};

const articlesAnimation = () => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".articles",
      start: "top 80%",
      // end: "center 20%",
      defaults: {
        ease: "power1.inOut"
      }
    }
  });

  tl.from(".articles h2", { x: "-150%", duration: 1 });
  tl.from(".article", {
    x: "150%",
    opacity: 0,
    duration: 1.5,
    stagger: 1
  });
};

topContentAnimation();
articlesAnimation();
