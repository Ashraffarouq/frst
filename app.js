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
var list = document.getElementsByTagName("li")
/**
 * Define Global Variables
 * 
*/
// to create nav bar , 
const sections = Array.from(document.querySelectorAll('section')); //create a variable to store all sections  
const menu = document.getElementById('navbar__list'); // to create the list items inside ul
let numberOfListItems= sections.length; 

document.addEventListener ("click", listItems)
for (i=0; i<list; i++ ){
    list[i].innerHTML=`<a calss= "menu__link" href= "#${sLink}" >${sName}</a>`;
}
/**
* End Global Variables
* Start Helper Functions
* 
*/
//Exercise programmatically builds navigation
// scrolls to anchors from navigation.
function listItems(){
 for(section of sections){
     sName = section.getAttribute('data-nav'); //it will show the name in the Navegator bar 
     sLink = section.getAttribute('id');       // section link will be from the id
     listItems =document.createElement('li');   // creating List Items with anchor
     listItems.innerHTML=`<a calss= "menu__link" href= "#${sLink}" >${sName}</a>`; 
     menu.appendChild(listItems); }              // adding the name to the menu to loop for all sections 
}
// highlights section in viewport upon scrolling.
function sectionInview (elem){                     // to view the rectangle of the section in the port 
 let sectionPostion = elem.getBoundingClientRect();
  return (sectionPostion.top >= 0);
}
function activeClass () {
 for (section of sections) { 
 if (sectionInview (section)){                          // if the section view
 if(!section.classList.contains("your-active-class")) {  // if dosn't contain the active class 
     section.classList.add("your-active-class");  // please add the active class 
     }
 } 
 else {
     section.classList.remove("your-active-class");    // if not in view please remove from the active view

     }

 }
}


/**
* End Helper Functions
* Begin Main Functions
* 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
* 
*/
listItems();

// Build menu 

document.addEventListener('scroll',activeClass);
// Scroll to section on link click

// Set sections as active


