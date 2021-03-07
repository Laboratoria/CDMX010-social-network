export const cardWall = (post) =>{
    return`
        <div class='divCard'>
            <div class='avatarsCard'>
                <button id='avatarPublication'></button>
            </div>
            <div class='textCard'>
                <h3 class='h3Publication'>${post.title}</h3>
                <p>${post.description}</p>
            </div>
            <div class='enviajaCard'>
                <button id='desenviaja'></button> 
            </div>
            <div class='buttonCard'>
                <button class='buttonNewPublication2'>Editar</button>
                <button class='buttonNewPublication2'>Borrar</button>
            </div>
        </div>`};