// Menu
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.close');
      menuLink = document.querySelector('.menu__top-box');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.addEventListener('click', () => {
    menu.classList.remove('active');
});