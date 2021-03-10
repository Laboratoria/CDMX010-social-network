import { onNavigate } from './router.js';

export const home = (target) => {
  const html = `
    <header>

        <input type="checkbox" id="btnmenu">
        <label for ="btnmenu"><img src="../assets/burger.png"></label>
        
        <nav class="menu">
        <ul>
       
        
         <li><a id="contact" href="#">Creadoras :3</a> </li>
        </ul>
        
    </nav>
    <h1 class = "rsTitle"> Red Social <h1>
    <p class="rsDesc"> Ahora tendrás a quién preguntarleeee qué camión tomar para ir al Nevado de Toluca y no perderte en el intento
    ;) ;) ¿Comiste ricooo y quieres recomendarle a todos? Aquí sí es el espacio. Date vuelo con tus recomendaciones </p>


    <button type= "button" class= "signUpButton" id= "signUpButton" href="#"> Regístrate </button>
    <button type= "button" class= "logInButton" id= "logInButton" href="#"> Inicia sesión </button>

    </header>
   
    `
    
    /*"Acerca de" será pantalla de publicacion*/
    target.innerHTML = html

    document.getElementById('logInButton').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/login')
    })

    document.getElementById('signUpButton').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/signUp')
    })

    document.getElementById('contact').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/contact')
    })

  

    /*document.getElementById('mainMenu').addEventListener('click', (e) => {
            e.preventDefault()
            onNavigate('/')
        })*/

}
export default home;
