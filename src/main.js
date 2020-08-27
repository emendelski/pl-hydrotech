import './scss/main.scss';
import IScroll from 'fullpage.js/vendors/scrolloverflow'; // eslint-disable-line no-unused-vars
import fullpage from 'fullpage.js';

// eslint-disable-next-line
const fp = new fullpage('#fullpage', {
  licenseKey: '891E39CB-32474BA9-909C7F6B-4B8A88C1',
  autoScrolling: true,
  anchors: ['header', 'problem', 'solution', 'technology', 'about', 'team', 'contact'],
  menu: '#menu',
  scrollOverflow: true,
  responsiveHeight: 640,
  responsiveWidth: 768,
  bigSectionsDestination: 'top',
});

// Nav

const navBtn = document.querySelector('[data-nav-toggle]');
const navContent = document.querySelector('[data-nav]');

if (navBtn) {
  navBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (navContent) {
      navContent.classList.add('nav__list--open');
      navContent.addEventListener('click', () => {
        navContent.classList.remove('nav__list--open');
      });
    }
  });
}

// Arrows

const arrows = document.querySelectorAll('[data-next]');

if (arrows.length) {
  arrows.forEach((arr) => {
    arr.addEventListener('click', (e) => {
      e.preventDefault();
      fp.moveSectionDown();
    });
  });
}

//Modal

const openItems = document.querySelectorAll('[data-modal-open]');
const modals = document.querySelectorAll('[data-modal]');

if (openItems.length) {
  openItems.forEach((i) => {
    i.addEventListener('click', (e) => {
      e.preventDefault();
      const target = i.dataset.modalOpen;
      const modal = [...modals].find((el) => el.dataset.modal === target);
      modal.classList.add('modal--open');
      document.body.style.overflow = 'hidden';
      fp.setAllowScrolling(false);
      fp.setKeyboardScrolling(false);
      const closeItems = modal.querySelectorAll('[data-modal-close]');
      closeItems.forEach((cl) => {
        cl.addEventListener('click', (ev) => {
          ev.preventDefault();
          modal.classList.remove('modal--open');
          document.body.style.overflow = 'visible';
          fp.setAllowScrolling(true);
          fp.setKeyboardScrolling(true);
        });
      });
    });
  });
}
