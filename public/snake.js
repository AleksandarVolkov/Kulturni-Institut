let indicator = document.querySelector(".nav-indicator");
let items = document.querySelectorAll(".nav-item");

function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove("is-active");
  });
  indicator.style.width = "".concat(el.offsetWidth / 3, "px");
  indicator.style.left = "".concat(el.offsetLeft + el.offsetWidth / 2, "px");
  el.classList.add("is-active");
}
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    handleIndicator(e.target.parentNode);
  });
  wormAdjust();
  item.classList.contains("is-active") && handleIndicator(item);
});

function wormAdjust() {
  setTimeout(function () {
    let active = document.querySelector(".is-active");
    indicator.style.width = "".concat(active.offsetWidth / 3, "px");
    indicator.style.left = "".concat(active.offsetLeft + active.offsetWidth / 2, "px");
  }, 100);
}

const resizeObserver = new ResizeObserver((entries) => {
  setTimeout(function () {
    wormAdjust(entries);
  }, 100);
});

resizeObserver.observe(main);

function handleIndicatorMobile(elm) {
  mobItems.forEach(function (item) {
    item.classList.remove("is-active-mobile");
  });
  elm.classList.add("is-active-mobile");
}

let mobItems = document.querySelectorAll(".nav-hover-mobile");
mobItems.forEach(function (e) {
  e.addEventListener("click", function (m) {
    handleIndicatorMobile(m.target.parentNode);
  });
  e.classList.contains("is-active-mobile") && handleIndicatorMobile(e);
});
