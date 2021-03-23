/* eslint-disable no-restricted-globals */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from './routers.js';
// eslint-disable-next-line import/no-cycle
import {
  // eslint-disable-next-line max-len
  register, loginGoogle, accessJalo, deleteHistory, savePost, getHistoryEdit, updateHistory, activeUser,
} from './firebase.js';
// Función para mandar llamar el id que se usa para el evento para ir de home a login.
const createNewUser = () => {
  const createUser = document.getElementById('newUser');
  createUser.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });
};

window.addEventListener('DOMContentLoaded', () => createNewUser());

// Función para mandar llamar el id que se usa para el evento para ir de home a home-login.
const oldUser1 = () => {
  const enter = document.getElementById('oldUser');
  enter.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home-login');
  });
};

window.addEventListener('DOMContentLoaded', () => oldUser1());

// login to wall
const buttonLogin = () => {
  const youLogin = document.getElementById('checkIn');
  youLogin.addEventListener('click', (e) => {
    // verificarPasswords()
    e.preventDefault();
    register();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonLogin());

// Google to wall
const buttonGoogle = () => {
  const youLoginGoogle = document.getElementById('buttonGoogle');
  youLoginGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonGoogle());

// SingIn with inputs
const buttonSingIn = () => {
  const singInWithInputs = document.getElementById('buttonLoginInputs');
  singInWithInputs.addEventListener('click', (e) => {
    e.preventDefault();
    accessJalo();
  });
};

window.addEventListener('DOMContentLoaded', () => buttonSingIn());

// the actions in inputs div wall.
const like = [];
let editStatus = false;
let id = '';
const buttonHistories = document.getElementsByClassName('save');
const formHistories = document.getElementById('task-formPublication');
const updatePost = document.querySelector('#history-container');
updatePost.addEventListener('click', async (e) => {
  if (e.target.classList.contains('save')) {
    e.preventDefault();
    const title = document.getElementById('task-InputNewPublication');
    const description = document.getElementById('task-contentPublication');
    try {
      if (!title.value.trim() || !description.value.trim()) {
        // eslint-disable-next-line no-alert
        alert('Escribe algo antes de publicar!');
      }
      if (!editStatus) {
        await savePost(title.value, description.value, like);
      } else {
        await updateHistory(id, {
          title: title.value,
          description: description.value,
        });
        // eslint-disable-next-line no-console
        console.log('Si estoy');
        editStatus = false;
        id = '';
        buttonHistories[0].innerText = 'Save';
      }
      formHistories.reset();
      title.focus();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
});

// put all the histories and delete
const printCards = document.querySelector('#tasks-container');
printCards.addEventListener('click', async (e) => {
  if (e.target.classList.contains('deletePublication')) {
    // eslint-disable-next-line no-console
    console.log('si puedo borrar');
    // eslint-disable-next-line no-restricted-globals
    // eslint-disable-next-line no-alert
    if (confirm('¿Estas segurx que quieres eliminar la reseña de viaje?')) {
      // Save it!
      // eslint-disable-next-line no-console
      console.log('La historia se ha borrado');
      // eslint-disable-next-line no-console
      console.log(e.target.dataset.id);
      await deleteHistory(e.target.dataset.id);
    } else {
      // eslint-disable-next-line no-console
      console.log('No se borro');
    }
  }
  if (e.target.classList.contains('editPublication')) {
    try {
      // eslint-disable-next-line no-shadow
      const buttonHistories = document.getElementsByClassName('save');
      const doc = await getHistoryEdit(e.target.dataset.id);
      const post = doc.data();
      const title = document.getElementById('task-InputNewPublication');
      const description = document.getElementById('task-contentPublication');
      title.value = post.title;
      description.value = post.description;
      buttonHistories[0].innerText = 'Guardar';
      editStatus = true;
      id = doc.id;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
});

export const numLikes = () => {
  const desenviaja = document.querySelectorAll('.desenviaja');
  const user = activeUser();
  desenviaja.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      // define los ids indivisuales
      // eslint-disable-next-line no-console
      console.log('like funciono');
      const idlike = e.target.dataset.id;
      // eslint-disable-next-line no-console
      console.log(idlike, 'este es el id de la historia para like');
      const docJalo = await getHistoryEdit(idlike);
      const docGet = docJalo.data();
      const mailLike = docGet.like;
      if (mailLike.includes(user.email)) {
        const filteredEmails = mailLike.filter((email) => email !== user.email);
        const updates = { like: filteredEmails };
        await updateHistory(idlike, updates);
      } else {
        mailLike.push(user.email);
        const updates = { like: mailLike };
        await updateHistory(idlike, updates);
      }
    });
  });
};
