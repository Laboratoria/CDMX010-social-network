import { home } from './home.js';
import { posting } from './posting.js';
import { post } from './post.js';

// console.log('al cargar holi');
const routes = {
  '/': home,
  '/post': post,
  '/posting': posting,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

// Buttons
const goToHome = document.getElementById('toHome');
const goToForm = document.getElementById('toForm');
const goToPost = document.getElementById('toPost');

goToHome.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});
goToForm.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});
goToPost.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/posting');
});
