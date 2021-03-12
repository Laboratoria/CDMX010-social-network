import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, deleteHistory, historyRef, getHistoryEdit, updateHistory} from './firebase.js';
import { cardWall } from './lib/card-wall.js';

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


//Google a wall with inputs
const buttonGoogleInput = () => {
    let youLoginGoogleInputs = document.getElementById('buttonLoginInputs');
    youLoginGoogleInputs.addEventListener('click', (e) => {
        e.preventDefault();
        accessJalo();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogleInput());


//Publicated porst in Wall
let buttonHistories = document.getElementById('save');
let formHistories = document.getElementById('task-formPublication');
buttonHistories.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('si escucho');
    let title = document.getElementById('task-InputNewPublication').value;
    let description = document.getElementById('task-contentPublication').value;
    
    historyRef(title, description);
    formHistories.reset();
});



//put all the histories and delete
let editStatus = false;
let id = '';
let printCards = document.querySelector('#tasks-container');
export const setupPost = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
        const post = doc.data()
        post.id = doc.id;
        const praint = cardWall(post);
        html += praint;
        });
    printCards.innerHTML=html;
    } else {
    printCards.innerHTML='<p>Login to see Posts</p>';
    };

const buttonDelete = document.querySelectorAll('.deletePublication');
buttonDelete.forEach(history => {
    history.addEventListener('click', (e) => {
        if (confirm('¿Estas segurx que quieres eliminar la reseña de viaje?')) {
            // Save it!
            console.log('La historia se ha borrado');
            deleteHistory(e.target.dataset.id);
          } else {
            // Do nothing!
            console.log('No se borro');
          }
            
            
        })
    })
//edit
let buttonHistories = document.getElementById('save');
const buttonEdit = document.querySelectorAll('.editPublication');
buttonEdit.forEach(history => {
    history.addEventListener('click', async (e) => {
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
        id= post.id
        buttonHistories.innerText = 'Guardar';
        //editeHistory(e.target.dataset.id);
        } catch (error) {
            console.log(error);
        }
    })
    
    });

};

buttonHistories.addEventListener('click', async (e) => {
    e.preventDefault();
    const title = document.getElementById('task-InputNewPublication');
    const description = document.getElementById('task-contentPublication');
      
    try {
        if (!editStatus) {
            await historyRef(title.value, description.value);
        } else {
            await updateHistory(id, {
              title: title.value,
              description: description.value,
            })
      
            editStatus = false;
            id = ''
            buttonHistories.innerText = 'Save';
          }
      
        formHistories.reset();
        title.focus();
    } catch (error) {
        console.log(error);
        }
    });



