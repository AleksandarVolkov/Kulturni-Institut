const optionMenu = document.querySelectorAll(".select-menu");
let activeMenu = null; // keep track of currently active menu

optionMenu.forEach((menuItem) => {
  const selectBtn = menuItem.querySelector(".select-btn"),
    options = menuItem.querySelectorAll(".option"),
    sBtn_text = menuItem.querySelector(".sBtn-text");

  menuItem.addEventListener("click", (event) => {
    event.stopPropagation(); // stop propagation of click event

    // Remove "active" class from previously active menu
    if (activeMenu && activeMenu !== menuItem) {
      activeMenu.classList.remove("active");
    }

    menuItem.classList.toggle("active");
    activeMenu = menuItem; // set current menu as active
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation(); // stop propagation of click event
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;

      menuItem.classList.remove("active");
      activeMenu = null; // reset active menu
    });
  });

  // Add event listener to window object to close menu when user clicks outside
  window.addEventListener("click", (event) => {
    if (activeMenu && !activeMenu.contains(event.target)) {
      activeMenu.classList.remove("active");
      activeMenu = null; // reset active menu
    }
  });
});
