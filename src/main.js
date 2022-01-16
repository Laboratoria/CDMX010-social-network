/* eslint-disable quotes */
import * as firebase from './lib/firebase.js';
import { routes, onNavigate, loadFirebase} from "./routes.js";
// import { places, placeCard, setCards } from './components/places.js';
// import { likesReview } from "./components/retro.js";

let rootDiv = document.getElementById("root");

loadFirebase(firebase);

window.addEventListener("DOMContentLoaded", () => {
  let updateId = null;
  const component = routes[window.location.pathname];
  component(rootDiv, firebase);

  rootDiv.addEventListener("click", (event) => {
    const target = event.target;
    // if (target.id !== 'signUp' && target.id !== 'login') return;
    // if (target.id === "likeIcon") {
    //   likesReview();
    // }
  });
  // console.log(document.querySelector('#returnArrow'));
  // eventodeboton
});

window.onpopstate = () => {
  const component = routes[window.location.pathname];
  component(rootDiv, firebase);
};
