const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('nav');

// 2. Listen for a click on the burger button
burgerBtn.addEventListener('click', function() {
  // Toggle the 'is-open' class on both elements
  burgerBtn.classList.toggle('is-open');
  nav.classList.toggle('is-open');
});