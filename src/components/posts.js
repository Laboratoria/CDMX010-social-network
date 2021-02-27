export const posts = `
<div id="postScreen">
<header class="menu">
      <img src="images/logo app2.png" class="logoMenu">
      <ul class="menuItems">
      <li><a href="">Inicio</a></li>
      <li><a href="">Mi perfil</a></li>
      <li><a href="">Privacidad</a></li>
      <li><a href="">Cerrar sesión</a></li>
      </ul>
      <span class="btnMenu">
      <input type="image" id="alcaldiasIcon" class="menuIcon" src="">
      <input type="image" id="menuIcon" class="menuIcon" src="">
      </span>
</header>
<input type="text" id="post">
<img src="images/imageIcon.png" class="imageIcon">
<select name="alcaldiasPost" class="input" id="alcaldiasPost">
      <option value="obregon">Álvaro Obregón</option>
      <option value="azcapo">Azcapotzalco</option>
      <option value="juarez">Benito Juárez</option>
      <option value="coyoacan">Coyoacán</option>
      <option value="cuajimalpa">Cuajimalpa</option>
      <option value="cuauhtemoc">Cuauhtémoc</option>
      <option value="madero">Gustavo A. Madero</option>
      <option value="iztacalco">Iztacalco</option>
      <option value="iztapalapa">Iztapalapa</option>
      <option value="magdalena">Magdalena Contreras</option>
      <option value="hidalgo">Miguel Hidalgo</option>
      <option value="milpaAlta">Milpa Alta</option>
      <option value="tlahuac">Tláhuac</option>
      <option value="tlalpan">Tlalpan</option>
      <option value="carranza">Venustiano Carranza</option>
      <option value="xochimilco">Xochimilco</option>
    </select>
<input type="button" id="toPost" class="toPost" value="PUBLICAR">
</div>
`;

export const newPost = (createPost) => {
  const post = document.querySelector('#post').value;
  const alcaldias = document.querySelector('#alcaldiasPost').value;
  createPost(post, alcaldias);
};
