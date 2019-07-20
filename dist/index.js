//javascript for opening and closing menu.

//get open and close buttons
const openBtn = document.querySelector('.fas.fa-bars');
const closeBtn = document.querySelector('.close');

//get navigations, links and sublinks
const nav = document.querySelector('.sidenav');
const links  = document.querySelector('.head-nav');
const subLink = document.querySelector('.sub-nav');

//add click event listener to buttons
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

//adding event listener to current page link items
links.firstElementChild.addEventListener('click', closeMenu);
subLink.firstElementChild.addEventListener('click', closeMenu);
subLink.children[1].addEventListener('click', closeMenu);
subLink.children[2].addEventListener('click', closeMenu);


// function to open menu
function openMenu(){
  nav.classList.add('show');
}

//function to close menu
function closeMenu(){
  nav.classList.remove('show');
}

