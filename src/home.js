import { onNavigate } from './router.js';

export const home = (target) => {
  const html = `
    <header>

        <input type="checkbox" id="btnmenu">
        <label for ="btnmenu"><img src="../assets/burger.png"></label>
        
        <nav class="menu">
        <ul>
        <li><a id="mainMenu" href="#">Home</a> </li>
        <li><a id="login" href="#">Iniciar sesion</a></li>
        <li><a id="signUp" href="#">Registro</a></li>
        <li><a id="contact" href="#">Contacto</a> </li>
        </ul>
        </nav>
    
    </header>
   
    `;
  /* "Acerca de" será pantalla de publicacion */
  target.innerHTML = html;

  document.getElementById('login').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });

  document.getElementById('contact').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/contact');
  });

  document.getElementById('signUp').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/signUp');
  });
};
export default home;
