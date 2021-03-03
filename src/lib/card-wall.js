import {task} from '../main.js'

export const cardWall = () =>`
                <div class='card'>
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <div>
                        <button id='avatarPublication'></button>
                        <button id='desenviaja'></button> 
                    </div>
                    <div>
                        <button class='buttonNewPublication'>Borrar</button>
                        <button class='buttonNewPublication'>Borrar</button>
                    </div>
                </div>`;