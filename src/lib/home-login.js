
export const myFunction2 = () => {
  // aqui tu codigo

};

//Vista que te da acceso cuando ya te encuentras logueada.
export const homeLogin = () => `
  <div class='homeLogin'>
    <div class='logo2'>
      <img src='assets/logo-login.png'>
    </div>
    <div class='flexCenter3'>
        <h3>Login</h3>
        <div class='google'>
        <img src='assets/google-boton.png'>
        </div>
        <div class='flexCenter3'>
          <input type="email" id="emailLog" class='formLogin2' placeholder="e-mail"/>
          <input type="password" id="passwordLog" class='formLogin2' placeholder="password"/>
          <button class='buttons3' id="botonEntrar">Login</button>
        </div>
        <h3 id="login"></h3>
    </div>
  </div>
  `;