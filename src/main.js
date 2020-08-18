import './scss/main.scss';
import fullpage from 'fullpage.js';

// eslint-disable-next-line
new fullpage('#fullpage', {
  licenseKey: '891E39CB-32474BA9-909C7F6B-4B8A88C1',
  autoScrolling:true,
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
});
