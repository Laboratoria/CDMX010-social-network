export const retroView = (target, firebase) => {
  const html = `
  <div id="retroView" class="container">
      
      <div id="header">
      <nav id="menu">
          <div class="barra">
              <input type="checkbox"/>
                  <label><i aria-hidden="true" class="fa fa-bars"></i></label>
                  <ul class='principal'>
                      <li><a href="/">Inicio</a></li>
                          <li><a href="#">Alcaldías<i class="fa fa-chevron-down"></i></a>
                          <input type="checkbox"/>
                          <label><i aria-hidden="true" class="fa fa-cheron-down"></i></label>
                          <ul class="principal">
                              <ul class="menus">
                              <li><a href="#">Alvaro Obregón</a></li>
                              <li><a href="#">Azcapotzalco</a></li>
                              <li><a href="#">Coyoacan</a></li>
                              <li><a href="#">Gustavo A. Madero</a></li>
                              <li><a href="#">Iztacalco</a></li>
                              <li><a href="#">Iztapalapa</a></li>
                              <li><a href="#">Magdalena Contreras</a></li>
                              <li><a href="#">Tlahuac</a></li>
                              <li><a href="#">Tlalpan</a></li>
                              <li><a href="#">Xochimilco</a></li>
                              </ul>
                          </ul>
                          </li>
                      <li><a href="#">Los 10 más populares</a></li>
                      <li><a href="#">Favoritos</a></li>
                      <li><a href="#">Cerrar Sesión</a></li>
                  </ul>

              <div class="iconos">
                  <a href="#"><i aria-hidden="true" class="fa fa-home"></i></a>
              </div>

          </div>
      </nav> 
      </div>

      <div id="placeViewSingle" class="placeViewSingle">
          <h3>Bellas Artes</h3>
          <h3>Cuautémoc</h3>
          <img id="" src="" alt="" />
          <img id="placeImg" src="https://thehappening.com/wp-content/uploads/2018/06/palacio-de-bellas-artes.jpg" alt=""/>
          <div id="info">
              <p id="pPlace">Juárez s/nCentro,Ciudad de México, 06050</p>
              <h4>ACERCA DE:</h4>
              <p id="pPlace">
              El Palacio es famoso no sólo por su arquitectura, sino por su acervo
              ya que alberga 17 murales de artistas nacionales que se elaboraron
              entre 1928 y 1963. Los murales que destacan El Hombre...
              </p>
          </div>
      </div>

      <div id="postContainer">
          <textarea id="name" class="name clear inpStyle" placeholder="Usuario"></textarea>
          <textarea id="review" class="reviewText clear inpStyle" placeholder="Escribe aquí tu reseña"></textarea>
          <input type="button" id="postIt" class="postIt" value="PUBLICAR">
          <input type="button" id="editPostIt" class="editPostIt postIt" style = "display: none" value="EDITAR">
      </div>
      
      <h2>RESEÑAS</h2>
      
      <div id="reviewsContainer"></div>

      </div>
  `;
  target.innerHTML = html;

  const reviewsContainer = document.querySelector('#reviewsContainer');
  // cada vez que se ejecute el get dara un dato cada vez que cambie
  firebase.onGetReviews((querySnapshot) => {
    // se recibe a travez del objeto query, todos los datos
    // antes de que hagas el foreach
    reviewsContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
      // console.log(doc.data());
      const revs = doc.data();
      revs.id = doc.id; // solo id de la review
      console.log(revs); // info de las reviews name, post y id
      const likes = revs.like.length;
      console.log(likes);
      reviewsContainer.innerHTML += `
                <div id="reviewCard" class="reviewCard">
                    <p>Usuario: ${revs.name}<br>Reseña: ${revs.review}</p>
                    <p>${likes}</p>
                    <input type="image" id="likeIcon" class="likeIcon" data-id="${revs.id}" src="img/like.png">
                    <button type="submit" id="btnEdit" class="btnEdit btnStyle" data-id="${revs.id}">Editar</button>
                    <button id="btnDelete" class="btnDelete btnStyle" data-id="${revs.id}">Borrar</button>
                </div>
                `;
      // quit review
      const btnDelete = document.querySelectorAll('#btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          await firebase.deleteReview(event.target.dataset.id).then(() => {
            console.log(`reseña ${event.target.dataset.id} borrada`);
          });
        });
      });
      //
      let updateId = null;
      // modify review
      const btnEdit = document.querySelectorAll('#btnEdit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (event) => {
          document.querySelector('#postIt').style.display = 'none';
          document.querySelector('#editPostIt').style.display = 'block';
          await firebase.getReview(event.target.dataset.id).then((rev) => {
            const textReview = rev.data();
            console.log(textReview);
            document.querySelector('#name').value = textReview.name;
            document.querySelector('#review').value = textReview.review;
            updateId = event.target.dataset.id;
          });
        });
      });
      // updateReview
      document.getElementById('editPostIt').addEventListener('click', async () => {
        document.querySelector('#postIt').style.display = 'block';
        document.querySelector('#editPostIt').style.display = 'none';
        await firebase.editReview(updateId, {
          name: document.querySelector('#name').value,
          review: document.querySelector('#review').value,
        }).then(() => {
          limpiar();
          reLimpiar();
        });
      });
    });
    const btnLike = document.querySelectorAll('#likeIcon');
    btnLike.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        // console.log('likeado');
        const uidStorage = localStorage.getItem('idUser');
        console.log(uidStorage);
        firebase.getReview(event.target.dataset.id).then((rev) => {
          const uidData = rev.data().like;
          let likeActive = false;
          if (uidData.length !== 0) {
            uidData.forEach((uid) => {
              if (uid === uidStorage) {
                likeActive = true;
              }
            });
          }
          if (likeActive === false) {
            uidData.push(uidStorage);
            firebase.editReview(event.target.dataset.id, {
              like: uidData,
            }).then(() => {
            });
          } else {
            const uidPosition = uidData.indexOf(uidStorage);
            uidData.splice(uidPosition, 1);
            firebase.editReview(event.target.dataset.id, {
              like: uidData,
            }).then(() => {
            });
          }
        });
      });
    });
  });

  function limpiar() {
    document.getElementsByClassName('clear')[0].value = '';
  }

  function reLimpiar() {
    document.getElementsByClassName('clear')[1].value = '';
  }
  // subir info a firestore
  // new Review
  document.getElementById('postIt').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const review = document.querySelector('#review').value;
    console.log(name, review);
    const like = [];
    if (name !== '') {
      firebase.buildReview(name, review, like);
      limpiar();
      reLimpiar();
    }
  });
};
