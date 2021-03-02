import { home } from './home.js';
import posting from './posting.js';
import { post } from './post.js';
import { singlepost } from './single-post.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': home,
  '/posting': posting,
  '/post': post,
  '/singlepost': singlepost,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  const component = routes[pathname];
  component(rootDiv);
};

window.onpopstate = () => {
  const component = routes[window.location.pathn];
  component(rootDiv);
};
