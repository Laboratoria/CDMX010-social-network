import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, deleteHistory, getHistoryEdit} from './firebase.js';
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
buttonHistories.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('si escucho');
    let title = document.getElementById('task-InputNewPublication').value;
    let description = document.getElementById('task-contentPublication').value;
    
    historyRef(title, description);
    console.log(title, description);
    buttonHistories.reset();
});



//put all the histories and delete
let praintCards = document.querySelector('#tasks-container');
export const setupPost = data => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
        const post = doc.data()
        post.id = doc.id;
        const praint = cardWall(post);
        html += praint;
        });
    praintCards.innerHTML=html;
    } else {
    praintCards.innerHTML='<p>Login to see Posts</p>';
    };

const buttonDelete = document.querySelectorAll('.deletePublication');
buttonDelete.forEach(history => {
    history.addEventListener('click', (e) => {
         deleteHistory(e.target.dataset.id);
        })
    })
//edit
const buttonEdit = document.querySelectorAll('.editPublication');
buttonEdit.forEach(history => {
    history.addEventListener('click', async (e) => {
        console.log('editando'); 
        console.log(e.target.dataset.id);
        const doc = await getHistoryEdit(e.target.dataset.id);
        console.log(doc.data());
        //editeHistory(e.target.dataset.id);
        })
    })
};




