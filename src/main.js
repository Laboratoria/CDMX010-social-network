import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, deleteHistory, savePost, getHistoryEdit, updateHistory, getData} from './firebase.js';

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


//Publicated post in Wall
let buttonHistories = document.getElementById('save');
let formHistories = document.getElementById('task-formPublication');
buttonHistories.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('si escucho');
    let title = document.getElementById('task-InputNewPublication').value;
    let description = document.getElementById('task-contentPublication').value;
    savePost(title, description);
    formHistories.reset();
});


//put all the histories and delete
let editStatus = false;
let id = '';
let printCards = document.querySelector('#tasks-container');
printCards.addEventListener('click', async (e) => {
    if (e.target.classList.contains('save')) {
        e.preventDefault();
        console.log('yaaas');
        const post = {
            title : title.value,
            description : description.value,
            date: Date.now(),
        };
        if (!title.value.trim() || !description.value.trim()) {
            console.log('Input vacío!');
            return;
        }
    
        savePost(post)
        .then((docRef) => {
            console.log('Document ID: ', docRef.id)
            title.value = "";
            description.value = "";
        })
        .catch((error) => console.log(error));
    };
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


const updatePost = document.querySelector('#history-container');
updatePost.addEventListener('click', async (e) => {
   if (e.target.classList.contains('save')) {
        const title = document.getElementById('task-InputNewPublication');
        const description = document.getElementById('task-contentPublication'); 
        id= doc.id;     
        try {
            if (editStatus === true) {
                await updateHistory(id, {
                    title: title.value,
                    description: description.value,
                  });
                  editStatus = false;
                  id = ''
                  buttonHistories.innerText = 'Save';
            } else {
                await savePost(title.value, description.value);
              }
            formHistories.reset();
            title.focus();
        } catch (error) {
            console.log(error);
        };
        buttonHistories.reset();
    } 
});
    



window.addEventListener('DOMContentLoaded', (e) => {
    getData(e);
  });
