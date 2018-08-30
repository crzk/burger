
let menu = document.querySelector('#hamburgerMenu');
let openButton = document.querySelector('#menuOpen');
let closeButton = document.querySelector('#menuClose');
let body = document.querySelector('body');
let menuOption = document.querySelectorAll('.hamburger-menu__link')

//hamburger menu 

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

//hamburger menu end

//team accordeon 
let teamAccordeon = function(){  

    let teamLink = document.querySelectorAll('.team-accordeon__link');
    
    teamLink.forEach(function(teamMember){
        
        teamMember.addEventListener('click', function(e){
            e.preventDefault();
            let activeTeamMember = document.querySelector('.team-accordeon__item.team-active');

            if (activeTeamMember){
                activeTeamMember.classList.remove('team-active');
            }
            if (!activeTeamMember || activeTeamMember.querySelector('.team-accordeon__link') !== this){
            this.closest('.team-accordeon__item').classList.add('team-active');
            }
        })
    })
}
teamAccordeon();
//team accordeon end

//menu accordeon
let menuAccordeon = function(){  

    let menuLink = document.querySelectorAll('.menu-accordeon__link');
    
    menuLink.forEach(function(menuCategory){
        
        menuCategory.addEventListener('click', function(e){
            e.preventDefault();
            let activeMenuCategory = document.querySelector('.menu-accordeon__item.menu-active');

            if (activeMenuCategory){
                activeMenuCategory.classList.remove('menu-active');
            }

            if (!activeMenuCategory || activeMenuCategory.querySelector('.menu-accordeon__link') !== this){
                this.closest('.menu-accordeon__item').classList.add('menu-active');
            }
        })
    })
}
menuAccordeon();

let menuAccordeonClose = function(){  

    let menuCloseButton = document.querySelectorAll('.phones-close');
    
    menuCloseButton.forEach(function(closeLink){
        
        closeLink.addEventListener('click', function(e){
            e.preventDefault();
            let activeMenuCategory = document.querySelector('.menu-accordeon__item.menu-active');

            if (activeMenuCategory){
                activeMenuCategory.classList.remove('menu-active');
            }
        })
    })
}
menuAccordeonClose();
//menu accordeon end


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