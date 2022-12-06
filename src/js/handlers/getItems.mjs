import * as urls from '../api/constants.mjs';
import * as itemMethods from '../api/items/index.mjs';
import * as templates from '../api/templates/index.mjs';
import { errorMessage } from '../components/displayError.mjs';

const topButton = document.querySelector('#topButton');
const listingsContainer = document.querySelector('#listingsContainer');

const action = '/listings';

export async function getItemsList() {
  const getListingsURL = `${urls.API_AUCTION_URL}${action}`;
  try {
    const items = await itemMethods.getListingsUnauthorized(getListingsURL);
    const container = document.querySelector('#listingsContainer');
    container.innerHTML = '';
    templates.renderItemsTemplate(items, container);
    topButton.style.display = 'block';
  } catch {
    console.log('An error has occured');
    listingsContainer.innerHTML = errorMessage('An error has occured');
    listingsContainer.classList.add('text-center');
  }
}
