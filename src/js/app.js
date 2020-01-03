const drawer = document.querySelector('.navigation-drawer');
const openDrawerButton = document.querySelector('#hamburger');
const closeDrawerButton = document.querySelector('#cross');
const navbarEnd = document.querySelector('.navbar-end');

const openDrawer = () => {
  navbarEnd.style.display = 'none';
  drawer.style.display = 'initial';
  closeDrawerButton.style.display = 'initial';
};

const closeDrawer = () => {
  navbarEnd.style.display = 'flex';
  drawer.style.display = 'none';
  closeDrawerButton.style.display = 'none';
};

openDrawerButton.addEventListener('click', openDrawer);
closeDrawerButton.addEventListener('click', closeDrawer);
