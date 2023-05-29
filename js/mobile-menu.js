const burger = document.querySelector('.burger-menu__trigger');
const nav = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

});


closeMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

});