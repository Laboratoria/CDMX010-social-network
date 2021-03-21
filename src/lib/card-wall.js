// import { totalLike } from '../firebase.js';

export const cardWall = (post) => `
    <div class='divCard'>
        <div class='avatarsCard'>
            <button id='avatarPublication'></button>
        </div>
        <div class='textCard'>
            <h3 class='h3Publication'>${post.title}</h3>
            <p>${post.description}</p>
        </div>
        <div class='enviajaCard'>
            <button class='desenviaja' data-id = '${post.id}'></button>
            <div class= 'desenviajaDiv' data-id ='${post.id}'>${post['like'].length}</div>
        </div>
        <div class='buttonCard'>
            <button class='buttonNewPublication2 editPublication' data-id = '${post.id}'>Editar</button>
            <button class='buttonNewPublication2 deletePublication' data-id = '${post.id}'>Borrar</button>
        </div>
    </div>
    `;