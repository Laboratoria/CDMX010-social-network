// eslint-disable-next-line import/no-cycle
import { onNavigate } from './routers.js';
import { cardWall } from './lib/card-wall.js';
// eslint-disable-next-line import/no-cycle
import { numLikes } from './main.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAphkTjnCyuMEe9J2BlkLSnRf11LDrRKq8',
  authDomain: 'jaloredsocial.firebaseapp.com',
  projectId: 'jaloredsocial',
  storageBucket: 'jaloredsocial.appspot.com',
  messagingSenderId: '438968128013',
  appId: '1:438968128013:web:9d1b47242a6f58c825bb44',
  measurementId: 'G-8FRZGM62BF',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Register function
// eslint-disable-next-line consistent-return
export function register() {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const password2 = document.getElementById('passwordToVerify').value;
  if (password !== password2) {
    document.getElementById('error').classList.add('mostrar');
    return false;
  }
  if (password === password2) {
    document.getElementById('error').classList.remove('mostrar');
    document.getElementById('ok').classList.remove('ocultar');
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        onNavigate('/wall');
        // eslint-disable-next-line no-alert
        alert(`Bienvenidx a Jalö ${name}
      !Tu red social para escribir sobre tus lugares magicos en el mundo!`);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        const errorMessage = error.message;
        // eslint-disable-next-line no-alert
        alert(errorMessage, 4000);
      });
    return true;
  }
}

// Login google function
export function loginGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      onNavigate('/wall');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(errorMessage, 4000);
      // eslint-disable-next-line no-undef
      credential = error.credential;
    });
}

// Access jalo function
export function accessJalo() {
  const emailLog = document.getElementById('emailOldUser').value;
  const passwordLog = document.getElementById('passwordOldUser').value;
  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
    .then(() => {
      onNavigate('/wall');
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(errorMessage, 4000);
    });
}

// guardar la publicacion a firebase
const db = firebase.firestore();

export function activeUser() {
  return firebase.auth().currentUser;
}

export const savePost = (title, description, like) => {
  db.collection('Histories').doc().set({
    title,
    description,
    like,
  });
};

const orderDate = () => { db.collection('Histories').orderBy('date'); };
export const getData = () => {
  db.collection('Histories')
    .onSnapshot((querySnapshot) => {
      let html = '';
      const PostContainer = document.getElementById('tasks-container');
      PostContainer.innerHTML = html;
      querySnapshot.forEach(async (doc) => {
        const post = doc.data();
        post.id = doc.id;
        html += cardWall(post);
      });
      PostContainer.innerHTML += html;
      orderDate();
      numLikes();
    });
};

export const deleteHistory = (id) => db.collection('Histories').doc(id).delete();
export const getHistoryEdit = (id) => db.collection('Histories').doc(id).get();
export const updateHistory = (id, updatedHistory) => db.collection('Histories').doc(id).update(updatedHistory);
