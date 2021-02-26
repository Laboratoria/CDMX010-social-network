// Este es el punto de entrada de tu aplicacion
import { home } from './lib/home.js'
import { homeLogin } from './lib/home-login.js'
import { login } from './lib/login.js';
import { wall } from './lib/wall.js';
import { profile } from './lib/profile.js';

export const routes = {
    '/': home(), 
    '/home-login': homeLogin(),
    '/login': login(),
    '/wall' : wall(),
    '/profile' : profile()
};

const rootDiv = document.getElementById('root');
export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
};

rootDiv.innerHTML =routes[window.location.pathname];