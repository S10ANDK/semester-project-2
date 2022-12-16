import * as urls from '../api/constants.mjs';
import * as itemMethods from '../api/items/index.mjs';
import * as templates from '../api/templates/index.mjs';
import { errorMessage } from '../components/displayError.mjs';

const topButton = document.querySelector('#topButton');

const action = '/listings';

export async function getItemsList() {
  const listingsContainer = document.querySelector('#listingsContainer');
  const getListingsURL = `${urls.API_AUCTION_URL}${action}`;
  try {
    const items = await itemMethods.getListingsUnauthorized(getListingsURL);
    listingsContainer.innerHTML = '';
    templates.renderItemsTemplate(items, listingsContainer);
    topButton.style.display = 'block';
  } catch {
    console.log('An error has occured');
    listingsContainer.innerHTML = errorMessage('An error has occured');
    listingsContainer.classList.add('text-center');
  }
}

export async function getSpecificItem() {
  const pageContainer = document.querySelector('#pageContainerItemSpecific');
  const listingContainer = document.querySelector('#itemContainer');
  try {
    const item = await itemMethods.getListingUnauthorized();
    listingContainer.innerHTML = '';
    templates.renderItemTemplate(item, listingContainer);
  } catch {
    console.log('An error has occured');
    pageContainer.innerHTML = '';
    pageContainer.innerHTML = errorMessage('An error has occured');
    pageContainer.classList.add('text-center');
  }
}
