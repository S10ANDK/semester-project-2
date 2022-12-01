import * as listeners from './handlers/index.mjs';
import {} from './components/index.mjs';

const urlPath = location.pathname;

if (urlPath === '/index.html' || urlPath === '/') {
  listeners.getItemsList();
  listeners.activateFilterDesc();
  listeners.activateFilterAsc();
} else if (urlPath === '/html/register/') {
  listeners.setFormRegisterListener();
}
