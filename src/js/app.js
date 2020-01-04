const drawer = document.querySelector('.navigation-drawer');
const openDrawerButton = document.querySelector('#hamburger');
const closeDrawerButton = document.querySelector('#cross');
const navbarEnd = document.querySelector('.navbar-end');
const registerButtons = document.querySelectorAll('.register-button');

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

const registerHash = () => {
  window.location.hash = '#/register';
};

openDrawerButton.addEventListener('click', openDrawer);
closeDrawerButton.addEventListener('click', closeDrawer);

registerButtons.forEach(registerButton => {
  registerButton.addEventListener('click', registerHash);
});

if (module.hot) {
  module.hot.accept();
}
