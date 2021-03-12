//Primera página donde te muestra los botones para acceder a logearte u otro botón para entrar si ya estas logueada.
export const home = () => `
  <div class='home'>
    <div class='logoHome'>
      <img id= 'logoHome' src='assets/logo-home.png'>
    </div>
    <form class='containerFlexCenter'>
      <button id='newUser' class='buttonHome'>crear</button>
      <button id='oldUser' class='buttonHome'>entrar</button>
    </form>
  </div>
  `;