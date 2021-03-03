//formulario para crear tu cuenta.
//import { verificarPasswords } from './main.js';

export const login = () => `
    <div class='theLogin'>
        <div class='logoLogin'>
            <img src='assets/logo-login.png'>
        </div>
        <h2>Bienvenidx, crea tu cuenta</h2>
        <div class='formLogin'>
            <h3>Registro</h3>
            <form class='containerFlexCenter2'>¨
                <input type="name" id="name" class='formLoginInputs' placeholder="Nombre"/>  
                <input type="email" id="email" class='formLoginInputs' placeholder="e-mail"/>
                <input type="password" id="password" class='formLoginInputs' placeholder="password" required/>
                <input type="password" id="passwordToVerify" class='formLoginInputs' placeholder="password" required/>
                <button id='checkIn' class='buttonLogin'>Enviar</button>
            </form>
        </div>
        <div id="msg"></div>
        <!-- Mensajes de Verificación -->
        <div id="error" class="alert alert-danger ocultar" role="alert">
            Las Contraseñas no coinciden!
        </div>
        <div id="ok" class="alert alert-success ocultar" role="alert">
            Cargando...
        </div>
        <!-- Fin Mensajes de Verificación -->
    </div>
    `;


