// AOS.init();

// function classToggle() {
//     const navs = document.querySelectorAll('.navbar-items')    
//     navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
// }
  
// document.querySelector('.navbar-link-toggle').addEventListener('click', classToggle);


var navButton = document.querySelector("#nav-menu-button");
var navUl = document.querySelector(".nav-ul");

function toggleMobileMenu() {
    navUl.classList.toggle("hide-ul");
    console.log(this);
}

navButton.onclick = toggleMobileMenu;
