export const feed = `
<div id="feedScreen" class="container2">
  <header class="menu">
      <img src="images/logo app2.png" class="logoMenu">
      <section class="iconHeader">
        <input type="image" id="alcaldiasIcon" class="alcaldiasIcon" src="images/alcaldias.png">
        <input type="image" id="btnSignOut" class="menuIcon" src="images/signoutIcon.png">
      </section>
  </header>
  <div id="btnPost">
    <input type="button" id="goPostScreen" class="orangeButton" value="CREAR NUEVO POST">
    </div>
  <div id="postContainer" class="postContainer"></div>
</div>
    `;

export const buildPost = async (onGetPost) => {
  const postContainer = document.querySelector('#postContainer');
  await onGetPost((postCollection) => {
    postContainer.innerHTML = '';
    // postCollection.then((doc) => {
    postCollection.forEach((element) => {
      const infoPost = element.data();
      infoPost.id = element.id;
      const numberLike = infoPost.like.length;
      postContainer.innerHTML += `
      <div class="singlePost">
  <!--       <input type="image" id="profilePicture">
        <ul class="postData">
            <li>Nombre:</li>
            <li>Fecha:</li>
            <li>Ubicación</li>
        </ul> -->
        <p>${infoPost.post}</p>
        <p>${infoPost.alcaldias}</p>
        <h5>${numberLike}</h5>
        <input type="image" id="likeIcon" class="likeIcon" data-id="${infoPost.id}" src="images/likeIcon.png">
        <input type="image" id="editIcon" class="editIcon btnEdit" data-id="${infoPost.id}" src="images/editIcon.png">
        <input type="image" id="deleteIcon" class="deleteIcon btnDelete" data-id="${infoPost.id}" src="images/deleteIcon.png">
      </div>
        `;
    });
    // });
  });
};

export const removePost = (deletePost, postId) => {
  // eslint-disable-next-line no-restricted-globals
  const option = confirm('¿Estás seguro de querer eliminar el post?');
  if (option === true) {
    deletePost(postId).then(() => {
      console.log(`post${postId}borrado con exito`);
    });
  }
};

export const funcLike = (postId, getPost, editPost) => {
  const emailStorage = localStorage.getItem('emailStorage');
  getPost(postId).then((post) => {
    const emailData = post.data().like;
    let likeActive = false;
    if (emailData.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      emailData.forEach((email) => {
        if (email === emailStorage) {
          likeActive = true;
        }
      });
    }
    if (likeActive === false) {
      emailData.push(emailStorage);
      editPost(postId, {
        like: emailData,
      }).then(() => {
      });
    } else {
      const emailPosition = emailData.indexOf(emailStorage);
      emailData.splice(emailPosition, 1);
      editPost(postId, {
        like: emailData,
      }).then(() => {
      });
    }
  });
};

/* function removeItemFromArr ( arr, item ) {
  var i = arr.indexOf( item );
  arr.splice( i, 1 );
} */