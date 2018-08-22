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

//widgets

//team & menu accordeons 
let teamAcco = document.querySelector('.team-accordeon');
let menuAcco = document.querySelector('.menu-accordeon');
let phonesClose = document.querySelector('.phones-close');
let menuContent = document.querySelector('.menu-accordeon__content');
let menuItem = document.querySelector('.menu-accordeon__item');

teamAcco.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target.nodeName === 'A'){
        e.target.parentNode.classList.toggle('team-active')
    }
})

menuAcco.addEventListener('click', function(e){
    e.preventDefault();
    
    if (e.target.nodeName === 'A'){
        e.target.parentNode.classList.toggle('menu-active')
    }

    if(e.target.nodeName === 'DIV'){
        e.target.parentNode.parentNode.classList.toggle('menu-active')
    }

    if(e.target.nodeName === 'IMG'){
        e.target.parentNode.parentNode.parentNode.classList.toggle('menu-active')
    }

})


//slider
//slider rotation



//ingredients popup slider__ingredients-active
let ingredients = document.querySelector('.slider__ingredients');
let ingredientsClose = document.querySelector('.ingredients-close');

ingredients.addEventListener('mouseover', function(e){
   ingredients.classList.add('slider__ingredients-active')
})

ingredients.addEventListener('mouseleave', function(e){
    ingredients.classList.remove('slider__ingredients-active')
 })

 ingredientsClose.addEventListener('click', function(e){
    e.preventDefault();
    ingredients.classList.remove('slider__ingredients-active')
 })