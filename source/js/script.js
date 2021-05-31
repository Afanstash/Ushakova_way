var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var logoLink = document.querySelector('.page-header__logo-link');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    logoLink.classList.add('page-header__logo-link--hidden');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    logoLink.classList.remove('page-header__logo-link--hidden');
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (navMain.classList.contains("main-nav--opened")) {
      evt.preventDefault();
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      logoLink.classList.remove('page-header__logo-link--hidden');
    }
  }
});
