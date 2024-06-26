const modalWindow = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.hero-button');
const closeModalBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const openMobileMenuBtn = document.querySelector('.open-mobile-menu-btn');
const closeMobileMenuBtn = document.querySelector('.mobile-close-btn');

openModalBtn.addEventListener('click', () => {
  modalWindow.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
  modalWindow.classList.remove('is-open');
});

openMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

closeMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
