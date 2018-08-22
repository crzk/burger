//hamburger menu 

let menu = document.querySelector('#hamburgerMenu');
let openButton = document.querySelector('#menuOpen');
let closeButton = document.querySelector('#menuClose');
let body = document.querySelector('body');
let menuOption = document.querySelectorAll('.hamburger-menu__link')

openButton.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.toggle('hamburger-menu__active');
    body.classList.toggle('body-active-menu');
})

closeButton.addEventListener('click', function(e){
    e.preventDefault();
    menu.classList.toggle('hamburger-menu__active');
    body.classList.toggle('body-active-menu');
})

for (var i = 0; i < menuOption.length; i++) {
    menuOption[i].addEventListener('click', function(e){
        e.preventDefault();
        menu.classList.toggle('hamburger-menu__active');
        body.classList.toggle('body-active-menu');
    })
}




