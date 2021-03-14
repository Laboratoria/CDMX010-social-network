//This is the wall
export const wall = () =>`
    <div class='wall'>
        <div class='headerWall'>
            <img src='assets/logo-home.png'>
            <img id='avatar' src='assets/avatar.png'>
        </div>
        <div class='createPublication' id='history-container'>
            <form class='containerFlexCenter4' id='task-formPublication'>
                <div class='card'>    
                    <div id='from-groupInput'>
                        <input type='text' id='task-InputNewPublication' placeholder='Escribe...'></input>
                    </div>
                    <div class='form-group'>
                        <textarea class="toPublicated" id='task-contentPublication' rows="4" cols="26"></textarea>
                    </div>
                    <button type='submit' class='buttonNewPublication' id='save'>Publicar</button>
                </div>
            </form>
        </div>
        <div class='createPublication2' id='tasks-container'>
        </div>
    </div> 
    `;
