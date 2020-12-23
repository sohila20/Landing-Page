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
 * Define Variables
 * 
*/

var text;
var li;
var link;
var sections=document.querySelectorAll('section');
const ul = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment(); 

/**
 * End Variables
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(element => {

    li=document.createElement('li');
    link=document.createElement('a');
    text=document.createTextNode(element.getAttribute("data-nav"));

    link.appendChild(text);
    link.setAttribute("href","#"+element.getAttribute("id"));
    li.appendChild(link);
    fragment.appendChild(li);

});
    ul.appendChild(fragment);


// Add class 'active' to section when near top of viewport
// Scroll to section on link click
// Set sections as active
const ulList = document.querySelectorAll('li');
const linkList = document.querySelectorAll('a');
document.addEventListener('scroll',function(){
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); 
        if(rect.top>-20&&rect.top<500){
            section.classList.add("active");
            linkList.forEach(a => {
                if(section.getAttribute("data-nav")===a.textContent){
                    a.classList.add("active");
                }
                else{
                    a.classList.remove("active");
                }
            });
           
        }
        else{
            section.classList.remove("active");
        }
    });
})

/**
 * End Main Functions
 * 
*/












