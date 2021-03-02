import { onNavigate } from './routers.js';
//import {verificarPasswords} from './main.js';

var firebaseConfig = {
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
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var password2 = document.getElementById('passwordToVerify').value;
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
      onNavigate('/wall')
      // } else {
      //     showModals(noVerification);
      //     firebase.auth().signOut();
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage, 4000);
    })
  
    return true;
  }

  };
  
  

//Login google function
export function loginGoogle (){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      onNavigate('/wall');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage, 4000);
      var email = error.email;
      credential = error.credential;
   });
};

//Access jalo function
export function accessJalo (){
  var emailLog = document.getElementById('emailOldUser').value;
  var passwordLog = document.getElementById('passwordOldUser').value;
  firebase.auth().signInWithEmailAndPassword(emailLog, passwordLog)
    .then((user) => {
      onNavigate('/wall');
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage, 4000);
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
      } 
      else {
      }
    });
}