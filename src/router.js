import home from "./home.js";
import contact from "./contact.js";
import login from "./login.js";
import signUp from "./signUp.js";
import wall from "./wall.js";

const rootDiv = document.getElementById("root");

export const routes = {
    '/' : home,
    '/contact' :contact,
    '/login' : login,
    '/signUp' : signUp,
    '/wall' : wall,
  }
  
  export const onNavigate = (pathname) => { 
    window.history.pushState( {}, pathname, window.location.origin + pathname); 
    const component = routes[pathname];
    component(rootDiv);
  }
  
  window.onpopstate = () => {
    const component = routes[window.location.pathname]
    component(rootDiv)
  }