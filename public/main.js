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

let buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  button.addEventListener("mouseover", function (x) {
    x.target.classList.remove("delay-[700ms]");
  });
});

// _______________________________________SWIPER________________________________________________________________

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: false,
  speed: 750,
  scale: 10,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -500],
      rotate: [0, 200, 0],
      scale: 0.8,
    },
    next: {
      translate: [0, 0, -500],
      rotate: [0, -200, 0],
      scale: 0.8,
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      creativeEffect: {
        prev: {
          translate: ["-120%", 0, -500],
          rotate: [0, -25, 0],
          scale: 1.2,
        },
        next: {
          translate: ["120%", 0, -500],
          rotate: [0, 25, 0],
          scale: 1.2,
        },
      },
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

const resizeObserver = new ResizeObserver(() => {
  console.log("resizerObserver called");
  setTimeout(function () {
    divAspect();
  }, 250);
});

function divAspect() {
  let slides = document.querySelectorAll(".swiper-slide");
  slides.forEach(function (slide) {
    let width = slide.offsetWidth;
    slide.style.height = width * 1.3 + "px";
  });
  document.querySelector(".swiper-wrapper").style.height = document.querySelector(".swiper-slide-active").style.height;
  document.querySelector(".swiper").style.height = document.querySelector(".swiper-slide-active").style.height;
}
resizeObserver.observe(main);

// ____________________ASDASD________________

// window.addEventListener("load", (event) => {
//   var swiperWrapper = document.querySelector(".swiper-wrapper");

//   /* The Team */
//   var team = [
//     {
//       name: "Alice Stone",
//       role: "UI Designer",
//       desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
//       photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
//       website: "https://rafaelalucas.com",
//       email: "mailto:rafaelavlucas@gmail.com",
//       linkedin: "https://www.linkedin.com/in/rafaelalucas/",
//       dribbble: "https://dribbble.com/rafaelalucas",
//     },
//     {
//       name: "Adam Turner",
//       role: "Project Manager",
//       desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
//       photo: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
//       website: "https://rafaelalucas.com",
//       email: "mailto:rafaelavlucas@gmail.com",
//       linkedin: "https://www.linkedin.com/in/rafaelalucas/",
//       dribbble: "https://dribbble.com/rafaelalucas",
//     },
//     {
//       name: "Adam Turner",
//       role: "Project Manager",
//       desc: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts.",
//       photo: "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300",
//       website: "https://rafaelalucas.com",
//       email: "mailto:rafaelavlucas@gmail.com",
//       linkedin: "https://www.linkedin.com/in/rafaelalucas/",
//       dribbble: "https://dribbble.com/rafaelalucas",
//     },
//   ];

//   /* Social Icons */
//   var icons = [
//     {
//       iWebsite: "https://rafaelalucas.com/dailyui/6/assets/link.svg",
//       iEmail: "https://rafaelalucas.com/dailyui/6/assets/email.svg",
//       iLinkedin: "https://rafaelalucas.com/dailyui/6/assets/linkedin.svg",
//       iDribbble: "https://rafaelalucas.com/dailyui/6/assets/dribbble.svg",
//     },
//   ];

//   var iWebsite = icons[0].iWebsite,
//     iEmail = icons[0].iEmail,
//     iLinkedin = icons[0].iLinkedin,
//     iDribbble = icons[0].iDribbble;

//   /* Function to populate the team members */
//   function addTeam() {
//     for (let i = 0; i < team.length; i++) {
//       /* Variables for the team */
//       var name = team[i].name,
//         role = team[i].role,
//         desc = team[i].desc,
//         photo = team[i].photo,
//         website = team[i].website,
//         email = team[i].email,
//         linkedin = team[i].linkedin,
//         dribbble = team[i].dribbble;

//       /* Template for the Team Cards */
//       var template = `
//                 <div class="swiper-slide">
//                 <div class="card">
//                     <span class="bg"></span>
//                     <span class="more"></span>
//                     <figure class="photo"><img src="${photo}"></figure>
//                         <article class="text">
//                             <p class="name">${name}</p>
//                             <p class="role">${role}</p>
//                             <p class="desc">${desc}</p>
//                         </article>

//                         <div class="social">
//                         <span class="pointer"></span>
//                         <div class="icons">
//                             <a class="icon" href="${website}" target="_blank" data-index="0"><img src="${iWebsite}"></a>
//                             <a class="icon" href="${email}" target="_blank" data-index="1"><img src="${iEmail}"></a>
//                             <a class="icon" href="${linkedin}" target="_blank" data-index="2"><img src="${iLinkedin}"></a>
//                             <a class="icon" href="${dribbble}" target="_blank" data-index="3"><img src="${iDribbble}"></a>
//                             </div>
//                             </div>
//                     </div>
//                 </div>`;

//       swiperWrapper.insertAdjacentHTML("beforeend", template);
//     }
//   }

//   addTeam();
// });
