//formulario para crear tu cuenta.
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
                <input type="password" id="password" class='formLoginInputs' placeholder="password"/>
              <button id='checkIn' class='buttonLogin'>Enviar</button>
            </form>
            <!--verificar PASSWORD-->
        </div>  
    </div>
    `;


// export const showAlert = () => {
//     var name = document.getElementById('name').value;
//     alert(`Bienvenidx a Jalö ${name}
//     !Tu red social para escribir sobre tus lugares magicos en el mundo!`);
// };