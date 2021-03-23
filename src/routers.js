// Este es el punto de entrada de tu aplicacion
import { home } from './lib/home.js';
import { homeLogin } from './lib/home-login.js';
import { login } from './lib/login.js';
import { wall } from './lib/wall.js';
// eslint-disable-next-line import/no-cycle
import { getData } from './firebase.js';

export const routes = {
  '/': home(),
  '/home-login': homeLogin(),
  '/login': login(),
  '/wall': [wall(), getData()],
};

const rootDiv = document.getElementById('root');
export const onNavigate = (pathname) => {
  // eslint-disable-next-line no-unused-expressions
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  // eslint-disable-next-line no-sequences
  ),
  rootDiv.innerHTML = routes[pathname];
};

rootDiv.innerHTML = routes[window.location.pathname];
