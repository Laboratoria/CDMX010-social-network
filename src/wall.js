import { endSesion } from './lib/aut.js';

export const wall = (target) => {
  const html = `
<h1>POSTS</h1>
<button class="end" id="btnEnd">Cerrar sesión</button>
<div class="postContainer">
<div class="post-card">
<form id="task-form">
<input autofocus type="text" id="post-title" class="form-control"
placeholder="titulo de tu post">

</div> 
<div class= "post">
<textarea id="post-description" row="10" class="form-control"
placeholder="Escribe un post :D"></textarea>
</div>
<button class="btnpost" id="btnpost"> Comparte! </button>
</form>
</div>

<h3 id="title"></h3>


`;

  target.innerHTML = html;

  // función cerrar sesión//

  const btnEnd = document.getElementById('btnEnd');
  btnEnd.addEventListener('click', (e) => {
    e.preventDefault();
    endSesion();
  });

  const db = firebase.firestore();

  function save() {
    const title = document.getElementById('post-title').value;
    const posted = document.getElementById('post-description').value;

    db.collection('posts').add({
      title,
      posted,
    })
      .then((docRef) => {
        console.log(docRef.id);
        const title = document.getElementById('post-title').value = '';
        const posted = document.getElementById('post-description').value = '';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const btnpost = document.getElementById('btnpost');
  btnpost.addEventListener('click', (e) => {
    e.preventDefault();
    save();
  });

  // leyendo datos//
  const titleDos = document.getElementById('title');
  db.collection('posts').get().then((querySnapshot) => {
    titleDos.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      titleDos.innerHTML += `
        <h2>Titulo</h2>
        <h4>${doc.data().title}</h4>
        <h2>publicación</h2>
        <h4>${doc.data().posted}</h4>
        `;
    });
  });
};

export default wall;

// const db = firebase.firestore();
// const btnpost=document.getElementById("btnpost");
// btnpost.addEventListener("click", async (e) =>{

// e.preventDefault();

// const title = document.getElementById("post-title").value;
// const posted = document.getElementById("post-description").value;
// const response = await db.collection("posts").doc().set({
//     title: title,
//     posted: posted,
// })
// console.log(response)

// console.log(title, posted)
// });

// }
