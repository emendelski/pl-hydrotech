import './scss/main.scss';
import fullpage from 'fullpage.js';

// eslint-disable-next-line
new fullpage('#fullpage', {
  licenseKey: '891E39CB-32474BA9-909C7F6B-4B8A88C1',
  autoScrolling: true,
  anchors: [
    'header',
    'problem',
    'solution',
    'technology',
    'about',
    'team',
    'contact'
  ],
  menu: '#menu',
  responsiveHeight: 640,
});

//Modal

const openItems = document.querySelectorAll('[data-modal-open]');
const modals = document.querySelectorAll('[data-modal]');

if (openItems.length) {

  openItems.forEach(i => {
    i.addEventListener('click', (e) => {
      e.preventDefault();
      const target = i.dataset.modalOpen;
      const modal = [...modals].find(el => el.dataset.modal === target);
      modal.classList.add('modal--open');
      const closeItems = modal.querySelectorAll('[data-modal-close]');
      closeItems.forEach(cl => {
        cl.addEventListener('click', (ev)=>{
          ev.preventDefault();
          modal.classList.remove('modal--open');
        })
      })
    })
  })
}
