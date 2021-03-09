
import { createUser } from "./lib/aut.js";

 export const sign = (target) =>{
    const html= `
<h1 id="titulo">¡A Pueblear!</h1>
<section class="form-register">
<h4> Regístrate </h4>
<input class="controls" type="text" name="nombre" id="name" placeholder="Ingrese su Nombre Completo">
<input class="controls" type="text" name="nombre" id="email" placeholder="Ingrese su Correo">
<span id ='veryfyMail'></span>
<input class="controls" type="date" name="date of birth" id="date" placeholder="Ingrese su fecha de nacimiento">
<input class="controls" type="password" name="nombre" id="password" placeholder="Escriba una Contraseña">
<button class=" boton" type="button" id ="register"> Ingresar</button>
<p id="pRegistro">ó registrate con<p>

<div id="redes">
<button class="btn-r" id="facebook-btn"><img src="../Assets/facebook.png.png"></button>
<button class="btn-r" id="google-btn"><img src="../Assets/google.png.png"></button>
<button class="btn-r" id="Twitter-btn"><img src="../Assets/twittericon.png.png"></button>
</div>
<p id="volverLogin">¿Ya tengo una cuenta?<p>
</section>
`
target.innerHTML = html


const btnRegistro=document.getElementById("register");

btnRegistro.addEventListener("click" ,(e) => {
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    createUser(email, password)
    console.log(email)

})
function validarEmail(valor) {
    
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     alert("La dirección de email " + valor + " es correcta!.");
    } else {
     alert("Escribe bien, bobo!.");
    }
  }

  email.addEventListener('event', function (){
     const email=document.getElementById("email").value;

    validarEmail(email);
    
  

})  




}
//Función que revisa si el correo está bien escrito//





export default sign;

