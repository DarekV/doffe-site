var BurgerButton = document.querySelector(".burger-button");
var BackgroundNav = document.querySelector(".background-nav");
var MenuLeave = document.querySelector(".menu-leave");

var OpenNav = function () {
  BurgerButton.classList.toggle("is-activ");
  BackgroundNav.classList.toggle("is-open");
};
var CloseNav = function () {
  BurgerButton.classList.remove("is-activ");
  BackgroundNav.classList.remove("is-open");
};

BurgerButton.addEventListener("click", OpenNav);
MenuLeave.addEventListener("click", CloseNav);
