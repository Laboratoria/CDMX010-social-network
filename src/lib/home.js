
export const myFunction = () => {
  // aqui tu codigo
 
};

//Primera página donde te muestra los botones para acceder a logearte u otro botón para entrar si ya estas logueada.
export const home = () => `
  <div class='home'>
    <div class='logo'>
      <img src='assets/logo-home.png'>
      <img src='assets/avatar.png'>
    </div>
    <form class='flexCenter'>
      <button id='newUser' class='buttons'>crear</button>
      <button id='oldUser' class='buttons'>entrar</button>
    </form>
  </div>
  `;




