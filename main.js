const menuIcon = document.getElementById('hamburger');
const close = document.getElementById('close');
const menu = document.getElementById('mobile-menu');
const item = document.querySelector('#mobile-menu ul');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

close.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

item.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});