// Menu burger
// Quando a tela ficar menor
let menu = document.querySelector('#btn-menu-burger');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};