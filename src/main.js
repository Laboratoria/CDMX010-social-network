import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo } from './firebase.js';


//Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
    let createUser = document.getElementById('newUser');
    createUser.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/login');
    });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());


//Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
    let enter = document.getElementById('oldUser');
    enter.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home-login');
    });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());

/*export function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    let pass1 = document.getElementById('password');
    let pass2 = document.getElementById('passwordToVerify');
 
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } 

    if (pass1.value === pass2.value){
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        // Desabilitamos el botón de login 
        document.getElementById("login").disabled = true;
 
        // Refrescamos la página (Simulación de envío del formulario) 
        onNavigate('/wall')};
 
        return true;
    };*/

//login a wall
const buttonLogin = () => {
    let youLogin = document.getElementById('checkIn');
    youLogin.addEventListener('click', (e) => {
        //verificarPasswords()
        e.preventDefault();
        register();
    });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());


//Google a wall
const buttonGoogle = () => {
    let youLoginGoogle = document.getElementById('buttonGoogle');
    youLoginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogle());


//Google a wall con inputs
const buttonGoogleInput = () => {
    let youLoginGoogleInputs = document.getElementById('buttonLoginInputs');
    youLoginGoogleInputs.addEventListener('click', (e) => {
        e.preventDefault();
        accessJalo();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogleInput());


