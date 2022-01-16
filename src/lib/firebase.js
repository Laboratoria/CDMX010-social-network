const firebaseConfig = {
  apiKey: 'AIzaSyDP4-xDQtn-5NB8-ICDuVPVNmxzB3WrYcE',
  authDomain: 'red-social--mxchilazo.firebaseapp.com',
  projectId: 'red-social--mxchilazo',
  storageBucket: 'red-social--mxchilazo.appspot.com',
  messagingSenderId: '905471998919',
  appId: '1:905471998919:web:eed9430c0611304c3e77e2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// escribir datos
export function saveData(user) {
  console.log(user.user.uid); // uid de usuario
  console.log(user.user.email);
  const usuario = {
    uid: user.user.uid,
    email: user.user.email,
  };
  db.collection('users')
    .doc()
    .set(usuario)
    .then(() => {
      console.log('Document successfully written!');
    });
}

// comenzar firebase registra nuevos usuarios
export const newUserAccount = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
};

// usuarios existentes
export const loginUser = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
};

// autentificacion google
export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider);
};

// autentificacion facebook
export const facebookAuth = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider);
};

// escribir datos del post a db
export const buildReview = async (name, review, like) => {
  await db
    .collection('reviews')
    .doc()
    .set({ name, review, like })
    .then(() => {
      console.log('Document successfully written!');
    });
};

// cuando se obtienen tareas. de la collectacion cada vez que un dato
// cambie o una nueva tarea sea agregada voy a manejarlo como una funcion callback
export const onGetReviews = (callback) => db.collection('reviews').onSnapshot(callback);

// leer datos “get” para recuperar toda la colección.

export const deleteReview = (id) => db.collection('reviews').doc(id).delete();

export const getReview = (id) => db.collection('reviews').doc(id).get();

export const editReview = (id, updatedReview) => db.collection('reviews').doc(id).update(updatedReview);
