// Global variables
const navBar = document.querySelector("#navbar__list");
const fixedHeadings = document.querySelectorAll(".fixed__heading");
const sections = document.getElementsByTagName("section");
const button = document.querySelector("#buttonContent");
const footer = document.querySelector(".page__footer");
const fragment = document.createDocumentFragment();

// Function that creates dynamically the NavBar
function createNavBar (event) {
    for (section of sections) {
        let newElement = document.createElement('li');
        // REMOVE IF
        if (section.id == "section1") {
            newElement.innerHTML = `<a class="active menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
            fragment.appendChild(newElement);
        } else {
            newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
            fragment.appendChild(newElement);
        }    
    }
        navBar.appendChild(fragment);
        
}   
createNavBar();

//Variables made with the navbar
const menuLink = document.querySelectorAll(".menu__link");
const navList = document.querySelector('.navbar__menu');

// Showing the sections content only when the linked Nav button is clicked
function showSection () {
    navList.addEventListener('click', function showContent (event) {
        event.preventDefault();
        for (section of sections) {
            section.style.display = "none";
            let currentSelection = event.target.id;
            let sectionNumber = currentSelection.slice(-1);
            let element = document.querySelector('#section'+sectionNumber);
            element.style.display = "block";
            //Add border only when a section is shown
            footer.setAttribute('style', 'border-top: 2px inset #ccc;');
            element.scrollIntoView({behavior: "smooth"});
        }  
    })
}    
showSection();

// Highlights the clicked menu item. Initially no item is highlighted
function activeItem (){
    let initialActive = document.querySelector(".active");
    initialActive.classList.remove("active");

    for (item of menuLink) {
        item.addEventListener('click', function (event) {
            initialActive.className += " active";
            let oldItem = document.querySelectorAll(".active");
            for (element of oldItem) {
            element.classList.remove("active");
            }
            let current = event.target.id;
            let newActive = document.getElementById(current);
            newActive.className += " active";
            
        })
    }
}
activeItem();

// Function to display the menu list on Mobile & Tablet layouts    
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function toggleMenu(menu) {
    // Menu animation
    menu.classList.toggle("change");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {navBar.style.display = "block"}
} 

// if (section.id == "section1") {
//     newElement.innerHTML = `<a class="active menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
//     fragment.appendChild(newElement);
// } else {
//     newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
//     fragment.appendChild(newElement);
// }    
// }
// navBar.appendChild(fragment);