import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, deleteHistory, savePost, getHistoryEdit, updateHistory} from './firebase.js';

let editStatus = false;
let id = '';

//Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
    let createUser = document.getElementById('newUser');
    createUser.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/login');
    });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());


//Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
    let enter = document.getElementById('oldUser');
    enter.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/home-login');
    });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());


//login to wall
const buttonLogin = () => {
    let youLogin = document.getElementById('checkIn');
    youLogin.addEventListener('click', (e) => {
        //verificarPasswords()
        e.preventDefault();
        register();
    });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());


//Google to wall
const buttonGoogle = () => {
    let youLoginGoogle = document.getElementById('buttonGoogle');
    youLoginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle();
    });
};

window.addEventListener('DOMContentLoaded', () => buttonGoogle());


//SingIn with inputs
const buttonSingIn = () => {
    let singInWithInputs = document.getElementById('buttonLoginInputs');
    singInWithInputs.addEventListener('click', (e) => {
        e.preventDefault();
        accessJalo();
    });
};

window.addEventListener('DOMContentLoaded', () => buttonSingIn());


//the actions in inputs div wall.
let buttonHistories = document.getElementsByClassName('save');
let formHistories = document.getElementById('task-formPublication');
const title = document.getElementById('task-InputNewPublication');
const description = document.getElementById('task-contentPublication');

const updatePost = document.querySelector('#history-container');
updatePost.addEventListener('click', async (e) => {
    if (e.target.classList.contains('save')) {
        e.preventDefault();
        console.log('si escucho');
        await savePost(title.value, description.value);
        formHistories.reset();
        if (!title.value.trim() || !description.value.trim()) {
            alert('Escribe algo antes de publicar!');
            return;
        }
    };
    if (e.target.classList.contains('save')) {
        e.preventDefault();
        id= doc.id;     
        try {
            if (!editStatus) {
                await savePost(title.value, description.value);
            } else {
                await updateHistory(id, {
                    title: title.value,
                    description: description.value,
                  });
                editStatus = false;
                id = '';
                buttonHistories.innerText = 'Publicar';
              }
            formHistories.reset();
            title.focus();
        } catch (error) {
            console.log(error);
        };
    };
});

//put all the histories and delete
let printCards = document.querySelector('#tasks-container');
printCards.addEventListener('click', async (e) => {
    if ( e.target.classList.contains('deletePublication')) {
       console.log('si puedo borrar')
       if (confirm('¿Estas segurx que quieres eliminar la reseña de viaje?')) {
            // Save it!
            console.log('La historia se ha borrado');
            console.log(e.target.dataset.id);
            await deleteHistory(e.target.dataset.id);
        } else {   
                        // Do nothing!
            console.log('No se borro');
            }    
    }; 
    if (e.target.classList.contains('editPublication')) {
        try{
                console.log('editando'); 
                console.log(e.target.dataset.id);
                const doc = await getHistoryEdit(e.target.dataset.id);
                const post = doc.data();
                const title = document.getElementById('task-InputNewPublication');
                const description = document.getElementById('task-contentPublication');
                title.value = post.title;
                description.value = post.description;
                editStatus = true;
                id= doc.id;
                buttonHistories.innerText = 'Guardar';
        } catch (error) {
            console.log(error);
        }
    }
});

    

