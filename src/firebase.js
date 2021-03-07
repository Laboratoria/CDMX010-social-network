import { onNavigate } from './routers.js';
import { cardWall } from './lib/card-wall.js';

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
      //Signed in
      //verificarPasswords();
      onNavigate('/wall');
      // } else {
      //     showModals(noVerification);
      //     firebase.auth().signOut();
      //showAlert()
      
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
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let uid = user.uid;
      db.collection('Histories')
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
        setupPost(snapshot.docs);
      })
    } 
    else {
      console.log('auth: dign out')
    }
  });

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
   firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      let uid = user.uid;
      db.collection('Histories')
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
        setupPost(snapshot.docs);
      })
    } 
    else {
      console.log('auth: dign out')
    }
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let uid = user.uid;
        db.collection('Histories')
        .get()
        .then((snapshot) => {
          console.log(snapshot.docs);
          setupPost(snapshot.docs);
        })
      } 
      else {
        console.log('auth: dign out')
      }
    });
};

//publication in wall
const db = firebase.firestore();
export const historyRef = (title, description) => {
  db.collection('Histories').doc().set({
    title,
    description,
    }).then(function() {
      console.log('history saved');
    }).catch ((error)  => {
      console.log('Got an error: '. error);
       console.log(error);
     });

    console.log(historyRef);
    console.log('funciono');
    console.log(title, description)}; 


// let praintCards = document.querySelector("tasks-container");
let praintCards = document.querySelector('#tasks-container');
const setupPost = data => {
  if (data.length) {
  let html = '';
  data.forEach(doc => {
    const post = doc.data()
    console.log(post);
    const praint = cardWall(post);
    html += praint;
    });
  praintCards.innerHTML=html;
} else {
  praintCards.innerHTML='<p>Login to see Posts</p>';
}};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let uid = user.uid;
    db.collection('Histories')
    .get()
    .then((snapshot) => {
      console.log(snapshot.docs);
      setupPost(snapshot.docs);
    })
  } 
  else {
    console.log('auth: dign out')
  }
});

