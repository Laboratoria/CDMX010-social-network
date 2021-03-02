import { onGetPost } from './lib/firebase.js';

onGetPost((querySnapshot) => {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';
  querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
    const post = doc.data();
    // llama al id del post
    post.id = doc.id;
    // console.log(post);
    postList.innerHTML += `
      <a href="#" class="single-post" data-id="${post.id}">
        <h2 class="title-list">${post.title}</h2>
      </a>
    `;
  });
});

export const home = `
  <div id="back-list">
    <div id="post-list"></div>
  </div>
`;
