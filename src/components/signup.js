import { onNavigate } from '../routes.js';

export const signUpView = (target, firebase) => {
  const html = `
  <div id="signUpViewContainer" class="container">
      <img id="logo" src="img/logo_mochilazo.png" alt="MXCHILAZO">
      <h2>CREAR CUENTA</h2>
      <input type="email" id="signupEmail" class="input" placeholder="Correo electrónico" required>
      <input  type="password" id="signupPassword" class="input" placeholder="Contraseña" required>
      <input type="button" id="btnSignUp" class="btnSignUp" value="REGISTRARME">
      <h3>o con tus redes sociales</h3> 
      <button type="submit"  id="btnGmail" class="btnGmail"><img src="img/google.png" alt="Gmail" id="gmailIcon"></button>
      <button type="submit" id="btnFacebook" class="btnFacebook"><img src="img/facebook.png" alt="Facebook" id="facebookIcon"></button>
      <input type="image" id="returnArrow" class="returnArrow" src="img/Vector.png">
    </div>
  `;
  target.innerHTML = html;

  document.getElementById('btnSignUp').addEventListener('click', () => {
    const email = document.querySelector('#signupEmail').value;
    const password = document.querySelector('#signupPassword').value;
    firebase
      .newUserAccount(email, password)
      .then((user) => {
        firebase.saveData(user);
        onNavigate('/mxchilazo');
        // localStorage.setItem('idUser', user.user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  document.getElementById('btnGmail').addEventListener('click', () => {
    firebase
      .googleAuth()
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        onNavigate('/mxchilazo');
      });
  });

  document.getElementById('btnFacebook').addEventListener('click', () => {
    firebase
      .facebookAuth()
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const credential = result.credential;
        const token = credential.accessToken;
        const user = result.user;
        onNavigate('/mxchilazo');
      });
  });

  document.getElementById('returnArrow').addEventListener('click', () => {
    onNavigate('/');
  });
};
