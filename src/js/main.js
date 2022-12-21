var BurgerButton = document.querySelector(".burger-button");
var BackgroundNav = document.querySelector(".background-nav");
var MenuLeave = document.querySelector(".menu-leave");

var OpenNav = function () {
  BurgerButton.classList.toggle("is-activ");
  BackgroundNav.classList.toggle("is-open");
  MenuLeave.classList.toggle("is-on");
};
var CloseNav = function () {
  BurgerButton.classList.remove("is-activ");
  BackgroundNav.classList.remove("is-open");
  MenuLeave.classList.remove("is-on");
};

BurgerButton.addEventListener("click", OpenNav);
MenuLeave.addEventListener("click", CloseNav);

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.saveStyles(".mobile, .desktop");
ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    gsap.to(".text-1", {
      scrollTrigger: {
        trigger: ".trigger-1",
        scrub: 1,
      },
      y: 20,
      duration: 0.2,
    });

    gsap.to(".text-2", {
      scrollTrigger: {
        trigger: ".trigger-2",
        scrub: 1,
      },
      y: 20,
      duration: 0.2,
    });

    gsap.to(".text-3", {
      scrollTrigger: {
        trigger: ".trigger-3",
        scrub: 1,
      },
      y: 20,
      duration: 0.2,
    });

    gsap.to(".text-4", {
      scrollTrigger: {
        trigger: ".trigger-4",
        scrub: 1,
      },
      y: 20,
      duration: 0.2,
    });
  },
});
