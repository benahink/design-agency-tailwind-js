// show and hide hamburger menu 
const menu = document.getElementById("menu");
const menuItems = document.getElementById("menu-items");

function menuToggle() {
  menu.classList.toggle("navbar-show");
};

// browser resize listener 
window.addEventListener("resize", menuResize);

// resize menu if width is changed
function menuResize() {
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
  	menu.classList.remove("navbar-show");
  };
};
