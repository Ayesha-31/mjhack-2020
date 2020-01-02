const drawer = document.querySelector('.navigation-drawer');
const openDrawerButton = document.querySelector('#hamburger');
const closeDrawerButton = document.querySelector('#cross');
const navbarEnd = document.querySelector('.navbar-end');

openDrawerButton.onclick = function() {
  navbarEnd.style.display = 'none';
  drawer.style.display = 'initial';
  closeDrawerButton.style.display = 'initial';
};

closeDrawerButton.onclick = function() {
  navbarEnd.style.display = 'initial';
  drawer.style.display = 'none';
  closeDrawerButton.style.display = 'none';
};
