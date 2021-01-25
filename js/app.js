/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/

const sections =  document.querySelectorAll("[data-nav]");
const menu = document.getElementById("navbar__list");
const mobileMenu =  document.getElementById('navbar__taggle');
const header = document.querySelector('.page__header');
const menuLinks = document.querySelectorAll('#navbar__list li a');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function mobileMenuToggler() {
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        header.classList.toggle('navbar__mobile--active');
    })
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav() {
    sections.forEach( el => {  
        const menuItemName = el.getAttribute("data-nav");
        const menuItem = `<li><a class="menu__link" href="#${el.id}">${menuItemName}</a></li>`
    
        menu.insertAdjacentHTML('beforeend', menuItem);
    });
}



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function scrollTo(el) {
    el.preventDefault();
    console.log("click me");
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();

// Scroll to section on link click

menuLinks.forEach( menulink => {
    menulink.addEventListener('click', scrollTo);
})

// Set sections as active

// init

mobileMenuToggler();

console.log("I am working!")
