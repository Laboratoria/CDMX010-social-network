
export const sign = (target) =>{
    const html= `
<h1>I am sign Page</h1>
<section class="form-register">
<h4> Formulario de Registro</h4>
<input class"controls" type="text" name="nombre" id="name" placeholder="Ingrese su Nombre Completo">
<input class"controls" type="text" name="nombre" id="mail" placeholder="Ingrese su Correo">
<input class"controls" type="password" name="nombre" id="password" placeholder="Escriba una Contraseña">
<button type="button" id ="register"> Continuar</button>

<div id="redes">
</div>
</section>
`
target.innerHTML = html

}
export default sign;
