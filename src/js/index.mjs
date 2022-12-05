import * as listeners from './handlers/index.mjs';
import {} from './components/index.mjs';
import * as actions from './dom-localStorage/index.mjs';

const urlPath = location.pathname;

if (urlPath === '/index.html' || urlPath === '/') {
  listeners.getItemsList();
  listeners.activateFilterDesc();
  listeners.activateFilterAsc();
} else if (urlPath === '/html/register/') {
  listeners.setFormRegisterListener();
} else if (urlPath === '/html/login/') {
  listeners.setFormLoginListener();
} else if (urlPath === '/html/profile/details/') {
  listeners.getProfile();
  actions.logOut();
}

actions.updateNavLinks();
