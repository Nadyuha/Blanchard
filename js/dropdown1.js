const toggles = document.querySelectorAll('.header__menu-btn');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
  toggle.parentNode.classList.toggle('active');
  });
});
