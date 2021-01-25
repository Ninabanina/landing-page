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

function changeLinkState() {
   const menuLinks = document.querySelectorAll('#navbar__list li a');
   let index = sections.length;

   while(--index && window.scrollY + 400 < sections[index].offsetTop) {}
  
   sections.forEach((section) => section.classList.remove('section--active'));
   menuLinks.forEach((menuLink) => menuLink.classList.remove('active'));

   sections[index].classList.add('section--active');
   menuLinks[index].classList.add('active');
}

// Scroll to anchor ID using scrollTO event

function scrollTo(el) {
    el.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;
    
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

function linkHandler() {
    const menuLinks = document.querySelectorAll('#navbar__list li a');

    menuLinks.forEach( el => {
        el.addEventListener('click', scrollTo);
    })  
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();

// Scroll to section on link click

linkHandler();

// Set sections as active

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// init

mobileMenuToggler();
