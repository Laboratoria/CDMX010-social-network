//This is the wall
export const wall = () =>`
    <div class='wall'>
        <div class='headerWall'>
            <img src='assets/logo-home.png'>
            <img src='assets/avatar.png'>
        </div>
        <div class='createPublication'>
            <form class='containerFlexCenter4'>
                <input type='text' id='InputNewPublication' placeholder='Escribe...'></input>
                <button class='buttonNewPublication'>Publicar</button>
            </form>
        </div>
        <div class='publication'>
                <button id='avatarPublication'></button>
                <textarea class="alreadyPublicated"  rows="4" cols="32"></textarea>
                <button id='enviaja'></button>
        </div>
        <div class='publication'>
                <button id='avatarPublication'></button>
                <textarea class="alreadyPublicated"  rows="4" cols="32"></textarea>
                <button id='desenviaja'></button>           
        </div>    
    </div>
    `;
