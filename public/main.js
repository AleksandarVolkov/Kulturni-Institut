let menu = document.querySelector("#menu");
let back = document.querySelector("#back");
let burger = document.querySelector("#burger");
let slideMenu = document.querySelector("#slide-menu");
let main = document.querySelector("#main");
let contact = document.querySelector("#contact");
let mainNav = document.querySelector("#nav-main");
let scrollText = document.querySelector("#scroll");

burger.addEventListener("click", () => {
  console.log("clicked");
  menu.classList.toggle("translate-y-[10px]");
  menu.classList.toggle("opacity-100");
  menu.classList.toggle("opacity-0");
  back.classList.toggle("translate-y-[-10px]");
  back.classList.toggle("opacity-0");
  back.classList.toggle("opacity-100");
  slideMenu.classList.toggle("-translate-x-[100%]");
  main.classList.toggle("translate-x-[100%]");
  main.classList.toggle("overflow-y-hidden");
});

function onWindowScroll() {
  let scroll = main.parentNode.scrollTop;
  if (scroll > 100) {
    contact.classList.add("-translate-y-[50px]");
    contact.classList.add("opacity-0");
    mainNav.classList.add("-translate-y-[50px]");
    scrollText.classList.remove("delay-[2500ms]");
    scrollText.classList.add("opacity-0");
  } else {
    contact.classList.remove("-translate-y-[50px]");
    contact.classList.remove("opacity-0");
    contact.classList.add("opacity-100");
    mainNav.classList.remove("-translate-y-[50px]");
  }
}

main.parentNode.addEventListener("scroll", onWindowScroll);

let vert = document.querySelectorAll(".vert");
function scrollPercentage() {
  vert.forEach((vert) => {
    let position = main.parentNode.scrollTop;
    let calcHeight = main.parentNode.scrollHeight - main.parentNode.clientHeight;
    vert.style.height = Math.round((position * 100) / calcHeight) + "%";
  });
}
main.parentNode.addEventListener("scroll", scrollPercentage);

let header = document.querySelector("#header");
header.classList.remove("transition-none");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide-y");
      entry.target.classList.remove("hide-x-left");
      entry.target.classList.remove("hide-x-right");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animation");
hiddenElements.forEach((el) => observer.observe(el));

const observerFocus = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("scale removed");
        entry.target.classList.remove("scale-[98%]");
      } else {
        console.log("scale added");
        entry.target.classList.add("scale-[98%]");
      }
    });
  },
  { threshold: [0.4, 0.6] }
);

const focusedElements = document.querySelectorAll(".focused");

focusedElements.forEach((el) => observerFocus.observe(el));

let buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  button.addEventListener("mouseover", function (x) {
    x.target.classList.remove("delay-[700ms]");
  });
});
