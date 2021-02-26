// Este es el punto de entrada de tu aplicacion
import { myFunction, home } from './lib/home.js'
import { myFunction2, homeLogin } from './lib/home-login.js'
import { login } from './lib/login.js';
import { wall } from './lib/wall.js';
import { profile } from './lib/profile.js';

myFunction();
myFunction2();



export const routes = {
    '/': home(), 
    '/home-login':homeLogin(),
    '/login':login,
    '/wall' : wall,
    '/profile' : profile(),
};

const rootDiv = document.getElementById('root');
export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]

   
        // const buttonLogin = document.getElementById('checkIn')
      
        // buttonLogin?.addEventListener('click', (e) => {
        //     e.preventDefault();
        //     console.log('lo que sea');
        // })
    
};

rootDiv.innerHTML =routes[window.location.pathname];





