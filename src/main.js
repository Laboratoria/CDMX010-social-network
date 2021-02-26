import { myFunction1 } from './lib/login.js';
import { onNavigate } from './routers.js';
import { myFunction } from './lib/home.js';
import { myFunction2 } from './lib/home-login.js';
import { registrarse } from './firebase.js';

// myFunction();
// myFunction1();
// myFunction2();

const enter = document.getElementById('oldUser');
const createUser = document.getElementById('newUser');


enter?.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/home-login');
  console.log("Click en entrar")
  const youLogin = document.getElementById('botonEntrar');
  youLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Click en login")
    registrarse();
  });

});

createUser?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("click en crear cuenta")
  onNavigate('/login');
});
