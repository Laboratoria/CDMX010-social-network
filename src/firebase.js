import { onNavigate } from './routers.js';
import { cardWall } from './lib/card-wall.js';
import { numLikes } from './main.js'

let firebaseConfig = {
  apiKey: "AIzaSyAphkTjnCyuMEe9J2BlkLSnRf11LDrRKq8",
  authDomain: "jaloredsocial.firebaseapp.com",
  projectId: "jaloredsocial",
  storageBucket: "jaloredsocial.appspot.com",
  messagingSenderId: "438968128013",
  appId: "1:438968128013:web:9d1b47242a6f58c825bb44",
  measurementId: "G-8FRZGM62BF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Register function
export function register (){
  let email = document.getElementById('email').value;
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('passwordToVerify').value;
  if (password != password2) {
    document.getElementById("error").classList.add("mostrar");
    return false;
  } 
  if (password === password2){
    document.getElementById("error").classList.remove("mostrar");
    document.getElementById("ok").classList.remove("ocultar");
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      onNavigate('/wall');
      alert(`Bienvenidx a Jalö ${name}
      !Tu red social para escribir sobre tus lugares magicos en el mundo!`);
  })
    .catch((error) => {
      console.log(error);
      let errorMessage = error.message;
      alert(errorMessage, 4000);
    })
    return true; 
  }
};

//Login google function
export function loginGoogle (){
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
    .then((result) => {
      let credential = result.credential;
      let token = credential.accessToken;
      let user = result.user;
      onNavigate('/wall');
    })
    .catch((error) => {
      console.log(error);
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage, 4000);
      let email = error.email;
      credential = error.credential;
   });
};

//Access jalo function
export function accessJalo (){
  let emailLog = document.getElementById('emailOldUser').value;
  let passwordLog = document.getElementById('passwordOldUser').value;
  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
    .then(result => {
      onNavigate('/wall');
      })
      //$('.modal').modal('close')
    .catch((error) => {
      console.log(error);
      let errorCode = error.code;
      let errorMessage = error.message;
      alert(errorMessage, 4000);
    });
};

//guardar la publicacion a firebase
const db = firebase.firestore();

export function activeUser() {
  return firebase.auth().currentUser;
};

export const savePost = (title, description, like) => {
  db.collection('Histories').doc().set({
      title,
      description,
      like
    }).then(function() {
      console.log('history saved');
    }).catch ((error) => {
      console.log('Got an error: '. error);
        console.log(error);
      });
  }; 

let orderDate = () => {db.collection('Histories').orderBy('date')};
export const getData = () => {
  console.log('ejecucion de getData');
  db.collection("Histories")
  .onSnapshot((querySnapshot) =>{
   let html = '';
   let PostContainer = document.getElementById('tasks-container');
    PostContainer.innerHTML = html;
    querySnapshot.forEach( async (doc)  => {
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
export const getHistoryEdit = (id) =>  db.collection('Histories').doc(id).get();
export const updateHistory = (id, updatedHistory) => db.collection('Histories').doc(id).update(updatedHistory);