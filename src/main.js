import { onNavigate } from './routers.js';
import { register, loginGoogle, accessJalo, db } from './firebase.js';
import { cardWall } from './lib/card-wall.js'


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



//login a wall
const buttonLogin = () => {
    let youLogin = document.getElementById('checkIn');
    youLogin.addEventListener('click', (e) => {
        //verificarPasswords()
        e.preventDefault();
        register();
    });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());


//Google a wall
const buttonGoogle = () => {
    let youLoginGoogle = document.getElementById('buttonGoogle');
    youLoginGoogle.addEventListener('click', (e) => {
        e.preventDefault();
        loginGoogle();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogle());


//Google a wall con inputs
const buttonGoogleInput = () => {
    let youLoginGoogleInputs = document.getElementById('buttonLoginInputs');
    youLoginGoogleInputs.addEventListener('click', (e) => {
        e.preventDefault();
        accessJalo();
    });
};
window.addEventListener('DOMContentLoaded', () => buttonGoogleInput());


//Publicated porst in Wall
const saveTask = (title, description) => 
        db.collection('tasks').doc().set({
                title,
                description
            });
async function getTasks() {db.collection('Tasks').get()};
const onGetTasks = (callback) => db.collection('tasks').onSnapshot(callback);
    console.log(onGetTasks);

export const task = doc();

async function forEachCard() {
    console.log('tambien escucho');
    const tasks = await getTasks();
    console.log(tasks);
    const taskContainer = document.getElementById('tasks-container');
    onGetTasks((querySnapshot) => {
        taskContainer.innerHTML ='';
        querySnapshot.forEach(doc => {
            console.log(doc.data());
                       
            task();

            taskContainer.innerHTML += cardWall();
        })
    })
};
window.addEventListener('DOMContentLoaded',forEachCard());
const buttonSavePublication = () => {
    
    let taskForm = document.getElementById('task-formPublication');

    taskForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = taskForm['task-InputNewPublication'];
        const description = taskForm['task-contentPublication'];

        await saveTask(title.value, description.value)
        await forEachCard();
        await getTasks();
        taskForm.reset();
        title.focus();
        console.log('si escucho');      
    })
};

window.addEventListener('click', buttonSavePublication());
