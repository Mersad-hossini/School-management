// * Nabar js code

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav > ul');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

// * user profile info

let subMenu = document.getElementById('subMenu');

function toggleMenu () {
    subMenu.classList.toggle('open-menu');
}

const carousel = new bootstrap.Carousel('#myCarousel')