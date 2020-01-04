const drawer = document.querySelector('.navigation-drawer');
const openDrawerButton = document.querySelector('#hamburger');
const closeDrawerButton = document.querySelector('#cross');
const navbarEnd = document.querySelector('.navbar-end');
const registerButtons = document.querySelectorAll('.register-button');

// Drawer closing
const navDrawer = document.querySelector('.navigation-drawer');
const navDrawerLinks = navDrawer.querySelectorAll('a');
const navDrawerButton = navDrawer.querySelector('button');

const openDrawer = () => {
  navbarEnd.style.display = 'none';
  drawer.style.display = 'initial';
  closeDrawerButton.style.display = 'initial';
  document.body.style.position = 'fixed';
};

const closeDrawer = () => {
  navbarEnd.style.display = 'flex';
  drawer.style.display = 'none';
  closeDrawerButton.style.display = 'none';
  document.body.style.position = 'static';
};

const registerHash = () => {
  window.location.hash = '#/register';
};

openDrawerButton.addEventListener('click', openDrawer);
closeDrawerButton.addEventListener('click', closeDrawer);

registerButtons.forEach(registerButton => {
  registerButton.addEventListener('click', registerHash);
});

navDrawerLinks.forEach(navDrawerLink =>
  navDrawerLink.addEventListener('click', closeDrawer)
);
navDrawerButton.addEventListener('click', closeDrawer);

if (module.hot) {
  module.hot.accept();
}
